document.addEventListener('DOMContentLoaded', function () {
    // Selecciona todos los enlaces con la clase "scroll-link"
    const links = document.querySelectorAll('.scroll-link');

    // Agrega un listener de clic a cada enlace
    links.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // Evita el comportamiento predeterminado del enlace

            let targetId = this.getAttribute('href'); // Obtiene el valor del atributo href

            // Obtiene la referencia al elemento con el ID correspondiente
            let targetElement = document.querySelector(targetId);

            // Desplaza la ventana hasta el elemento
            targetElement.scrollIntoView({
                behavior: 'smooth' // Añade un desplazamiento suave
            });
        });
    });
});


