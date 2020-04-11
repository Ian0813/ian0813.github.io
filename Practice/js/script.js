// Part 1 : Confirm feature
function myFunction() {
	var txt;
	var r = confirm("Please press a button !")
	if(r == true) {
		txt = "You press OK !";
	}else{
		txt = "You press Cancel !";
	}
	document.getElementById('notice').innerHTML = txt;
}

// Part2 Change color at divs

function changeColor() {
	var div3 = document.getElementById("d3");
	var div4 = document.getElementById("d4");
	if(div3.className == "cd4"){
		div3.className = "cd3";
		div4.className = "cd4";
	}
	else {
		div3.className = "cd4";
		div4.className = "cd3";
	}
}

// Part 3

function changeText() {
	var div5 = document.getElementById("d5");
	var div6 = document.getElementById("d6");
	var txt = div5.innerHTML;
	div5.innerHTML = div6.innerHTML;
	div6.innerHTML = txt
}


/* Part 4 */

function changeCanvasColor() {
	var ca5 = document.getElementById("c5");
	ca5.style.backgroundColor = "lime";
}

function colorPicker() {
	var ca5 = document.getElementById("c5");
	var picker = document.getElementById("b8");
	ca5.style.backgroundColor = picker.value;
}

// Part5 Create square on canvas 
function Create_Square() {
	var ca6 = document.getElementById("c6");
	var con6 = ca6.getContext("2d");
	var len = document.getElementById("b9");
	con6.clearRect(0, 0, ca6.width, ca6.height);
	con6.fillStyle = "yellow";
	con6.fillRect(0, 0, len.value, len.value);
	con6.fillRect(parseInt(len.value) + 5, 0, len.value, len.value);
	con6.fillRect(parseInt(len.value) * 2 + 10, 0, len.value, len.value);
}
