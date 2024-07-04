import { PizzarelaInfo } from "../pizzarella";
import { aboutDOM } from "./aboutDom";
import { hoursDOM } from "./hoursDOM";
import { homeImgDOM } from "./homeImgDOM";
import { locationDOM } from "./locationDom.js";

export function renderHome(){
    const homeDOM = document.createElement(`div`);
    homeDOM.className = "home"

    homeDOM.appendChild(homeImgDOM());

    homeDOM.appendChild(aboutDOM(PizzarelaInfo.About))

    homeDOM.appendChild(hoursDOM(PizzarelaInfo.Hours))

    homeDOM.appendChild(locationDOM(PizzarelaInfo.Location))

    return homeDOM;
}

