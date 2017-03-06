$(document).ready(function() {
    
    $('#submitweather').click(function(){
        
        var city = $('#city').val();
        var units = '&units=imperial';
        var apikey = '&APPID=c4a14b08c7d8d096de4717fe17adc7f1';
        
        if(city != ''){
            
            $.ajax({
                
               url: 'http://api.openweathermap.org/data/2.5/weather?q=' + city + units + apikey,
                type: "GET",
                dataType: "jsonp",
                success: function(data){
                   var widget = show(data);
                    
                    $('#show').html(widget);
                    
                    $('city').val('');
            }
                
                
            });
            
            
        }else {
            $('#error').html("please enter a city");
        }
        
    });

   
    
});
    
    
    function show(data){
        return  "<h2 class='text-center'>Current Weather for " +data.name+ "</h2>" + "</br>" + 
        
        
//        "<p class='text-center' style = 'padding-left:40px;'>Weather: &nbsp;&nbsp"+ data.weather[0].main  +"</p>" +
            
                "<p class='text-center' style = 'padding-left:40px; font-size:30px;'> <img src ='http://openweathermap.org/img/w/" + data.weather[0].icon+ ".png' width = 90 height= 90> " + data.weather[0].description  +"</p>" +
            
                "<p class='text-center' style = 'padding-left:40px;'>Temperature: &nbsp;&nbsp" + data.main.temp+ "&deg;F</p>" +
            
                "<p class='text-center' style = 'padding-left:40px;'>Min Temperature: &nbsp;&nbsp" + data.main.temp_min+"&degF</p>" +
            
                "<p class='text-center' style = 'padding-left:40px;'>Max Temperature: &nbsp;&nbsp" + data.main.temp_max+"&degF</p>" +
            
                "<p class='text-center' style = 'padding-left:40px;'>Humidity: &nbsp;&nbsp" + data.main.humidity+"%</p>" +
            
             "<p class='text-center' style = 'padding-left:40px;'>Wind Speed: &nbsp;&nbsp" + data.wind.speed+"mph</p>" ;
             
           
        
    };




//Google Map
var map;


function initialize(location){
    console.log(location);
    
    var currentLocation = new google.maps.LatLng(location.coords.latitude, location.coords.longitude)
    
    var mapOptions = {
        center: currentLocation,
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    
    map = new google.maps.Map(document.getElementById("map"), mapOptions);
    
    var marker = new google.maps.Marker({
        position: currentLocation,
        map: map
    });
}


$(document).ready(function(){
                  
     navigator.geolocation.getCurrentPosition(initialize);             
                  
                  
                  
                  });
    
    

//Open weather current location


$(document).ready(function(){
    
   
        if("geolocation" in navigator) {
            
        } else {
            alert("your browser is unsupported with this feature");
        };
    
    
    
       
            navigator.geolocation.getCurrentPosition(gotLocation);
            
            function gotLocation(position){
               var lat = position.coords.latitude;
               
                
                var lon = position.coords.longitude;
               
                
                var api_url = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&units=imperial&appid=c4a14b08c7d8d096de4717fe17adc7f1';
//                
//               var api_url = 'http://api.wunderground.com/api/b30059d853ad11a2/conditions/q/' + lat + ','+ lon + ' ;
                
                
                $.ajax({
                  url: api_url,
                    method: 'GET',
                    dataType: 'jsonp',
                    success: function(someData) {
//                     var place = someData.display_location.city;
                        var tempr = someData.main.temp;
                        var descrip = someData.weather[0].description;
                        var tempMin = someData.main.temp_min;
                        var tempMax = someData.main.temp_max;
                        var humid = someData.main.humidity;
                        var wind = someData.wind.speed;
                    
                    
                    
                      
                       $('#result').html( tempr + "&degF "+ "<br>" + " " + descrip);  
                        
                        
                        
                        //console.log("success");
                    }
                })
                    
                    
                };
            
            
            
      
        
    
    
       

});



  
//function weatherShow(someData){
//    
//    
//    
//}










    
    
    
    

    
