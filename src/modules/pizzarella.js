export class PizarrelaInfo {
    static #name = "Pizzarella";
    static #description =
        "Experience authentic Italian pizza in every bite. Our traditional wood-fired oven and fresh ingredients will transport you to Naples. Discover the taste of Italy at Pizzarella";
    static #hours = [
        {
            days: "Monday to Friday",
            hours: "8 a.m. to 10 p.m.",
        },
        {
            days: "Saturday and Sunday",
            hours: "8 a.m. to 6 p.m.",
        },
    ];
    static #location =
        "You can locate Pizarrella pizzeria at 12 Via del Mare, in the charming coastal town of Portofino, Italy. A perfect location to enjoy delicious pizzas with views of the Mediterranean Sea!";

    static get Name() {
        return this.#name;
    }

    static get Description() {
        return this.#description;
    }

    static get Hours() {
        let hours = this.#hours;
        let arrayHours = [];

        hours.forEach((element) => {
            arrayHours.push(`${element.days} - from ${element.hours}`);
        });
        return arrayHours;
    }

    static get Location() {
        return this.#location;
    }
    static addDayToHours(day, hour) {
        PizarrelaInfo.#hours.push({ day, hour });
    }

    static updateDescription(newDescription) {
        PizarrelaInfo.#description = newDescription;
    }
}
