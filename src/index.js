/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/
import {registerImage} from "./lazy";

const minimum = 1;
const maximum = 122;
const random = ()=>{
    const randomNum = Math.floor(Math.random()*(maximum-minimum))+minimum;
    return randomNum;
};
const createImageNode = () => {
    const container = document.createElement('div');
    container.className ="h-50 p-0 bg-gray-400";
    container.style.maxWidth="320";
    const imagen = document.createElement("img");
    imagen.className = "mx-auto";
    imagen.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;
    container.appendChild(imagen);
    return container;
};

const addButton = document.querySelector('button');
const mountNode = document.getElementById("images");
const action = () =>{
    const nuevaImagen = createImageNode();
    mountNode.appendChild(nuevaImagen);
    registerImage(nuevaImagen);
};
addButton.addEventListener('click',action);

