// var i = 0; 			// Start Point
// var images = [];	// Images Array
// var time = 5000;	// Time Between Switch
	 
// // Image List
// images[0] = "images/bg.jpg";
// images[1] = "images/bg2.BMP";
// images[2] = "images/bg3.jpg";
// images[3] = "images/bg4.BMP";

// // Change Image
// function changeImg(){
// 	document.slide.style.transition = "all 1s";
// 	document.slide.src = images[i];

	

// 	// Check If Index Is Under Max
// 	if(i < images.length - 1){
// 	  // Add 1 to Index
// 	  i++; 
// 	} else { 
// 		// Reset Back To O
// 		i = 0;
// 	}

// 	// Run function every x seconds
// 	setTimeout("changeImg()", time);
// }

// // Run function when page loads
// window.onload=changeImg;



var date = new Date().getFullYear();  
document.getElementById('date').innerHTML = date;





// $(document).ready(function(){
//   $('.slide').slick({
//     setting-name: setting-value
//   });
// });