import { paragraphDOM } from "./paragraphDOM";
import { titleDOM } from "./titleDOM";

export function aboutDOM(aboutDescription){
    const about = document.createElement("div");
    about.className = "home__aboutUs aboutUs card";

    
    about.appendChild(titleDOM("Let me tell you who we are!", "card__title title"))
    about.appendChild(paragraphDOM(aboutDescription))

    return about;

}