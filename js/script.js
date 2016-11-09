$( document ).ready(function() {
    
    $("#map").googleMap({
      zoom: 8, // Initial zoom level (optional)
      center: [55.799989, 37.461509], // Map center (optional)
      type: "ROADMAP" // Map type (optional)
    });
    $("#map").addMarker({
      coords: [55.7998958, 37.4711271],
      icon: 'img/map-marker.png', // Icon URL,
      title: 'Marker n°1', // Title
      text:  '<p><b>ул.Академика Курчатова, д.1 стр.78, Москва, Россия, 123098</b></p>'

    });
    $("#map").addMarker({
      coords: [55.799989, 37.460000],
      icon: 'img/un.png', // Icon URL,
      
    });
     

     $('.go_to').click( function(){ // ловим клик по ссылке с классом go_to
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скроолинг к элементу scroll_el
        }
	    return false; // выключаем стандартное действие
    });
     $(".controls a").click(function(){
     	event.preventDefault();
	var href = $(this).attr("href");
	$(this).parent().parent().parent().css('background-image','url(' + href + ')');
	
});
     $('#next').click( function(){
     	updateImages()
     	if($('#slider .active').next().hasClass("slide")){
     		$("#slider .active").hide().next().fadeIn(1000);
     	$("#slider .active").removeClass("active").next().addClass("active");
     	$('#prev').show();
     	}else{
     	$(this).hide()
     	}
     	
     });
     $('#prev').click( function(){
     	if($('#slider .active').prev().hasClass("slide")){
     		$("#slider .active").hide().prev().fadeIn(1000);
     	$("#slider .active").removeClass("active").prev().addClass("active");
     	$('#next').show();
     	}else{
     	$(this).hide()
     	}
     	
     });
     $('.menu-btn').mouseover( function(){
     	$(this).siblings(".nav").slideDown()
     });
     $('.menu-btn').mouseout( function(){
     	$(this).siblings(".nav").hide()
     });

var endWidth = $(".before-after").width() - 2;
var middleWidth = $(".before-after").width() / 2 - 2;


var clblh = $(".results").width() / '1.14';
$(".client-block").height(clblh);



     // dragable
     var dragMe         = $(".dragme");
  var beforeAfter    = $(".before-after");
  var viewAfter      = $(".view-after");
        
  Draggable.create(dragMe, {
    type:"left",
    bounds: beforeAfter,
    onDrag:updateImages
  });
                  
  function updateImages(){
    TweenLite.set(viewAfter, {width: dragMe.css("left") });   //or this.x if only dragging
  }
         
  //Intro Animation
  animateTo(middleWidth);
         
  //Externall nav
  $(".to-start").on("click", function(){
    animateTo(0);
  });
         
  $(".to-middle").on("click", function(){
    animateTo(middleWidth);  
  });
         
  $(".to-end").on("click", function(){
    animateTo(endWidth);
  });
         
  function animateTo(_left){
    TweenLite.to( dragMe, 1, {left: _left, onUpdate: updateImages });
  }
  
  //V2 Click added
  beforeAfter.on("click", function(event){           
    var eventLeft = event.clientX - beforeAfter.offset().left;
    animateTo(eventLeft);
  });
    

});
document.addEventListener('click', function(event) {
    
        if (!event.target.classList.contains('js-ripple')) {
            return;
        }
        
        var rippleBtn = event.target, 
        ink = rippleBtn.querySelector('.ink'), diameter;
    
        if (!ink) {
            // first time clicked => create a new ink element
            ink = document.createElement('i');
            ink.classList.add('ink');
            
            diameter = Math.max(rippleBtn.clientWidth, rippleBtn.clientHeight);
            ink.style.width = diameter + 'px';
            ink.style.height = diameter + 'px';
            
            // when the animation ends remove el (bind for all vendor prefixes)
            ['animationend', 'webkitAnimationEnd', 'oAnimationEnd', 'MSAnimationEnd'].forEach(function(eventName){
                ink.addEventListener(eventName, function(){
                    ink.parentNode.removeChild(ink)
                });
            });

            rippleBtn.insertBefore(ink, rippleBtn.firstChild);
        } else {
            diameter = ink.clientWidth;
        }
        
        // calculate the click center
    ink.style.top = (event.offsetY - diameter/2) + 'px';
    ink.style.left = (event.offsetX - diameter/2) + 'px';
        
        ink.classList.remove('is-animating');
        ink.width = ink.clientWidth + 'px';
        ink.classList.add('is-animating');
    });