//create a function to register image
const isIntersecting = (entry)=>{
    return entry.isIntersecting //True dentro de la pantalla
};
const loadImage = (entry) =>{
    const container = entry.target;
    const imagen = container.firstChild;
    const url = imagen.dataset.src;
    imagen.src = url;
    // des registra la imagen(unlisten)
    observer.unobserve(container);
};
const observer = new IntersectionObserver((entries) =>{
    entries.filter(isIntersecting).forEach(loadImage);
})
export const registerImage = (imagen) =>{
    //intersection observer -> observer(imagen)
    observer.observe(imagen);
};