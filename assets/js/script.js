// Cambio de títlo con JS
var titulo = document.querySelector('h1')
titulo.innerHTML = '¡Título h1 cambiado con JS!'

// Botón de prueba
function miFunc() {
    alert('Se ha adado click en el botón 001');
}

// Scroll Reveal
window.sr = ScrollReveal();
sr.reveal('.navbar', {
    duration: 2000,
    origin: 'top',
    distance: '40px'
});

window.sr = ScrollReveal();
sr.reveal('.color1', {
    duration: 2000,
    origin: 'left',
    distance: '300px',
    viewFactor: 0.2
});

window.sr = ScrollReveal();
sr.reveal('.color2', {
    duration: 2000,
    origin: 'right',
    distance: '300px'
});

window.sr = ScrollReveal();
sr.reveal('#foto01', {
    duration: 3000,
    delay: 1000
    });

window.sr = ScrollReveal();
sr.reveal('#productos', {
    duration: 2000,
    origin: 'bottom',
    distance: '200px'
    });

// Smooth Scrolling