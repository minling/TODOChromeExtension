var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];

var date = new Date();
var month = date.getMonth();
var day = date.getDate();
var dayofweek = date.getDay();
var year = date.getFullYear();
var dateToday = "Today is " +days[day] + ", "+ months[month] + " "+ day +", "+ year;

document.getElementById("datetime").innerHTML = dateToday;