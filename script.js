/*const imagens = [
    "img/imagens.jpg",
    "img/imagens1.jpg",
    "img/imagens2.jpg",
    "img/imagens3.jpg",
    "img/flor4.jpg"
]
let index = 0

function trocarImagem() {
    const img = document.getElementById('flower')

    index++

    if(index >= imagens.length){
        index = 0
    }

    img.src = imagens[index]
}

setInterval(trocarImagem, 2000)
*/



const produtos = document.querySelectorAll(".produto");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

produtos.forEach(p => observer.observe(p));


function abrirZoom(img) {
    const zoom = document.getElementById("zoom");
    const zoomImg = document.getElementById("zoomImg");

    zoom.style.display = "flex";
    zoomImg.src = img.src;
}

function fecharZoom() {
    document.getElementById("zoom").style.display = "none";
}


window.addEventListener("load", () => {
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 50);
});

document.querySelectorAll('.carrossel').forEach(carrossel => {

    const slides = carrossel.querySelectorAll('.slide');
    const anterior = carrossel.querySelector('.anterior');
    const proximo = carrossel.querySelector('.proximo');

    let indice = 0;

    function mostrarSlide(i) {
        slides.forEach(slide => slide.classList.remove('ativo'));
        slides[i].classList.add('ativo');
    }

    anterior.addEventListener('click', () => {
        indice = (indice - 1 + slides.length) % slides.length;
        mostrarSlide(indice);
    });

    proximo.addEventListener('click', () => {
        indice = (indice + 1) % slides.length;
        mostrarSlide(indice);
    });

});

