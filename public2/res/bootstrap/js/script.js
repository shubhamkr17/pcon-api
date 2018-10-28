$("#showNotifications").click(function() {
            $("#notifications").toggle();
        });

$('.carousel').carousel({
  interval: 3000
});

$('[data-toggle="slide-collapse"]').on('click', function() {
    $navMenuCont = $($(this).data('target'));
    $navMenuCont.animate({'width':'toggle'}, 350);
});

// $('#navButton').click(function(e){
//     e.stopPropagation();
//      $('#navbarSupportedContent').toggleClass('show-menu');
// });
// $('#navbarSupportedContent').click(function(e) {
//     e.stopPropagation();
// });
// $('body,html').click(function(e){
//        $('#navbarSupportedContent').removeClass('show-menu');
// });