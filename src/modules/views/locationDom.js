import { paragraphDOM } from "./paragraphDOM";
import { titleDOM } from "./titleDOM";

export function locationDOM(locationAtribut){
    const location = document.createElement(`div`)
    location.className = "home__location location card";

    location.appendChild(titleDOM("Location", "card__title title"))
    location.appendChild(paragraphDOM(locationAtribut));

    return location;
}