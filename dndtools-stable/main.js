//DNDAssistant by Brandon T. Wood: Jan 14th, 2015

//All music files unsorted, these will be taken and loaded into the sound board, music will loop and can only have one song playing at a time.
var BGMusic = [
	"Night"
];

//All Sounds files, unsorted, sound affects can be played, multiple can be played at once and they will overlap.
var soundAffects = [
	"Sword_Hit"
];


var music; //Is actually a howler.js webgl sound object.
var sound; //same 
var musicVolume = 1.0;
var soundVolume = 1.0;
//Start of setup method
function init(){

	//Call methods to create dice roler and loot generator.
	createNewButton("genLoot");
	createNewButton("rollDice");

	//Here I make calls to methods that create all the buttons that control the music.
	createNewButton("musicPause");
        createNewButton("musicVolumeUp");
        createNewButton("musicVolumeDown");
	createNewButton("musicBreak");
	//This loop calls methods creates all the background music buttons you see on the left.
        for(i = 0; i < BGMusic.length; i++){
		createNewBGMusicButton(i,BGMusic[i]);
	}

	//Here I make calls to methods that create the controls for the sounds.
	createNewButton("soundPause");
	createNewButton("soundVolumeUp");
	createNewButton("soundVolumeDown");
	createNewButton("soundBreak");
	//This loop creates all the sound affect buttons you see on the right.
	for(j = 0; j < soundAffects.length; j++){
                createNewSoundAffectButton(j,soundAffects[j])
        }

}


//This function creates a new DOM html button for special buttons like volume and loot generationg and the name/label to be put on the button.
function createNewButton(name){
	if(name == "soundBreak"){
		
       		var br = document.createElement("br");
		var foo = document.getElementById("sounds");
                foo.appendChild(br);

	}else if(name == "musicBreak"){

                var br = document.createElement("br");
                var foo = document.getElementById("music");
                foo.appendChild(br);

	}else if(name == "musicPause"){
		
		var element = document.createElement("BUTTON");
	        var t = document.createTextNode("Pause");
	        element.appendChild(t);
	        element.name = name;
	        element.onclick = function() {

			music.fadeOut(0, 1200);
	                console.log("Stopped!");
        	};

        	var foo = document.getElementById("music");
        	foo.appendChild(element);

	}else if(name == "musicVolumeUp"){

		var element = document.createElement("BUTTON");
                var t = document.createTextNode("Up");
                element.appendChild(t);
                element.name = name;
                element.onclick = function() {

			musicVolume = musicVolume + 0.1;
                        music.volume(musicVolume);
                        console.log("Lowered volume to: " + musicVolume);
                };

                var foo = document.getElementById("music");
                foo.appendChild(element);

	}else if(name == "musicVolumeDown"){

		var element = document.createElement("BUTTON");
                var t = document.createTextNode("Down");
                element.appendChild(t);
                element.name = name;
                element.onclick = function() {

			musicVolume = musicVolume - 0.1;
                        music.volume(musicVolume);
                        console.log("Volume raised to: " + musicVolume);
                };

                var foo = document.getElementById("music");
                foo.appendChild(element);

	}else if(name == "soundPause"){

                var element = document.createElement("BUTTON");
                var t = document.createTextNode("Pause");
                element.appendChild(t);
                element.name = name;
                element.onclick = function() {

                        sound.stop();
                        console.log("Stopped!");
                };

                var foo = document.getElementById("sounds");
                foo.appendChild(element);

        }else if(name == "soundVolumeUp"){

                var element = document.createElement("BUTTON");
                var t = document.createTextNode("Up");
                element.appendChild(t);
                element.name = name;
                element.onclick = function() {

                        soundVolume = soundVolume + 0.1;
                        sound.volume(soundVolume);
                        console.log("Raised volume to: " + soundVolume);
                };

                var foo = document.getElementById("sounds");
                foo.appendChild(element);

        }else if(name == "soundVolumeDown"){

                var element = document.createElement("BUTTON");
                var t = document.createTextNode("Down");
                element.appendChild(t);
                element.name = name;
                element.onclick = function() {

                        soundVolume = soundVolume - 0.1;
                        sound.volume(soundVolume);
                        console.log("Lowered volume to: " + soundVolume);
                };
                var foo = document.getElementById("sounds");
                foo.appendChild(element);

        }else if(name == "genLoot"){
	
                var element = document.createElement("BUTTON");
                var t = document.createTextNode("Generate Random Loot");
                element.appendChild(t);
                element.name = name;
                element.onclick = function() {

			genLoot();
		};
		var foo = document.getElementById("goldButton");
                foo.appendChild(element);
	}else if(name == "rollDice"){

                var element = document.createElement("BUTTON");
                var t = document.createTextNode("Roll Dice");
                element.appendChild(t);
                element.name = name;
                element.onclick = function() {

                        rollDice();
                };
                var foo = document.getElementById("diceButton");
                foo.appendChild(element);
	}
}


//This function creates a new DOM html button and takes in a number for the place of the song in the array, and the name/label to be put on the button.
function createNewBGMusicButton(num, name){

	var element = document.createElement("BUTTON");
	var t = document.createTextNode(name);
	element.appendChild(t);
	element.name = name;
	element.onclick = function() {
 
		try{

                        music.fadeOut(0, 800);
                }catch(err){

                        console.log("This always happens once because sound isn't called the first time, no worries.");
                }

		music = new Howl({

        	        urls: [('sounds/' + BGMusic[num] + '.mp3'), ('sounds/' + BGMusic[num] + '.ogg')],
			loop: true,
        	}).play();
		music.pos3d(3,0,0);
        	console.log("CLICK!");
	};
	var foo = document.getElementById("music");
	foo.appendChild(element);
}


//This function creates a new DOM html button and takes in a number for the place of the song in the array, and the name/label to be put on the button.
function createNewSoundAffectButton(num, name){

	var element = document.createElement("BUTTON");
        var t = document.createTextNode(name);
        element.appendChild(t);
        element.name = name;
        element.onclick = function() {

                sound = new Howl({

                        urls: [('sounds/' + soundAffects[num] + '.mp3'), ('sounds/' + soundAffects[num] + '.ogg')],
        	}).play();
		sound.pos3d(-3,0,0);
                console.log("CLICK!");
        };
        var foo = document.getElementById("sounds");
        foo.appendChild(element);
}


//Can only roll up to 9 dice, wanted to limit it.
function rollDice(x, y){

	var holder = 0;
	var TheTextBox = document.getElementById("infoPanel");
        var roll = document.getElementById('dice').value;
	var i = 0;
	while(roll.charAt(i) != "d"){

		console.log(roll.charAt(i));
		i++;
	}
	var x = parseInt(roll.substring(0, i));
	var sides = 0;
	sides = parseInt(roll.substring(i+1, roll.length)); // Num of sides
	for(i = 1; i <= x; i++){

		holder =  Math.random() * (sides+1 - 1) + 1;
	        TheTextBox.value = TheTextBox.value + Math.floor(holder) + ", ";
	}
        TheTextBox.value = TheTextBox.value + "\n";
}
//End of File
