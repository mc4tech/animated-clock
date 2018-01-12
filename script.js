const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

function runTheClock() {

	//sets up a new date object and displays current time
	var date = new Date();
	console.log(date);
	let hr = date.getHours();
	let min = date.getMinutes();
	let sec = date.getSeconds();
	console.log("Hour: " + hr + " Minute: " + min + " Second: " + sec);

	//does the math for each hand on the clock
	let hrPosition = (hr*360/12)+(min*(360/60)/12);
	let minPosition = (min*360/60)+(sec*(360/60)/60);
	let secPosition = sec*360/60;

	//uses the lets we calculated to apply the numbers as degrees 
	//in the inline styles for transform on each object
	HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
	MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
	SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
	
	//tests condition and changes the stroke attribute on each 
	//class if sec is odd or even
	if(sec%2 == 0) {
		document.querySelector(".hour-arm").style.stroke = "rgb(0,41,91)";
		document.querySelector(".minute-arm").style.stroke = "rgb(0,41,91)";
		document.querySelector(".second-arm").style.stroke = "rgb(0,41,91)";
		document.querySelector(".hour-marks").style.stroke = "rgb(176,183,188)";
	} else {
		document.querySelector(".hour-arm").style.stroke = "rgb(176,183,188)";
		document.querySelector(".minute-arm").style.stroke = "rgb(176,183,188)";
		document.querySelector(".second-arm").style.stroke = "rgb(176,183,188)";
		document.querySelector(".hour-marks").style.stroke = "rgb(0,41,91)";
	};
};

//this var is set to the method setInterval to call runTheClock every second
var interval = setInterval(runTheClock, 1000);

