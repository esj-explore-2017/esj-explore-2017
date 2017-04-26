$(document).ready(function(){



//PRELOADING
$('.main-wrapper').imagesLoaded( function(){
  $('.preload').addClass('loader-hidden');
  $('.main-wrapper').show();
    $(window).scroll(function() {
      if ($(window).scrollTop() > $('#intro').height()-100){
         $(".lexique-wrapper").css('opacity', '1')
       }
     });
})


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


 // // LAZYLOAD
 // $("img.lazy").lazyload({
 //     effect : "fadeIn",
 //     threshold : 200
 // });

});
