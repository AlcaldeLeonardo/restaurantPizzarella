export function titleDOM(text, classCssName = "") {
    const title = document.createElement(`h2`)
    title.className = classCssName;
    title.textContent = text

    return title;
}