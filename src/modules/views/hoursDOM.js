import { paragraphDOM } from "./paragraphDOM";
import { titleDOM } from "./titleDOM";

export function hoursDOM(hoursArray){
    const hours = document.createElement(`div`)
    hours.className = "card home__hours"

    hours.appendChild(titleDOM("Hours", "card__title title"))
    

    hoursArray.forEach(hour => {
        hours.appendChild(paragraphDOM(hour))
    });

    return hours;
}