$(document).ready(function(){
    function showTime() {
        //to get current time/date
        var date = new Date();

        //make variables to get hours, minute and second
        var hours = date.getHours();
        var min = date.getMinutes();
        var sec = date.getSeconds();

        //AM, PM setting
        var session = "AM";

        if (hours == 0) {
            hours = 12;
        }

        if (hours >= 12) {
            session = "PM";
        }

        if (hours > 12) {
            hours = hours - 12;
        }

        hours = hours < 10 ? "0" + hours : hours;  
        min = min < 10 ? "0" + min : min; 
        sec = sec < 10 ? "0" + sec : sec;  

        //set variable to span
        $("#hours").text(hours);
        $("#min").text(min);
        $("#sec").text(sec);
        $("#period").text(session);

        //to change time in every seconds
        setTimeout(showTime, 1000);
    }
    showTime();
});