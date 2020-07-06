
$(document).ready(function () {
    function getWeather(City) {
  
      $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/forecast?q=' + City + "&appid=19e5fc4a4d7613a575bc5901cff288a9",
        type:"GET",
        datatype: "json",
        success: function (data) {
          console.log(data);
        }
  
      }).then(function (response) {
        $("#citydate").empty();
        var city = $("<div class'city'>");
  
        var name = response.name;
        var Four = $("<p>").text(name);
        city.append(Four);
  
        var temp = response.main.temp; 
        var One = $("<p>").text("Temperature: " + temp);
        city.append(One);
  
        var humid = response.main.humidity;
        var Two = $("<p>").text("Humidity: " + humid);
        city.append(Two);
  
        var wind = response.wind.speed;
        var Three = $("<p>").text("Wind Speed: " + wind);
        city.append(three);
  
        $("#cityDate").prepend(city); 
      });
  
      $.ajax({
        url: 'https://api.openweathermap.org/data/2.5/forecast?q=' + City + "&appid=19e5fc4a4d7613a575bc5901cff288a9",        datatype: "json",
        success: function (data) {
          console.log(data);
        }
  
      })
        .then(function (response) {
          $('#forecast').empty();
          for (var i = 0; i < 39; i += 8) {
            var outcome = response.list[i];
  
            console.log("Day " + (i + 0));
            console.log(outcome);
            console.log("Temp: " + outcome.main.temp);
            console.log("Humidity: " + outcome.main.humidity);
            console.log("Date" + outcome.dt_txt);
  
  
            var date = "Date:" + outcome.dt_txt;
            var temp = "Temperature: " + outcome.main.temp;
            var humidity = "Humidity: " + outcome.main.humidity;
  
            var Card = forcast(date, temp, humidity);
            $('#forecast').append(Card)
          }
        });
    }
    $('#button').click(function () {
  
      var city = $("#cityName").val();
  
      console.log(city);
      getWeather(city);
  
      var Item = $("<li>").text(city);
      $("#cityList").prepend(Item);
      Item.on("click", function () {
        getWeather(city);
  
      });
  
    });
  
    var forcast = (Date, Temp, Humidity) => {
      return `<div class="col s5 m2">
          <div class="card indigo lighten-3">
           
            <div class="card-content white-text">
              <p>
              <div>${Date}</div>
              <br>
              <div>${Temp}</div>
              <br>
              <div>${Humidity}</div>
              </p>
            </div>
          </div>
        </div>`
    }
  
  });