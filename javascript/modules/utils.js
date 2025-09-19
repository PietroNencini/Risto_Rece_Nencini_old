//! ATTENZIONE: Non usare nomi per le cartelle che si trovano prima di quelle di base (php, pages ecc.) con i nomi presenti in BASE_FOLDERS, o l'algoritmo troverà quelle per prime, causando un errore
//* ATTENZIONE: ogni cartella aggiunta nella root directory del progetto deve essere aggiunta con lo stesso identico nome anche in BASE_FOLDERS, altrimenti l'algoritmo relocator non funzionerà
export const BASE_FOLDERS = ["php", "pages", "javascript", "css", "images", "docs", "test"];

export function getRootDir() {
    return "/content/Risto_Rece_Nencini/"; // Cambiare il percorso in base al branch di sviluppo
}

export function findBaseFolder(currentPath) {
    let splitted = currentPath.split("/");
    //console.log(splitted);
    for(let i = 0; i<splitted.length; i++) {
        for(let j = 0; j<BASE_FOLDERS.length; j++) {
            if(splitted[i] == BASE_FOLDERS[j]) {
                //console.log(BASE_FOLDERS[j]);
                return  BASE_FOLDERS[j];
            }
        }
    }
    return -1;
}


//ATTENZIONE: La pulizia del percorso funziona a patto che nellla cartella root si trovi solo la pagina index.php, con tutte altre risorse che chiamano questo script situate in apposite sottocartelle
export function findFromBaseToDestination(path) {
    
    let nearest_base_folder = findBaseFolder(path);

    if(nearest_base_folder == -1) {
        return "/index.php";
    }

    let index = path.indexOf(nearest_base_folder);
    let from_base_to_destination = index !== -1 ? path.slice(index) : path;

    console.log(from_base_to_destination);

    return "/" + from_base_to_destination;
}


export async function askIfLogged() {
    return fetch(getRootDir() + "php/servers/ask_if_logged.php", {
        method: "GET",
    })
    .then(response => response.json())
    .then(data => {
        return data.logged; // Return the result here
    });
}

export async function askUserNAme() {
    return fetch(getRootDir() + "php/servers/get_username.php", {
        method: "GET",
    })
    .then(response => response.json())
    .then(data => {
        return data.username; // Return the result here
    });
}
