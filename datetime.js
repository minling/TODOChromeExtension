function date(){
  var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  var date = new Date();
  var month = date.getMonth();
  var day = date.getDate();
  var dayofweek = date.getDay();
  var year = date.getFullYear();
  var dateToday = "Today is " +days[day] + ", "+ months[month] + " "+ day +", "+ year;
  return dateToday;
}

document.getElementById("datetime").innerHTML = date();

function time(){
  var date = new Date();
  var hour = date.getHours();
  var minutes = date.getUTCMinutes();
  var ampm = hour < 12 ? "AM" : "PM";
  var currentHour = hour % 12;
  currentHour = currentHour? hour : 12;
  minutes = minutes? "0"+minutes : minutes;

  var timeNow = currentHour + ":"+ minutes + " "+ ampm;
  return timeNow
}

document.getElementById("time").innerHTML = time();

