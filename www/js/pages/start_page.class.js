/*
 * Project: SocialSpeedway
 * Author: Krzysztof Owsiany 
 */

function StartPage(){	
	function init(){
		$(".login").on('click', onClickLogin);
    	$(".new_game").on('click', onClickNewGame);
    	$(".continue").on('click', onClickContinue);
	}
	
	function goGamePage() {
		$.mobile.changePage("#game_page");
		CORE.LOG.addInfo("START_PAGE:onGamePage");
	}
	
    //navigation start page
    function onClickNewGame() { 	    	
    	gameData.newGame();
    	gameState.setPlayerState( PLAYERSTATE.UNSIGNED);
		gameState.setGameState(GAMESTATE.NEW);
		page.gamePage.unSigned();
		goGamePage();    
		CORE.LOG.addInfo("START_PAGE:onClickNewGame");
    }    
    
    function onClickContinue()    {    	
    	//gameState.setPlayerState(PLAYERSTATE.SIGNED);
		gameState.setGameState(GAMESTATE.CONTINUE);
		//page.gamePage.unSigned();
		goGamePage();
		CORE.LOG.addInfo("START_PAGE:onClickContinue");
    }
    
    function onClickLogin()    {
    	var l = new LoginCommunication( CORE.SOCKET,
			//login ok
			function(id){    				
				gameState.setPlayerState( PLAYERSTATE.SIGNED);
				gameState.setGameState(GAMESTATE.CONTINUE);
				gameData.data.player.playerID=id;
				page.gamePage.loadGameProfileData();
				//page.gamePage.signed();    				
				
				goGamePage();
			},
			//fail
			function(){
				gameState.setPlayerState( PLAYERSTATE.UNSIGNED);
				gameState.setGameState(GAMESTATE.NEW);
				gameData.data.player.playerID=0;
				
				$.mobile.changePage("#start_page");			
			}
    	);    	
    	
    	l.login(
    			$("#login").val(),
    			$("#password").val()    			
    		);    	    	
    	CORE.LOG.addInfo("START_PAGE:onClickLogin");
    }
    
    return {
    	init:init
    };
}
    
    