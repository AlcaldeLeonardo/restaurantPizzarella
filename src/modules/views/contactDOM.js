import { cardDOM } from "./cardDom";
import { homeImgDOM } from "./homeImgDOM";




export function contactDOM(){
    const contactContainer = document.createElement(`div`);
    contactContainer.className = "container Contact"

    contactContainer.appendChild(homeImgDOM("Contact Us!", "A Italian Pizza is so close!"))
    contactContainer.appendChild(contactCards())
    
    return contactContainer;
}

function contactCards(){
    const card = document.createElement(`div`);
    card.appendChild(cardDOM("Mario", "Tel: 555-555-111"))
    card.appendChild(cardDOM("Luigui", "Tel: 555-555-222"))
    card.appendChild(cardDOM("Peache", "Not Missing yet"))
    card.appendChild(cardDOM("Bowser", "Tel: PEACH-YOU-SOCOOL 🎹🎵🎶"))
    
    return card;
}