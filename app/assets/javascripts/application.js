// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .


$(document).ready(function (){

    function initialize() {
    var myLatlng = new google.maps.LatLng(32.782843, -96.7976736)
     
      var mapOptions = {
      center: { lat: 32.782843, lng: -96.7976736},
      zoom: 15,
      scrollwheel: false
      };
        
      var map = new google.maps.Map(document.getElementById('map-canvas'),
                mapOptions);  
      
      // var image = 'https://s-media-cache-ak0.pinimg.com/originals/d1/7c/6c/d17c6c87d77fa9e934922eb1d141ba35.jpg'
      var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Hello'
        });

    }

    google.maps.event.addDomListener(window, 'load', initialize);
});