"use strict";
function gameStart(){
	let userName = prompt("Please enter a username.")
	let start = prompt(userName +", are you ready to begin?\nYes/No");
	let letsGo = ["yes", "sure", "maybe", "okay", "start", "ok", "yeah","Yes","YES","Sure","Maybe","Start","OK","Ok"];
	
	if(letsGo.includes(start)){
		if(userName === null){
			alert("maybe next time!")
		}else{
		alert(userName + ", you awake in the middle of the night on your couch to a very eerie figure standing in the doorway! ")
		alert(userName + " quick! It's the killer thats been on the news, and you're his next victim you must find your phone and call 911!")
		gameCommands(userName);
	}
} else{
	alert("Maybe next time!");
	}
}
function gameRetry(userName){
	let reStart = prompt(userName + ", would you like to try again?\nYes/No");
	let roundTwo = ["yes", "sure", "maybe", "okay", "start", "ok", "yeah","Yes","YES","Sure","Maybe","Start","OK","Ok"]
	if(roundTwo.includes(reStart)){
		gameCommands(userName);
	}else{
		alert("Maybe next time!");
	}
}
function gameCommands(userName){
	let gameOver = false;
	alert("Quick, " + userName +"!\nYou need to find the phone, roll to see if you find it!");
	let results1 = rollDice(4);
	console.log(results1);
	alert(userName +"!" + " You rolled a " + results1);
	gameOver = aPhone(results1, userName);
	if(gameOver === true){
		return gameRetry(userName);
	}
	alert("Time to sneak past the killer and call 911 " + userName + ".\nRoll to see if you make it!");
	let results2 = rollDice(6);
	console.log(results2);
	alert(userName +"!" + " You rolled a " + results2);
	gameOver = aBedroom(results2, userName);
	if(gameOver === true){
		return gameRetry(userName);
	}
	alert(userName + "!" + " The police are on the way! Time to arm yourself.\nRoll to find a Weapon!");
	let results3 = rollDice(8);
	console.log(results3);
	alert(userName +"!" + " You rolled a " + results3);
	let weapon = aWeapon(results3, userName);

	alert("The killer heard you searching for a weapon in the bedroom! The door opens and there he is, this is your time " + userName + ".\nQuickly roll to fight or flee!")
	let results4 = rollDice(10);
	console.log(results4);
	alert(userName +"!" + " You rolled a " + results4);
	gameOver = aAttack(weapon, userName);
	if(gameOver === true){
		return gameRetry(userName);
	}
	alert(userName + " you have managed to make it to the basement, the police are on scene and about to enter the house!\nQuick roll to see what you'll do next!")
	let results5 = rollDice(12);
	console.log(results5);
	alert(userName +"!" + " You rolled a " + results5);	
	gameOver = aMove(results5, userName);
	if(gameOver === true){
		return gameRetry(userName);
	}
	alert(userName + ", the police have entered the house!\nQuick roll to see how your story ends!");
	let results6 = rollDice(20);
	console.log(results6);
	alert(userName +"!" + " You rolled a " + results6);
	gameOver = aEnd(results6);
	if(gameOver === true){
		return gameRetry(userName);
	}
}
function rollDice(sides){
	let fRoll = Math.floor(Math.random() * sides) + 1;
	return fRoll;

}


function aPhone(results1, userName){
	if(results1 <= 2){
	console.log(userName +" You've managed to find your phone! Now we need to find some place quite the killer wont find you to place the call!");
	alert(userName +" You've managed to find your phone!\nNow we need to find some place quite the killer wont find you to place the call!");
} else if(results1 >= 3){
	console.log(userName + " You took too long! The killer has found you! No one will ever see you again!");
	alert(userName + " You took too long! The killer has found you! No one will ever see you again!");
	return true;
}
}

