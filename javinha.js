document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('trocaImagem');
    var image = document.querySelector('img');
    var imageIndex = 0;
    var images = ['ramon-dininho.jpg', 'rock_in_roll.jpg', 'azul-caneta.jpg', 'Luccas_Neto_Nutella.jpg']; // Replace with your image paths

    button.addEventListener('click', function() {
        image.src = images[imageIndex];
        imageIndex = (imageIndex + 1) % images.length; // Loop back to the first image when reaching the end
    });
});