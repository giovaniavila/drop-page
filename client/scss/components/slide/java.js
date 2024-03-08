document.addEventListener('DOMContentLoaded', function() {
  var elem = document.querySelector('.main-carousel');
  var flkty = new Flickity(elem, {
    // Opções
    cellAlign: 'left',
    contain: true
  });
});