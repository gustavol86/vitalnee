/*------------GALERIA---------------------*/
$(document).ready(function(){
   $('.zoom').hover(function() {
      $(this).addClass('transition');
   }, function() {
      $(this).removeClass('transition');
   });
});
/*----------------------------------------*/

/*------------CARRUSEL--------------------*/
$(document).ready(function(){
  $('.carrusel').slick({
    slidesToShow: 3, //cuantas imagenes muestra
    slidesToScroll: 1, //cuantas imagens se cambian
    autoplay: true, //si se mueven automaticamente
    autoplaySpeed: 1000, //velocidad del movimiento
    arrows: false, //que se muestren las felchas
    dots: false, //puntos de bajos de las imegenes
    infinite: true, //que no pare el movimiento
    speed: 2000,//velicidad en que avanza las imagens
    pauseOnHover: true,//que se detenga al poner el mouse sobre la imegen
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });
});
/*----------------------------------------*/

/*---ACTIVA ANIMACIONES EN SCROLL---------*/
         new WOW().init();
/*----------------------------------------*/

/*-------POP-UP DE MENSAJES---------------*/
    $("#dialog").dialog();
    setTimeout(function() {
        $("#dialog").fadeOut(1500);
        $(".ui-dialog").fadeOut(1500);
    },2000);
/*----------------------------------------*/