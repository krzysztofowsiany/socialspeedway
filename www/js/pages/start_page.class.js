/*
 * Project: SocialSpeedway
 * Author: Krzysztof Owsiany 
 */

function StartPage(g){
	var game = g;
	
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
		game.unSigned();
		goGamePage();    	
    }    
    
    function onClickContinue()    {    	
    	//gameState.setPlayerState(PLAYERSTATE.SIGNED);
		gameState.setGameState(GAMESTATE.CONTINUE);
		game.unSigned();
		goGamePage();
    }
    
    function onClickLogin()    {
    	var l = new LoginCommunication( CORE.SOCKET,
			//login ok
			function(id){    				
				gameState.setPlayerState( PLAYERSTATE.SIGNED);
				gameState.setGameState(GAMESTATE.CONTINUE);
				gameData.setPlayerID(id);

				game.signed();    				
				
				goGamePage();
			},
			//fail
			function(){
				gameState.setPlayerState( PLAYERSTATE.UNSIGNED);
				gameState.setGameState(GAMESTATE.NEW);
				gameData.setPlayerID(0);
				
				window.location = "#start_page";
				alert("Logowanie błędne");
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
    
    