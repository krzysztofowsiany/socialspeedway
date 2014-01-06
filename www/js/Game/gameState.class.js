var PLAYERSTATE = {
    SIGNED : 2,
    GUEST : 1,
    UNSIGNED : 0
};

var GAMESTATE = {
    NEW : 0,
    CONTINUE : 1    
};

var gameState = {
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




