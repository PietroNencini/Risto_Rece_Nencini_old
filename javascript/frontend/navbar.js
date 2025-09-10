/* * HOMEPAGE: pages/website_intro.php * RISTORANTI: php/restaurants.php * INDEX: index.php * REGISTRAZIONE: php/registration.php * BENVENUTO: php/welcome.php * PROFILO: php/profile.php ? LOGOUT: php/scripts/logout_script.php */

import {CONFIG_BY_PATH} from "../modules/nav_config.js"; 
import { getGoodPath } from "../modules/relocator.js"; 
import { askIfLogged, findFromBaseToDestination } from "../modules/utils.js";

const position = window.location.pathname; 
let user_is_logged;

//*inizio script esecuzione (escludendo le costanti dichiarate sopra)
document.addEventListener("DOMContentLoaded", async function () {
    user_is_logged = await askIfLogged();
    console.log(user_is_logged);
    let cleaned_path = findFromBaseToDestination(position);
    let config = CONFIG_BY_PATH[cleaned_path];
    prepareNavBar(config);
});

function prepareNavBar(link_list) {

let nav_space = document.querySelector("header.nav_bar_keeper > div.container");
    if(nav_space == null) {
        console.log("Non ci sono elementi");
    } else {
        createNav(nav_space, link_list);
    }
}

function createBrand() { 

let brand = document.createElement("a"); 
brand.className = "navbar-brand jaini text-center"; 
brand.href = "../pages/website_intro.php";

let img_span = document.createElement("span");
img_span.style.fontSize = "3rem";

let img = document.createElement("img");
img.src = "../images/icons/R&R_definitivo.png";
img.alt = "risto&rece";
img.width = 96;
img.className = "d-inline-block align-text-center";

let span = document.createElement("span");
span.className = "ms-2";
span.innerHTML = "RISTO&RECE";

img_span.append(img, span);
brand.appendChild(img_span);
return brand;

}

function createToggleButton() { 
    let button = document.createElement("button"); 
    button.className = "navbar-toggler"; button.type = "button"; 
    button.setAttribute("data-bs-toggle", "collapse"); 
    button.setAttribute("data-bs-target", "#navbarNav"); 
    button.setAttribute("aria-controls", "navbarNav"); 
    button.setAttribute("aria-expanded", "false"); 
    button.setAttribute("aria-label", "Toggle navigation");

let toggler_icon = document.createElement("span");
toggler_icon.className = "navbar-toggler-icon";
button.appendChild(toggler_icon);

return button;

}

function createNavElem(text, correct_link) { 
    let li = document.createElement("li"); 
    li.className = "nav-item"; 
    let a = document.createElement("a"); 
    a.className = "nav-link"; 
    if(text == "Area Personale" && !user_is_logged) {
        a.classList.add("disabled");
    }
    if(!a.classList.contains("disabled") && correct_link == "#") {
        a.classList.add("active");
    }
    a.href = correct_link; 
    a.innerHTML = text; 
    li.appendChild(a); 
    return li; 
}

function createRightSection(config, user_is_logged, position) { 
    let form = document.createElement("div"); 
    form.id = "nav_right"; 
    form.className = "profile_elements";

if (user_is_logged) {
    let profileLink = document.createElement("a");
    profileLink.className = "nav-link";
    profileLink.href = getGoodPath(position, config.profile || "#");

    let iconSpan = document.createElement("span");
    iconSpan.className = "d-flex align-items-center";

    let icon = document.createElement("i");
    icon.className = "bi bi-person-fill";
    icon.style.fontSize = "3rem";
    icon.id = "profile_icon";

    iconSpan.appendChild(icon);
    profileLink.appendChild(iconSpan);
    form.appendChild(profileLink);
    
} else {
    let registerLink = document.createElement("a");
    registerLink.className = "nav-link w-50";
    registerLink.href = getGoodPath(position, config.registration || "#");

    let registerButton = document.createElement("button");
    registerButton.className = "btn btn-primary fw-bold";
    registerButton.innerText = "REGISTRATI";
    registerLink.appendChild(registerButton);
    form.appendChild(registerLink);

    let loginLink = document.createElement("a");
    loginLink.className = "nav-link w-50";
    loginLink.href = "../";

    let loginButton = document.createElement("button");
    loginButton.className = "btn btn-success fw-bold";
    loginButton.innerText = "ACCEDI";
    loginLink.appendChild(loginButton);
    form.appendChild(loginLink);
}

return form;

}

function createNav(nav_space, config) {

let nav = document.createElement("nav");
nav.className = "navbar navbar-expand-lg navbar-warning bg-warning";

let main_div = document.createElement("div");
main_div.className = "container-fluid fs-5";

let brand = createBrand();
let button = createToggleButton();

let nav_bar_nav = document.createElement("div");
nav_bar_nav.className = "collapse navbar-collapse ps-3";
nav_bar_nav.id = "navbarNav";

let sinistra = document.createElement("ul");
sinistra.className = "navbar-nav";

if(config.homepage != null) {
    let nav_elem = createNavElem("Homepage", config.homepage == "#" ? "#" : getGoodPath(position, config.homepage));
    sinistra.appendChild(nav_elem);
}
if(config.restaurants != null) {
    let nav_elem = createNavElem("Ristoranti", config.restaurants == "#" ? "#" : getGoodPath(position, config.restaurants));
    sinistra.appendChild(nav_elem);
}
//if(config.index != null) {
//    let nav_elem = createNavElem("Indice", config.index == "#" ? "#" : getGoodPath(position, config.index));
//    sinistra.appendChild(nav_elem);
//}
//if(config.registration != null) {
//    let nav_elem = createNavElem("Registrati", config.registration == "#" ? "#" : getGoodPath(position, config.registration));
//    sinistra.appendChild(nav_elem);
//}
if(config.welcome != null) {
    let nav_elem = createNavElem("Area Personale", config.welcome == "#" ? "#" : getGoodPath(position, config.welcome));
    sinistra.appendChild(nav_elem);
}
//if(config.profile != null) {
//    let nav_elem = createNavElem("Profilo", config.profile == "#" ? "#" : getGoodPath(position, config.profile));
//    sinistra.appendChild(nav_elem);
//}
//if(config.logout != null && user_is_logged) {
//    let nav_elem = createNavElem("Logout", config.logout == "#" ? "#" : getGoodPath(position, config.logout));
//    sinistra.appendChild(nav_elem);
//}

let destra = document.createElement("div");
destra.className = "ms-auto";
destra.role = "search";

let form = createRightSection(config, user_is_logged, position);
destra.appendChild(form);

document.dispatchEvent(new Event('right-created'));

nav_bar_nav.append(sinistra, destra);
main_div.append(brand, button, nav_bar_nav);
nav.appendChild(main_div);
nav_space.appendChild(nav);

}