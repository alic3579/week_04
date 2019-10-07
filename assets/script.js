// var myWrapper = document.getElementById("wrapper");



// for (var i = 0; i < 100; i++) {



// 	var degrees;

// 		if(i % 2 === 0){
// 			degrees = (i/10) * 360;
// 		}else{
// 			degrees = ((i-1)/10) * 360;
// 		}



// 	var scale;

// 		if (i % 7 === 0) {
// 			scale = 0.7; 
// 		} else {
// 			scale = 0.4;
// 		}



// 	var myModule = `

// 	<div 
// 			class="square" 
// 			style="border-color: rgb(${redColor},${changingColor},0);"
// 		>
		

// 			<div class="invader_wrapper">

// 				<div class="space-invader" style="transform: rotate(${degrees}deg) scale(${scale});"></div>

// 			</div>

// 		</div>
// 		`;


// 	if(i % 2 === 0){
// 				myWrapper.insertAdjacentHTML('beforeend' , myModule);
// 			}else{
// 				myWrapper.insertAdjacentHTML('afterbegin' , myModule);
// 			}




// }







var changingColor = 10;
var timer = 100;

var squareFunction = function(i){

	changingColor = changingColor + 50;

	var redColor;

	if(i % 11 === 0){
		redColor = 250 ; changingColor = 0;
	} else {
		redColor = 0;
	}

	var rotation = Math.round((i/30) * 360);


	

	document.getElementById("wrapper").insertAdjacentHTML("beforeend", `
		<div id="square-${i}" class="square" style="border-color: rgb(${redColor},${changingColor},0);"></div>`);

	setTimeout(function(){

		var spaceInvader = `<div class="space-invader" style="transform: scale(0.5) rotate(${rotation}deg);"></div>`;

		document.getElementById(`square-${i}`).insertAdjacentHTML("beforeend", spaceInvader);

	}, 500, i, rotation)

}

for (var i = 0; i < 30; i++) {
	setTimeout(squareFunction, i*timer, i)
}