function aBedroom(results2, userName){
	if(results2 <= 3){
	console.log(userName + ", great job! You made it to the bedroom without the killer getting you, time to make that call!");
	alert(userName + ", great job!\nYou made it to the bedroom without the killer getting you, time to make that call!");
} else if(results2 >= 4){
	console.log("Oh no " + userName + "!" + " You turn the corner and there he is! As the killer approaches, you're frozen unable to move. Easy killings says the killer as he thrusts his knife into your chest.");
	alert("Oh no " + userName + "!" + " You turn the corner and there he is!\nAs the killer approaches, you're frozen unable to move.\nEasy killings says the killer as he thrusts his knife into your chest.");
	return true;
}
}
function aWeapon(results3, userName){
	if(results3 <= 2){
	console.log("After a quick search you found, whats this! " + userName + " you obtained a Rubber Duck!");
	alert("After a quick search you found, whats this!\n" + userName + " you obtained a Rubber Duck!");
	alert("QUACK, QUACK");
	return results3;
} else if(results3 === 3 || results3 === 4){
	console.log("After a quick search you found, whats this! " + userName + " you obtained a Backpack Full Of Bricks!");
	alert("After a quick search you found, whats this!\n" + userName + " you obtained a Backpack Full Of Bricks!");
	return results3;
} else if(results3 === 5 || results3 === 6){
	console.log("After a quick search you found, whats this! " + userName + " you obtained a Feather Stuffed Pillow!");
	alert("After a quick search you found, whats this!\n" + userName + " you obtained a Feather Stuffed Pillow!");
	return results3;
} else if(results3 >= 7){
	console.log("After a quick search you found, whats this! " + userName + " you obtained a Snow Globe!");
	alert("After a quick search you found, whats this!\n" + userName + " you obtained a Snow Globe!");
	return results3;
}
}
function aAttack(weapon, userName){
	if(weapon <= 2){
	console.log(userName + ", you swing your rubber duck with all your might, yet the killer chuckles as he plunges his knife into your chest!");//need help here//
	alert(userName + ", you swing your rubber duck with all your might, yet the killer chuckles as he plunges his knife into your chest!");
	return true;
} else if(weapon === 5 || weapon === 6){ 
	console.log(userName + ", you swing your feather stuffed pillow with all your might, yet feathers are not the only thing flying as the killer plunges his knife into your chest!");
	alert(userName + ", you swing your feather stuffed pillow with all your might, yet feathers are not the only thing flying as the killer plunges his knife into your chest!");
	return true;
} else if(weapon === 7 || weapon === 8){
	console.log(userName + ", with a swift blow to the head you managed to knock the killer down allowing you a breif opportunity to run away and hide until the police arrive!");
	alert(userName + ", with a swift blow to the head you managed to knock the killer down allowing you a breif opportunity to run away and hide until the police arrive!");
} else if(weapon === 3 || weapon === 4){ 
	console.log(userName + ", with a swift blow to the head you managed to knock the killer down allowing you a breif opportunity to run away and hide until the police arrive!");
	alert(userName + ", with a swift blow to the head you managed to knock the killer down allowing you a breif opportunity to run away and hide until the police arrive!");
} else if(results4 >= 9){
	console.log(userName + ", luckily fighting is not your forte. A noise from the bathroom draws the killer away allowing you the time to run away and hide somewhere else!");
	alert(userName + ", luckily fighting is not your forte.\nA noise from the bathroom draws the killer away allowing you the time to run away and hide somewhere else!");
}
}
function aMove(results5, userName){
	// alert(userName + " you have managed to make it to the basement, the police are on scene and about to enter the house!\nQuick roll to see what you'll do next!")
	if(results5 <= 4){
	console.log(userName + " you have chosen to stay hidden in the basement and cower behind the dryer!");
	alert(userName + " you have chosen to stay hidden in the basement and cower behind the dryer!");
} else if(results5 === 5 || results5 === 6){
	console.log(userName + " you decide to break open the basement window and crawl out to safety as the police storm the house!");
	alert(userName + " you decide to break open the basement window and crawl out to safety as the police storm the house!");
} else if( results5 === 7 || results5 === 8){
	console.log(userName + " you hide underneath the staircase as the police break down the door!");
	alert(userName + " you hide underneath the staircase as the police break down the door!");
} else if(results5 >= 9){
	console.log(userName + " you try to get up and move but instead you trip, fall, and knock yourself out. Easy killings for the killer!");
	alert(userName + " you try to get up and move but instead you trip, fall, and knock yourself out. Easy killings for the killer!");
	return true;
}
}
function aEnd(results6, userName){
	if(results6 <= 5){
	console.log("The police have stormed the house and secured every room with the killer unable to be found, as he has escaped ALIVE! To kill another day!");
} else if(results6 >= 6 && results6 <= 10){
	console.log("You suddenly awake on your couch, what a terrible nightmare that was!");
} else if(results6 >= 16 && results6 <= 19){
	console.log("The killer is found dead, as he has taken his own life!");
} else if(results6 = 20){
	console.log("Scared and frantic, you run up on an officer and spook him. He draws his weapon and shoots! You're dead!");
	return true;
}
}

// function delayPause(){

// }

function myFunction(){
	gameStart();
}