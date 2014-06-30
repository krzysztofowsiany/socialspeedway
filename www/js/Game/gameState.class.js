var PLAYERSTATE = {
    SIGNED : 2,
    GUEST : 1,
    UNSIGNED : 0
};

var GAMESTATE = {
    NEW : 0,
    CONTINUE : 1    
};


var GAMEPAGE = {
	    START : 0,
	    GAME : 1,
	    REGISTER : 2,
	    PROFILE : 3,
	    TRAINING : 4,
	    BADGES : 5,
	    ACHIEVEMENTS : 6,
	    MARKET : 7,
	    RACE : 8,
	    SCHEDULE : 9,
	    RANK : 10,
	    MACHINE_PARK:11
	    
	    
	};

var gameState = {
	gamePage:GAMEPAGE.START,
	isSigned:function () {
		return gameData.data.player.state == PLAYERSTATE.SIGNED;
	},
	
	isGuest: function () {
		return gameData.data.player.state == PLAYERSTATE.GUEST;
	},
	
	/* 
	 */	
	
	setPlayerState: function (newState) {
		gameData.data.player.state = newState;
		gameData.saveLocal();
	},
	
	setGameState: function (newState) {
		gameData.data.game.state = newState;
		gameData.saveLocal();
	}
};




