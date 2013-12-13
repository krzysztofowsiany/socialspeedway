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
		window.location = "#game_page";
	}
	
    //navigation start page
    function onClickNewGame() { 	    	
    	gameData.newGame();
    	gameState.setPlayerState( PLAYERSTATE.UNSIGNED);
		gameState.setGameState(GAMESTATE.NEW);
		page.gamePage.unSigned();
		goGamePage();    	
    }    
    
    function onClickContinue()    {    	
    	//gameState.setPlayerState(PLAYERSTATE.SIGNED);
		gameState.setGameState(GAMESTATE.CONTINUE);
		page.gamePage.unSigned();
		goGamePage();
    }
    
    function onClickLogin()    {
    	var l = new LoginCommunication( CORE.SOCKET,
			//login ok
			function(id){    				
				gameState.setPlayerState( PLAYERSTATE.SIGNED);
				gameState.setGameState(GAMESTATE.CONTINUE);
				gameData.data.player.playerID=id;

				page.gamePage.signed();    				
				$("#MessageBox").dialog();
				goGamePage();
			},
			//fail
			function(){
				gameState.setPlayerState( PLAYERSTATE.UNSIGNED);
				gameState.setGameState(GAMESTATE.NEW);
				gameData.data.player.playerID=0;
				$("#MessageBox").dialog();
				window.location = "#start_page";			
			}
    	);    	
    	
    	l.login(
    			$("#login").val(),
    			$("#password").val()    			
    		);    	    	
    	
    }
    
    return {
    	init:init
    };
}
    
    