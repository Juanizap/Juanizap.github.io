document.addEventListener('DOMContentLoaded', () => {
    const imagen = document.getElementById('figuraJs');
    const texto = document.getElementById('info');

    const persona = {
        nombre: "Clinton Hunter",
        edad: 35,
        fechaNacimiento: "21-02-1987"
    };




    imagen.addEventListener('mouseover', () => {
        texto.textContent = Object.values(persona).join(', ');
    });

    imagen.addEventListener('mouseout', () => {
        texto.textContent = '';
    });
});

const boton = document.querySelector('.boton');

boton.addEventListener('click', () => {
    const siguienteViewport = boton.nextElementSibling;
    siguienteViewport.scrollIntoView({ behavior: 'smooth' });
});

