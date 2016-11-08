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

     
    

});