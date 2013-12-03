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
	emptyValues:function() {
		this.setProfilePlayerData({
			name:"", 
			surname:"",
			age:0,
			sex:0
		});
		
		this.setProfileContact({
			email:"", 
			mobile:""
			});
		
	},
	newGame:function() {
		this.setPlayerID(0);
		this.emptyValues();
	}
	
};
