let space = document.getElementsByTagName("body");
if(space[0].classList.contains("has_footer")) {
    createFooter();
}

function createFooter() {
    let footer = document.createElement("footer");
    footer.className = "bg-warning pt-3 pb-1";
    
    let container = document.createElement("div");
    container.className = "text-center";
    
    let row = document.createElement("div");
    row.className = "row";
    let col1 = createFooterColumn("Chi siamo", "C'è scritto tutto sulla Homepage, niente da vedere qui", "🛈");
    let col2 = createFooterColumn("Contatti", "Sviluppatore: utenteacaso@gmail.com <br> Amministratore: ristorece.admin@info.it", "📞");
    let col3 = createFooterColumn("Privacy", "Garantita la sicurezza sulle informazioni utente <br> Per informazioni chiedere al vicino di casa", "🔒");
    let col4 = createFooterColumn("Seguici", "SCHERZO! Il budget non permette ancora di avere una nostra pagina sui social", "🌍");

    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);
    row.appendChild(col4);
    
    container.appendChild(row);
    footer.appendChild(container);
    document.body.appendChild(footer);
}

function createFooterColumn(title, text, icon) {
    let col = document.createElement("div");
    col.className = "footer_column col-12 col-md-3";

    let heading = document.createElement("h5");
    heading.innerHTML = `${icon} ${title}`;

    let paragraph = document.createElement("p");
    paragraph.innerHTML = text;

    col.appendChild(heading);
    col.appendChild(paragraph);

    return col;
}