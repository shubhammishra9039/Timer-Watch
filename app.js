var time=document.querySelector("#time");


var timeer = 1500;

let interval;


function updateTime(){
   let minute =Math.floor(timeer/60);
   let second = timeer%60;
   let timeformate =`${minute.toString().padStart(2,"0")}  : ${second.toString().padStart(2,"0")}`;

   time.innerHTML=timeformate;

}

function start() {
  interval = setInterval(() => {
    timeer--;
    updateTime();
    if(timeer==0)
    {
        clearInterval(interval);
        alert("Time' Left")
        timeer=1500;
    }
  }, 1000);
}
function stop() {
    clearInterval(interval);

}
function reset() {
    timeer=1500;
    updateTime();
}
