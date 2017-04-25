$(document).ready(function(){

  var introOffset = $('#intro').offset().top;
  var chap1Offset = $('#home_ch1').offset().top;
  var chap2Offset = $('#home_ch2').offset().top;
  var chap3Offset = $('#home_ch3').offset().top;
  var chap4Offset = $('#home_ch4').offset().top;

  console.log(chap3Offset, chap4Offset);

//APPARITION LEXIQUE ET SURLIGNAGE NAVBAR
    $(window).scroll(function() {

      if ($(window).scrollTop() > $('#intro').height()-100){
         $(".lexique-wrapper").css('opacity', '1')
       }

       if ( $(window).scrollTop() > introOffset && $(window).scrollTop() < chap1Offset){
         $("#intro-btn").css('color', 'red');
       }else{
         $("#intro-btn").css('color', 'black');
       }

       if ( $(window).scrollTop() >chap1Offset && $(window).scrollTop() < chap2Offset){
         $("#ch1-btn").css('color', 'red');
       }else{
         $("#ch1-btn").css('color', 'black');
       }

       if ( $(window).scrollTop() >chap2Offset && $(window).scrollTop() < chap3Offset){
         $("#ch2-btn").css('color', 'red');
       }else{
         $("#ch2-btn").css('color', 'black');
       }

       if ( $(window).scrollTop() >chap3Offset && $(window).scrollTop() < chap4Offset){
         $("#ch3-btn").css('color', 'red');
       }else{
         $("#ch3-btn").css('color', 'black');
       }

       if ( $(window).scrollTop() >chap4Offset){
         $("#ch4-btn").css('color', 'red');
       }else{
         $("#ch4-btn").css('color', 'black');
       }

     });


//GESTION LEXIQUE
      $(".lexique-button").click(function(){
          $(".lexique-wrapper").toggleClass('lexique-open');
      });
      $(".lexique-xs-close").click(function(){
          $(".lexique-wrapper").removeClass('lexique-open');
      });
      $(".lien-lexique").click(function(){
              $(".lexique-wrapper").addClass('lexique-open');
      });


//CARTE INTERACTIVE
      for ( let i = 1 ; i<= 5 ; i++){
        for ( let j=1 ; j<=5; j++){
          $('#carte-int-bouton-' + i).click(function(){
            $('#carte-int-image-' + i).toggleClass('carte-int-image-hidden')
            $('#carte-int-hack').toggleClass('carte-int-hack')
            if (j != i) {
                $('#carte-int-image-' + j).addClass('carte-int-image-hidden')
            }
          });
        }
      };

// VELO INTERACTIF
    for ( let i = 1 ; i<= 8 ; i++){
        $('#velo-int-btn-' + i).click(function(){
          $('.velo-int-img').addClass('velo-hidden')
          $('#velo-int-img-' + i).removeClass('velo-hidden')
        });
    };


// INFOGRAPHE ARBRE
  $('.infog-arbre-btn').click(function(){
    $(this).toggleClass('infog-hidden')
  });
  $(".infog-arbre-btn3").click(function(){
    $('.infog-video-wrapper').removeClass('infog-wrapper-hidden')
  });
  $('.infog-video-close-btn').click(function(){
    $('.infog-video-wrapper').addClass('infog-wrapper-hidden')
  })

//MINIATURES VIDEO
    $('.miniature-video').click(function(){
        $(this).fadeOut();
    })


 // LAZYLOAD
 $("img.lazy").lazyload({
     effect : "fadeIn",
     threshold : 200
 });

});
