var PLAYERSTATE = {
    SIGNED : 0,
    GUEST : 1,
    UNSIGNED : 2
};

var GAMESTATE = {
    NEW : 0,
    CONTINUE : 1    
};

var gameState = {	
	playerState:localStorage.getItem("playerState"),
	gameState:localStorage.getItem("gameState"),
	
	isSigned:function () {
		return this.playerState == PLAYERSTATE.SIGNED;
	},
	
	isGuest: function () {
		return this.playerState== PLAYERSTATE.GUEST;
	},
	
	/*
	 * 
	 */	
	
	setPlayerState: function (newState) {
		this.playerState = newState;
		localStorage.setItem("playerState", this.playerState );
	},
	
	setGameState: function (newState) {
		this.gameState = newState;
		localStorage.setItem("gameState", this.gameState );
	}
	
};




