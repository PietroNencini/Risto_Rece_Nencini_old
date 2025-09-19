import { findBaseFolder } from "./utils.js";

export function getGoodPath(passed_path, from_base_to_destination) {
    //console.log(passed_path);

    let nearest_base_folder = findBaseFolder(passed_path);

    if(nearest_base_folder == -1) {
        return "./" + from_base_to_destination;
    }

    // Se la cartella di base esiste esiste nel percorso, rimuovi tutto ciò che viene prima
    let index = passed_path.indexOf(nearest_base_folder);
    let cleanedPath = index !== -1 ? passed_path.slice(index) : passed_path;
    //console.log(cleanedPath);

    let depth = Math.max(0, cleanedPath.split("/").length -1);              // Si deve mettere -1 perché se no prende la stringa vuota "" che sta prima del primo slash 
    //console.log(depth);
    let final_path = "../".repeat(depth) + from_base_to_destination; 
    //console.log(final_path);
    return final_path;
    
}