function clock() {
    
var sec = document.getElementById("seconds");
var min = document.getElementById("minutes");
var hour = document.getElementById("hours");

var h =new Date;
hour.innerHTML=h.getHours();
min.innerHTML=h.getMinutes();
sec.innerHTML=h.getSeconds();

}
var interval=setInterval(clock,1000);
