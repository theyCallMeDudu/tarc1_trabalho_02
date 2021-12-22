const days = document.querySelectorAll("days");
const hours = document.querySelectorAll("hours");
const minutes = document.querySelectorAll("minutes");
const seconds = document.querySelectorAll("seconds");

// function startCountDownTimer() {
//     var minutesToAdd = 5;
//     var now = new Date();
//     var futureDate = new Date(now.getTime() + minutesToAdd * 60000);
//     var difference = futureDate - now;

//     const mins = Math.floor(difference / 1000 / 60) % 60;
//     const secs = Math.floor(difference / 1000) % 60;

//     console.log('minutos: ', mins);
//     console.log('segundos: ', secs);
// }

// setInterval(startCountDownTimer, 1000);


// setInterval(function () {
//     var d = new Date(); //get current time
//     var seconds = d.getMinutes() * 60 + d.getSeconds(); //convet current mm:ss to seconds for easier caculation, we don't care hours.
//     var fiveMin = 60 * 5; //five minutes is 300 seconds!
//     var timeleft = fiveMin - seconds % fiveMin; // let's say now is 01:30, then current seconds is 60+30 = 90. And 90%300 = 90, finally 300-90 = 210. That's the time left!
//     var result = parseInt(timeleft / 60) + ':' + timeleft % 60; //formart seconds back into mm:ss 
//     document.getElementById('test').innerHTML = result;

// }, 1000) //calling it every 0.5 second to do a count down

document.getElementById('timer').innerHTML =
  00 + ":" + 10;
startTimer();


function startTimer() {
  var presentTime = document.getElementById('timer').innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  
  if(m < 0){
    return
  } else if (m == 0 && s <= 00) {
    document.getElementById('timer').style.display = "none";
    var display = document.getElementById('timer').style.display = "none";
    if (display.attributes == "none") {
        alert('game over!');
        
    }
  }
  
  document.getElementById('timer').innerHTML =
    m + ":" + s;
  console.log(m)
  setTimeout(startTimer, 1000);
  
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}