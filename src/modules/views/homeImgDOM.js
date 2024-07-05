import { paragraphDOM } from "./paragraphDOM";
import { titleDOM } from "./titleDOM";

export function homeImgDOM(title, description){
    const img = document.createElement(`div`);
    img.className = "home__img img"

    img.appendChild(imgTextDOM(title, description))

    return img
}

function imgTextDOM(title,description){
    const imgText = document.createElement(`div`)
    imgText.className = "home__text";
    
    
    imgText.appendChild(titleDOM(title, "home__title home__text"));
    imgText.appendChild(paragraphDOM(description, "home__description"));

    return imgText;
}