import { PizzarelaInfo } from "../pizzarella";
import { paragraphDOM } from "./paragraphDOM";
import { titleDOM } from "./titleDOM";

export function homeImgDOM(){
    const img = document.createElement(`div`);
    img.className = "home__img img"

    img.appendChild(imgTextDOM(PizzarelaInfo.Name, PizzarelaInfo.Description))

    return img
}

function imgTextDOM(title,description){
    const imgText = document.createElement(`div`)
    imgText.className = "home__text";
    
    
    imgText.appendChild(titleDOM(title, "home__title home__text"));
    imgText.appendChild(paragraphDOM(description, "home__description"));

    return imgText;
}