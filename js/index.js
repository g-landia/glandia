/**!
 * easyPieChart
 * Lightweight plugin to render simple, animated and retina optimized pie charts
 *
 * @license Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 * @author Robert Fleischmann <rendro87@gmail.com> (http://robert-fleischmann.de)
 * @version 2.0.1
 **/
!function(){var a=function(a,b){var c=document.createElement("canvas");"undefined"!=typeof G_vmlCanvasManager&&G_vmlCanvasManager.initElement(c);var d=c.getContext("2d");if(c.width=c.height=b.size,a.appendChild(c),window.devicePixelRatio>1){var e=window.devicePixelRatio;c.style.width=c.style.height=[b.size,"px"].join(""),c.width=c.height=b.size*e,d.scale(e,e)}d.translate(b.size/2,b.size/2),d.rotate((-0.5+b.rotate/180)*Math.PI);var f=(b.size-b.lineWidth)/2;b.scaleColor&&b.scaleLength&&(f-=b.scaleLength+2);var g=function(a,b,c){c=Math.min(Math.max(0,c||1),1),d.beginPath(),d.arc(0,0,f,0,2*Math.PI*c,!1),d.strokeStyle=a,d.lineWidth=b,d.stroke()},h=function(){var a,c,e=24;d.lineWidth=1,d.fillStyle=b.scaleColor,d.save();for(var e=24;e>=0;--e)0===e%6?(c=b.scaleLength,a=0):(c=.6*b.scaleLength,a=b.scaleLength-c),d.fillRect(-b.size/2+a,0,c,1),d.rotate(Math.PI/12);d.restore()};Date.now=Date.now||function(){return+new Date};var i=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(a){window.setTimeout(a,1e3/60)}}();this.clear=function(){d.clearRect(b.size/-2,b.size/-2,b.size,b.size)},this.draw=function(a){this.clear(),b.scaleColor&&h(),b.trackColor&&g(b.trackColor,b.lineWidth),d.lineCap=b.lineCap;var c;c="function"==typeof b.barColor?b.barColor(a):b.barColor,a>0&&g(c,b.lineWidth,a/100)}.bind(this),this.animate=function(a,c){var d=Date.now();b.onStart(a,c);var e=function(){var f=Math.min(Date.now()-d,b.animate),g=b.easing(this,f,a,c-a,b.animate);this.draw(g),b.onStep(a,c,g),f>=b.animate?b.onStop(a,c):i(e)}.bind(this);i(e)}.bind(this)},b=function(b,c){var d,e={barColor:"#ef1e25",trackColor:"#f9f9f9",scaleColor:"#dfe0e0",scaleLength:5,lineCap:"round",lineWidth:3,size:110,rotate:0,animate:1e3,renderer:a,easing:function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c},onStart:function(){},onStep:function(){},onStop:function(){}},f={},g=0,h=function(){this.el=b,this.options=f;for(var a in e)e.hasOwnProperty(a)&&(f[a]=c&&"undefined"!=typeof c[a]?c[a]:e[a],"function"==typeof f[a]&&(f[a]=f[a].bind(this)));f.easing="string"==typeof f.easing&&"undefined"!=typeof jQuery&&jQuery.isFunction(jQuery.easing[f.easing])?jQuery.easing[f.easing]:e.easing,d=new f.renderer(b,f),d.draw(g),b.dataset&&b.dataset.percent&&this.update(parseInt(b.dataset.percent,10))}.bind(this);this.update=function(a){return a=parseInt(a,10),f.animate?d.animate(g,a):d.draw(a),g=a,this}.bind(this),h()};window.EasyPieChart=b}();

var options = {
  scaleColor: false,
  trackColor: 'rgba(255,255,255,0.3)',
  barColor: '#E7F7F5',
  lineWidth: 6,
  lineCap: 'butt',
  size: 95
};

window.addEventListener('DOMContentLoaded', function() {
  var charts = [];
  [].forEach.call(document.querySelectorAll('.chart'),  function(el) {
    charts.push(new EasyPieChart(el, options));
  });
});

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


$(document).ready( function(){

  // The flipping control-center
  // Two functions for every box :(

// 1
  $(".show-me_1").on("click", function() {
    $(".box").addClass("flip1");
  });
  $(".hide-me_1").on("click", function() {
    $(".box").removeClass("flip1");  
  });
// 2
  $(".show-me_2").on("click", function() {
    $(".box").addClass("flip2");
  });
  $(".hide-me_2").on("click", function() {
    $(".box").removeClass("flip2");
  });
// 3
  $(".show-me_3").on("click", function() {
    $(".box").addClass("flip3");
  });
  $(".hide-me_3").on("click", function() {
    $(".box").removeClass("flip3");
  });
// 4
  $(".show-me_4").on("click", function() {
    $(".box").addClass("flip4");
  });
  $(".hide-me_4").on("click", function() {
    $(".box").removeClass("flip4");
  });
// 5
  $(".show-me_5").on("click", function() {
    $(".box").addClass("flip5");
  });
  $(".hide-me_5").on("click", function() {
    $(".box").removeClass("flip5");
  });
// 6
  $(".show-me_6").on("click", function() {
    $(".box").addClass("flip6");
  });
  $(".hide-me_6").on("click", function() {
    $(".box").removeClass("flip6");
  });
// 7
  $(".show-me_7").on("click", function() {
    $(".box").addClass("flip7");
  });
  $(".hide-me_7").on("click", function() {
    $(".box").removeClass("flip7");
  });
// 8
  $(".show-me_8").on("click", function() {
    $(".box").addClass("flip8");
  });
  $(".hide-me_8").on("click", function() {
    $(".box").removeClass("flip8");
  });
// 9
  $(".show-me_9").on("click", function() {
    $(".box").addClass("flip9");
  });
  $(".hide-me_9").on("click", function() {
    $(".box").removeClass("flip9");
  });

  $('[class*="-me_"]').click( function(){
    var boxclass = $('.box').attr('class');
    $('p.boxclass').html(boxclass);
  });

$('.counter').each(function() {
  var $this = $(this),
      countTo = $this.attr('data-count');
  
  $({ countNum: $this.text()}).animate({
    countNum: countTo
  },

  {

    duration: 8000,
    easing:'linear',
    step: function() {
      $this.text(Math.floor(this.countNum));
    },
    complete: function() {
      $this.text(this.countNum);
      //alert('finished');
    }

  });  
  
  

});
  
// Table Carousel

$('button.next-table').click( function(){
  var currentone = $('.responsive-tables .active');
  var currenttwo = $('.responsive-tables .activetwo'); 
  var next = $('.responsive-tables .activetwo + [class*="little"]');
  var last = $('.responsive-tables .last');
  next.addClass('activetwo');
  currentone.removeClass('active').addClass('last');
  currenttwo.removeClass('activetwo').addClass('active');
  last.removeClass('last');

  var echonext = next.attr('class');
  //alert(echonext);
  

  if( echonext === undefined ){
    $('.little1').addClass('activetwo');
  }

});

$('button.prev-table').click( function(){
  var currentone = $('.responsive-tables .active');
  var currenttwo = $('.responsive-tables .activetwo'); 
  var prev = $('.responsive-tables .last').prev('[class*="little"]');
  var last = $('.responsive-tables .last');
  prev.addClass('last');
  currentone.removeClass('active').addClass('activetwo'); 
  last.removeClass('last').addClass('active');
  currenttwo.removeClass('activetwo');

  //alert(prev.attr('class'));

  if( prev.attr('class') === undefined ){
    $('.responsive-tables .little9').addClass('last');
  }

});



}); // .ready-END

