/*
 * Project: SocialSpeedway
 * Author: Krzysztof Owsiany 
 */

function StartPage(){	
	function init(){
		$(".login").on('click', onClickLogin);
    	$(".new_game").on('click', onClickNewGame);
    	$(".continue").on('click', onClickContinue);
    	$("#all_content").show();
	}
	
	
	function restoreLastAuthorizationData(){
		$("#login").val(gameData.data.authenticate.lastLogin);
		$("#password").val(gameData.data.authenticate.lastPassword);		
	}
	
	function saveLastAuthorizationData(){
		gameData.data.authenticate.lastLogin = $("#login").val();
		gameData.data.authenticate.lastPassword = $("#password").val();
		gameData.saveLocal();
	}
	
	
	function goGamePage() {
		page.gamePage.thisPage();
		
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
				
				if (gameData.data.player.playerID!=id)
					gameData.newGame();
				
				gameData.data.player.playerID=id;
				
				page.gamePage.signed();
				
				saveLastAuthorizationData();
				gameData.sync();			
			  								
				goGamePage();
			},
			//fail
			function(){
				gameState.setPlayerState( PLAYERSTATE.UNSIGNED);
				gameState.setGameState(GAMESTATE.NEW);
				gameData.data.player.playerID=0;
				CORE.showDialog("Authentication", "Login failed!");						
			}
    	);    	
    	
    	l.login(
    			$("#login").val(),
    			$("#password").val()    			
    		);    	    	
    	CORE.LOG.addInfo("START_PAGE:onClickLogin");
    }
    
	function backPage() {
		//$.mobile.changePage("#game_page", "fade");	    	
	    //gameState.gamePage =GAMEPAGE.GAME; 
		navigator.app.exitApp();
	}
	    
	function thisPage() {
		$.mobile.changePage("#start_page", "none");
	    gameState.gamePage =GAMEPAGE.START;
	}
    
    return {
    	init:init,
    	restoreLastAuthorizationData:restoreLastAuthorizationData,
    	backPage:backPage,
    	thisPage:thisPage,
    	//saveLastAuthorizationData:saveLastAuthorizationData,
    };
}
    
    