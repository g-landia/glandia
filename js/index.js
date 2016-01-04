

(function($) {
    $('.accordion > li:eq(0) a').addClass('active').next().slideDown();

    $('.accordion a').click(function(j) {
        var dropDown = $(this).closest('li').find('p');

        $(this).closest('.accordion').find('p').not(dropDown).slideUp();

        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.accordion').find('a.active').removeClass('active');
            $(this).addClass('active');
        }

        dropDown.stop(false, true).slideToggle();

        j.preventDefault();
    });
})(jQuery);

$( document ).ready(function() {
  
  var settingsTab = '.modal-nav a';
  var settingsPane = '.dialog_tab_pane';

  $(settingsTab).on('click', function(){
      $(settingsPane).removeClass('active');
      $(settingsTab).removeClass('active');
    
      var settingsPaneId = $(this).data('pane-id');
      $('#'+settingsPaneId).addClass('active');
      
      $(this).addClass('active');
  });
});

