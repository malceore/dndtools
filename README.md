# dndtools

(As part of increasing my coding portfolio I have decided to create a unique Dungeons and Dragons assistant, I've called it Dndtools after an internet resource for DnD that was popular and recently closed.)

As of the most recent update Dndtools features:
 -  Customizable Random Loot generator
 -  Multiple Dice Rolling Simulation System
 -  Powerful and Interactive SoundBoard
 -  Writable Note Sheet  
 -  Working on all Platforms including Windows, Android, IOS and Linux

Dndtools is a Javascript program that you can run in your choice of browsers, it's powered by the amazing and lightweight Howler.js sound library(http://goldfirestudios.com/blog/104/howler.js-Modern-Web-Audio-Javascript-Library). It allows a Dungeon Master to bring a game to life with enchanting music and action packed sound effects players will love. Having a quality die roller is a must for most inspiring DMs and the Loot generation takes the work out of end of encounter loot division. To run the program click on "Index.html" and it will automitically start in your default browser with two basic sound files build in. 


==== How do I change Sounds and Music? ====
 -  Firstly let's understand the different between the two in this program. Music is played simular to your MP3 player, activated music will fade in and out when a new one is clicked. You could stick in your favorite game OST or battle music into Dndtools to spice up any game. Sounds on the other hand will play separately until completion everytime they are clicked, this is where you would put your sword slashes and magic noise files.
 -  Alright, to add sounds to Dndtools you first must drop the files you want to add into the "sounds" subfolder in "dndtools-stable". If you're using Chrome to run Dndtools you can use MP3 file format, for Firefox you will need OGG file format. Once you've done that you will need to edit the "main.js" file, the first part of the file you will see are the Music files in what programmers call a String array to add a file to this you will:

    var BGMusic = [
            "Night",
            "mySongNameHere"
    ];

(Note the addition of a comma after "Night" and that you will not need the file extention, just the name of the file) Sounds will be added in the same way, but under:

    var soundAffects = [
            "Sword_Hit",
            "SoundAffectFilesName"
    ];

After you're done save changes and refresh your browser to see the changes. Congrats you've added sound or music. Later implimentation may come with sound packs you can download and simply drag and drop.
 
 
==== How do I change the Loot generated? ====
 -  To edit generated loot you must open "lootGen.js", you can open it with notepad and will see a long list of items. To add items you only need to go to the end of the list of items and:

      ...
                  "Amulet of Vermin: Giant Wasp","800",
                 "Horn of Fog ","1200",
                 "Slippers of Spiderclimb","2000",
                 "Hat of Disguise","900",
                 "Item Of Adding", "200"
      ];

The syntax for adding something is "Name of item", "gold value of item, do not put gp at the end". Don't forget to add a comma to the item above the one you add. To remove and item simply delete it's entire line from the file. Don't worry, if you break it, just redownload or google the issue. ;)


