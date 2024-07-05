import { PizzarelaInfo } from "../pizzarella";
import { homeImgDOM } from "./homeImgDOM";
import { paragraphDOM } from "./paragraphDOM";
import { titleDOM } from "./titleDOM";
import imgPizzaURL from "../../img/antique-pizzeria.jpg"

export function menuDOM(){
    const menuToShow = document.createElement(`div`);
    menuToShow.className = "container"

    menuToShow.appendChild(homeImgDOM("Italia on your Table", "Explore an authentic Italian menu with delicious pizzas, pastas, and desserts at our pizzeria. Enjoy traditional and gourmet flavors, accompanied by select beverages. Immerse yourself in a unique culinary experience that will transport you to Italy with every dish. Experience an unforgettable gastronomic journey with us!"))
    menuToShow.appendChild(menuCardDOM());

    return menuToShow;
}

function menuCardDOM() {
    const menuCardToShow = document.createElement("div");
    const foodSection = document.createElement(`div`)
    const flexSection = document.createElement(`div`)
    const imgPizza = document.createElement("img");
    const menuPizarrella = PizzarelaInfo.Menu;
    
    foodSection.className = "foodMenu__foodSection"
    flexSection.className = "foodMenu__flexSection"

    menuCardToShow.className = "card foodMenu";
    imgPizza.src = imgPizzaURL;


    menuCardToShow.appendChild(titleDOM("Menu's Pizzas", "card__title title"));
    menuCardToShow.appendChild(flexSection);

    menuPizarrella.forEach((item) => {
        let food = item.food;
        let price = item.price;

        const foodAndPrice = document.createElement(`div`);
        foodAndPrice.className = "foodMenu__foodAndPrice foodAndPrice";

        foodAndPrice.appendChild(
            paragraphDOM(`${food} Pizza`, "foodAndPrice__food food")
        );
        foodAndPrice.appendChild(
            paragraphDOM(`$${price}`, "foodAndPrice__price price")
        );

        foodSection.appendChild(foodAndPrice);

        flexSection.appendChild(foodSection);
        flexSection.appendChild(imgPizza);
    });

    return menuCardToShow;
}
