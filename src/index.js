import './css/reset.css'
import './sass/style.scss'
import { Home } from './modules/views/home';
import { render } from './modules/views/render';
import { menuDOM } from './modules/views/menuDOM';
import { contactDOM } from './modules/views/contactDOM';

render(Home());

document.querySelector("#btnHome").addEventListener("click", () =>{
    render(Home());
})
document.querySelector("#btnMenu").addEventListener("click", () =>{
    render(menuDOM());
})
document.querySelector("#btnContact").addEventListener("click", () =>{
    render(contactDOM());
})

