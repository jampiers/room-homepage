const btnAbrir = document.querySelector(".header__btn");
const btnCerrar = document.querySelector(".header__btn-telefono");
const barraTelefono = document.querySelector(".header__barra-telefono");
const overlay = document.querySelector(".header__overlay");
const sliders = document.querySelectorAll(".slider__div");
const btnAnterior = document.querySelector(".slider__btn-anterior");
const btnSiguiente = document.querySelector(".slider__btn-siguiente");

let contador = 0;

// Abrir menu en celular
btnAbrir.addEventListener("click", () => {
    barraTelefono.classList.add("header__barra-telefono--mostrar");
    overlay.classList.add("header__overlay--mostrar");
});

// Cerrar menu en celular
btnCerrar.addEventListener("click", () => {
    barraTelefono.classList.remove("header__barra-telefono--mostrar");
    overlay.classList.remove("header__overlay--mostrar");
});

// Mostrar slider anterior
btnAnterior.addEventListener("click", anteriorSlider);

// Mostrar siguiente slider
btnSiguiente.addEventListener("click", siguienteSlider)

// Manipular slider con las teclas
document.addEventListener("keyup", e => {
    if(e.key === "ArrowLeft") {
        anteriorSlider();
    } else if(e.key === "ArrowRight") {
        siguienteSlider();
    }
});
function anteriorSlider() {
    if(contador === 0) {
        contador = sliders.length - 1;
    } else {
        contador--;
    }

    sliders.forEach(slider => slider.classList.remove("slider__div--mostrar"));
    sliders[contador].classList.add("slider__div--mostrar");
}

function siguienteSlider() {    
    if(contador === sliders.length - 1) {
        contador = 0;
    } else {
        contador++ 
    }

    sliders.forEach(slider => slider.classList.remove("slider__div--mostrar"));
    sliders[contador].classList.add("slider__div--mostrar");
}