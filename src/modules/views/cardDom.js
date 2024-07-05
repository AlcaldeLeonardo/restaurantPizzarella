import { paragraphDOM } from "./paragraphDOM";
import { titleDOM } from "./titleDOM";

export function cardDOM(title, text){
    const about = document.createElement("div");
    about.className = "home__aboutUs aboutUs card";

    
    about.appendChild(titleDOM(title, "card__title title"))
    about.appendChild(paragraphDOM(text, "card__paragraph paragraph"))

    return about;

}