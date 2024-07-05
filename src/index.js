import './css/reset.css'
import './sass/style.scss'
import { Home } from './modules/views/home';
import { render } from './modules/views/render';

render(Home());

document.querySelector("#btnHome").addEventListener("click", () =>{
    render(Home());
})
document.querySelector("#btnMenu").addEventListener("click", () =>{
    render();
})
document.querySelector("#btnContact").addEventListener("click", () =>{
    render();
})

