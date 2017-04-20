// Your task is to loop through all the reindeer in the array, and add the name of
// the reindeer to the single HTML <div> element provided. The name of the reindeer
// should be prepended with the corresponding color from the other array.

// Example output:

// Blue Dasher

// Red Dancer

console.log("HOHOHO");


var colors = ["Blue ", "Red ", "Orange ", "Purple ", "Hazel ", "Aquamarine ", "Periwinkle ", "Azure ", "Fuchsia ", "Chocolate ", "Amber ", "Amaranth "];
var reindeer = ["Dasher ", "Dancer ", "Prancer ", "Vixen ", "Comet ", "Cupid ", "Donner ", "Blitzen "];


var hohohoElement = document.getElementById("reindeer");

for(var i = 0; i < 8; i++){
	console.log(colors[i] + reindeer[i]);

	hohohoElement.innerHTML += colors[i];
	hohohoElement.innerHTML += reindeer[i] + "<p></p>";

}