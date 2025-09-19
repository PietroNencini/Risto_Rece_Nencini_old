/*
    *mappa che rappresenta la configurazione dei link della NAVBAR in base alla pagina di riferimento
    ! link null -> vuol dire che il tag contenente il link non si deve trovare nella pagina
*/
export const CONFIG_BY_PATH = {
    "/index.php": {
        homepage: "pages/website_intro.php",
        restaurants: "php/restaurants.php",
        index: null,
        registration: "php/registration.php",
        welcome: "php/welcome.php",
        profile: null,
        //logout: null    
    },
    "/php/registration.php": {
        homepage: "pages/website_intro.php",
        restaurants: "php/restaurants.php",
        index: "index.php",
        registration: null,
        welcome: "php/welcome.php",
        profile: null,
        //logout: null
    },
    "/pages/website_intro.php": {
        homepage: "#",
        restaurants: "php/restaurants.php",
        index: "index.php",                         //? potrebbe
        registration: "php/registration.php",      //? potrebbe
        welcome: "php/welcome.php",               //? potrebbe
        profile: "php/profile.php",                 //? potrebbe
        //logout: "php/scripts/logout_script.php"     //? potrebbe
    },
    "/php/welcome.php": {
        homepage: "pages/website_intro.php",
        restaurants: "php/restaurants.php",
        index: null,
        registration: null,
        welcome: "#",
        profile: "php/profile.php",
        //logout: "php/scripts/logout_script.php"
    },
    "/php/profile.php": {
        homepage: "pages/website_intro.php",
        restaurants: "php/restaurants.php",
        index: null,
        registration: null,
        welcome: "php/welcome.php",
        profile: "#",
        //logout: "php/scripts/logout_script.php"
    },
    "/php/rest_info.php": {
        homepage: "pages/website_intro.php",
        restaurants: "php/restaurants.php",
        index: "index.php",                             //? potrebbe
        registration: "php/registration.php",          //? potrebbe
        welcome: "php/welcome.php",                   //? potrebbe
        profile: "php/profile.php",                     //? potrebbe
        //logout: "php/scripts/logout_script.php"         //? potrebbe
    },
    "/test/testing_page_script.html": {                  //!solo per debug, commentare quando funziona
        homepage: "pages/website_intro.php",
        restaurants: "php/restaurants.php",
        index: "index.php",                             //? potrebbe
        registration: "php/registration.php",          //? potrebbe
        welcome: "#",                                 //? potrebbe
        profile: null,                                   //? potrebbe
        //logout: "php/scripts/logout_script.php"         //? potrebbe
    }
}

/*
    export const CONFIG_BY_PATH = {
    "index.php": {
        homepage: "pages/website_intro.php",
        restaurants: "php/restaurants.php",
        index: "#",
        registration: "php/registration.php",
        benvenuto: null,
        profile: null,
        logout: null    
    },
    "php/registration.php": {
        homepage: "../pages/website_intro.php",
        restaurants: "restaurants.php",
        index: "../index.php",
        registration: "#",
        benvenuto: null,
        profile: null,
        logout: null
    },
    "pages/website_intro.php": {
        homepage: "#",
        restaurants: "../php/restaurants.php",
        index: "../index.php",                      //? potrebbe
        registration: "../php/registration.php",   //? potrebbe
        benvenuto: "../php/welcome.php",            //? potrebbe
        profile: "../php/profile.php",              //? potrebbe
        logout: "../php/scripts/logout_script.php"  //? potrebbe
    },
    "php/welcome.php": {
        homepage: "../pages/website_intro.php",
        restaurants: "restaurants.php",
        index: null,
        registration: null,
        benvenuto: "#",
        profile: "profile.php",
        logout: "scripts/logout_script.php"
    },
    "php/profile.php": {
        homepage: "../pages/website_intro.php",
        restaurants: "restaurants.php",
        index: null,
        registration: null,
        benvenuto: "welcome.php",
        profile: "#",
        logout: "scripts/logout_script.php"
    },
    "php/rest_info.php": {
        homepage: "../pages/website_intro.php",
        restaurants: "restaurants.php",
        index: "../index.php",                      //? potrebbe
        registration: "../php/registration.php",   //? potrebbe
        benvenuto: "welcome.php",                   //? potrebbe
        profile: "profile.php",                     //? potrebbe
        logout: "scripts/logout_script.php"         //? potrebbe
    }
}
*/