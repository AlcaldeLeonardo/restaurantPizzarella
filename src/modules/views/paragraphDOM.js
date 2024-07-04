export function paragraphDOM(text, classCssName = ""){
    const paragraph = document.createElement(`p`);
    paragraph.className = classCssName;
    paragraph.textContent = text;

    return paragraph;
}