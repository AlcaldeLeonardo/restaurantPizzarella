import { PizzarelaInfo } from "../pizzarella";
import { hoursDOM } from "./hoursDOM";
import { homeImgDOM } from "./homeImgDOM";
import { cardDOM } from "./cardDom.js";

export function Home(){
    const homeDOM = document.createElement(`div`);
    homeDOM.className = "container home"

    homeDOM.appendChild(homeImgDOM(PizzarelaInfo.Name, PizzarelaInfo.Description));

    homeDOM.appendChild(cardDOM("Let me tell you who we are!", PizzarelaInfo.About))

    homeDOM.appendChild(hoursDOM(PizzarelaInfo.Hours))

    homeDOM.appendChild(cardDOM("Location", PizzarelaInfo.Location))

    return homeDOM;
}

