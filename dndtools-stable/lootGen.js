var lootTable = ["Alchemist's Fire", "20",
		 "Acid Vial", "10",
                 "Acid Vial", "10",
                 "Acid Vial","10",
		 "Smokesticks","20",
		 "Holy water","25",
		 "Antitoxin","50",
		 "Jug of Wine","55",
                 "Jug of Wine","55",
                 "Jug of Wine","55",
		 "Smoke Bomb","10",
                 "Smoke Bomb","10",
                 "Smoke Bomb","10",
                 "Potion of Cure Light Wounds","50",
                 "Potion of Cure Light Wounds","50",
		 "Potion of Cure Light Wounds","50",
		 "Potion of Jump","50",
		 "Potion of Hide from Undead","50",
		 "Potion of Shillelagh","250",
		 "Potion of Hide from Animal","50",
		 "Everburning torch","100",
		 "Tanglefoot bag","50",
		 "Thunderstone","30",
		 "Chain shirt","100",
		 "Masterwork studded leather","175",
		 "Breastplate","200",
		 "Banded mail","250",
		 "Half-plate","600",
		 "Full plate","1,500",
		 "Backpack, empty","2",
		 "Crowbar","2",
		 "Lantern, bullseye","12",
		 "Lock, simple","20",
		 "Manacles, masterwork","50",
		 "Mirror, small steel","10",
		 "Rope, silk (50 ft.)","10",
		 "Spyglass","1000",
		 "Artisans tools, masterwork","55",
		 "Climbers kit","80",
		 "Disguise kit","50",
		 "Healers kit (50 gp)",
		 "Holy symbol, silver","25",
		 "Hourglass","25",
		 "Magnifying glass","100",
		 "Musical instrument, masterwork","100",
		 "Thieves tools, masterwork","50",
		 "Lapis Lazuli","10",
		 "Freshwater Pearl","10",
		 "Blue Quartz","10",
		 "Bloodstone","50",
		 "Moonstone","50",
		 "Smokey Quartz","50",
		 "Amber Jem","100",
		 "Jade Jem","100",
		 "Amethyst","100",
		 "Yellow Topaz","500",
		 "Alexandrite","500",
		 "Violet Garnet","500",
		 "Emerald","1000",
		 "Fire Opal","1000",
		 "Shiney Ruby","1000",
		 "Gold Bracelet (55gp)",
		 "Silver Chalice","105",
		 "Brass Mug ","350",
		 "Silver Comb with Moonstone","500",
		 "Silver Longsword ","500",
		 "Amulet of Vermin: Giant Wasp","800",
		 "Horn of Fog ","1200",
		 "Slippers of Spiderclimb","2000",
		 "Hat of Disguise, 1 charge","900"
];

//This function is called when the generate loot butotn is clicked, it takes in a max value of gold and spits out items equally that value.
function genLoot(){
	
	var num = Math.floor(Math.random() + (lootTable.length+1 - 0));
	var maxGold = document.getElementById('maxGold').value;
	var prizeGold = 0;
        var TheTextBox = document.getElementById("infoPanel");
	while(maxGold>15){

		num = Math.floor((Math.random() * 70) + 1);
		if(num%2 != 0){ //If num is odd we see if the value at that point is less then the maxGold we can spend.

			if(lootTable[num] < maxGold){
				
			        TheTextBox.value = TheTextBox.value + "\n" + lootTable[num-1] +" (" + lootTable[num] + "gp)";
				//console.log("Less" + lootTable[num-1]);
				maxGold = maxGold - lootTable[num];
			}
		}else{ //If it is even then we will add ten to prize gold.
			maxGold = maxGold-10;
			prizeGold = prizeGold + 10;
		}
	}

	//var TheTextBox = document.getElementById("infoPanel");
	TheTextBox.value = TheTextBox.value + "\nAnd an extra: " + prizeGold + "gp\n";
}
