var minute = prompt('enter the minute:');
var seconds = prompt('enter the seconds:');


var timer = setInterval(() => {

    if (seconds === 0) {
        
        minute--;
        seconds = 59;
    }
    if(minute === 0  && seconds === 0 )
    {
        clearInterval(timer);
    }
    console.log('Timer: ' + minute + ' :seconds');
    seconds--
}, 1000);