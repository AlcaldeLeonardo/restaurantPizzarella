import './css/reset.css'
import { PizzarelaInfo } from './modules/pizzarella';
import { renderHome } from './modules/views/home';
import './sass/style.scss'

console.log("hola");
console.log(PizzarelaInfo.Hours);

const root = document.querySelector(`#content`)

root.appendChild(renderHome())