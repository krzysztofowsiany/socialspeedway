/*
 * Project: SocialSpeedway
 * Author: Krzysztof Owsiany 
 */



var gameData = {
	playerID:localStorage.getItem("playerID"),
	playerData:JSON.parse(localStorage.getItem("playerData")),
	playerContact:JSON.parse(localStorage.getItem("playerContact")),
	setPlayerID: function (ID) {
		this.playerID = ID;
		localStorage.setItem("playerID", this.playerID );
	},
	
	setProfilePlayerData:function(jsonData) {
		this.playerData = jsonData;		
		localStorage.setItem("playerData", JSON.stringify(this.playerData) );
	},
	setProfileContact:function(jsonData) {
		this.playerContact = jsonData;
		localStorage.setItem("playerContact", JSON.stringify(this.playerContact ));
	},
	newGame:function() {
		setPlayerID(0);
		
	}
	
};
