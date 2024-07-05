export function render (elementDOM = document.createElement("div")){
    const root = document.querySelector("#content")
    root.innerHTML = "";
    root.appendChild(elementDOM)
}