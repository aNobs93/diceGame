"use strict";

function gameStart(){
	let results1 = rollDice(4);
	console.log(results1);
	aPhone();
	let results2 = rollDice(6);
	console.log(results2);
	aBedroom();
	let results3 = rollDice(8);
	console.log(results3);
	let weapon = aWeapon();
	let results4 = rollDice(10);
	console.log(results4);
	aAttack(weapon);
	let results5 = rollDice(12);
	console.log(results5);	
	aMove();
	let results6 = rollDice(20);
	console.log(results6);
	aEnd();
function rollDice(sides){
// onClick = oneFour();
	let fRoll = Math.floor(Math.random() * sides) + 1;
	return fRoll;

}


function aPhone(){
	if(results1 <= 2){
		console.log("You found a phone!");
} else if(results1 >= 3){
		console.log("You took too long! The killer has found you!");
}
}

function aBedroom(){
	if(results2 <= 3){
	console.log("You safely made it to the bedroom!");
} else if(results2 >= 4){
	console.log("Oh no! You ran into the killer!");
}
}
function aWeapon(){
	if(results3 <= 2){
	console.log("You found a rubber duck!")
	return "rubber duck";
} else if(results3 === 3 || results3 === 4){
	console.log("You found a backpack full of bricks!");
	return "backpack full of bricks";
} else if(results3 === 5 || results3 === 6){
	console.log("You found a feather stuffed pillow!");
	return "feather stuffed pillow";
} else if(results3 >= 7){
	console.log(" You found a snow globe!");
	return "snow globe";
}
}
function aAttack(weapon){
	if(weapon == "rubber duck"){
	console.log("You swing your rubber duck with all your might, yet the killer chuckles as he plunges his knife into your chest!");//need help here//
} else if(weapon == "feather stuffed pillow"){ 
	console.log("You swing your feather stuffed pillow with all your might, yet feathers are not the only thing flying as the killer plunges his knife into your chest!");
} else if(weapon == "snow globe"){
	console.log("You managed to knock down the killer with your snow globe and get away!");
} else if(weapon =="backpack full of bricks"){ 
	console.log("You managed to knock down the killer with your backpack full of bricks and get away!");
} else if(results4 >= 8){
	console.log("You just miss the killer as you turn the hallway!");
}
}
function aMove(){
	if(results5 <= 4){
	console.log("You've decided to stay hidden in the basement and cower behind the dryer!");
} else if(results5 === 5 || results5 === 6){
	console.log("You break open the basement window and crawl out to safety as the police storm the house!")
} else if( results5 === 7 || results5 === 8){
	console.log("You hide underneath the staircase as the police break down the door!")
} else if(results5 >= 9){
	console.log("While getting up to move you trip, fall, and knock yourself out....");
}
}
function aEnd(){
	if(results6 <= 5){
	console.log("The police have stormed the house and secured every room with the killer unable to be found, as he has escaped ALIVE! To kill another day!");
} else if(results6 >= 6 && results6 <= 10){
	console.log("You suddenly awake, what a terrible nightmare that way!");
} else if(results6 >= 16 && results6 <= 19){
	console.log("The killer is found dead, as he has taken his own life!");
} else if(results6 = 20){
	console.log("Scared and frantic, you run up on an officer and spook him. He draws his weapon and shoots! You're dead!")
}
}

}
gameStart();
