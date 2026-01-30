const DEFAULT_ZOOM = 17
const DEFAULT_LATIT = 43.773118;
const DEFAULT_LONGIT = 11.255558

let maps = {};
let markerGroup = {};

async function getCoordinates(id_ristorante) { 
    
    const response =  await fetch(
        "../php/servers/get_coordinates.php?id_ristorante=" + id_ristorante, 
        {
            method: 'GET',
        }
    );
    
    const data = await response.json();
    
    return new Map([
        ["latit", data.lat],
        ["longit", data.lon]
    ]); 
}

async function showMap(mapId, rest_ID = null, marker = true, clickable = false){   
    console.log("ID mappa: " + mapId);
    if(!maps[mapId]) {
        maps[mapId] = {
            mapInstance: L.map(mapId),
            click: clickable
        };
        markerGroup[mapId] = L.layerGroup().addTo(maps[mapId].mapInstance);
    }

    let latit, longit;
    if(rest_ID != null) {
        const COORD = await getCoordinates(rest_ID);
        latit = COORD.get("latit");
        longit = COORD.get("longit");        
    } else {
        latit = DEFAULT_LATIT;
        longit = DEFAULT_LONGIT;
    }

    maps[mapId].mapInstance.setView(
        [latit, longit],
        DEFAULT_ZOOM
    );

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 20,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(maps[mapId].mapInstance);

    if(marker)
        addMarker(mapId, latit, longit);

    if(maps[mapId].click) {
        maps[mapId].mapInstance.on("click", function(e) {
            manageMapClick(e, mapId)
        });    
    }
}

function moveToLocation(mapId, latit, longit) {
    maps[mapId].mapInstance.setView([latit, longit], DEFAULT_ZOOM);
}

function addMarker(mapId, latit, longit) {
    let marker = L.marker([latit, longit]); 
    markerGroup[mapId].addLayer(marker);
}

function manageMapClick(e, mapId) {
    var coords = e.latlng;
    let inputs = document.getElementsByClassName("latlng_input");
    markerGroup[mapId].clearLayers();
    let marker = L.marker([coords.lat, coords.lng]);
    markerGroup[mapId].addLayer(marker); 
    if(inputs.length >= 2) {
        inputs[0].value = coords.lat;
        inputs[1].value = coords.lng;
    } else  {
        console.warn("ERRORE: Non ci sono abbastanza input, i valori non vengono assegnati");
    }
}
