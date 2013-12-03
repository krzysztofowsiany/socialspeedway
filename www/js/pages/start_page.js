/*
 * Project: SocialSpeedway
 * Author: Krzysztof Owsiany 
 */

var page = {
    // Application Constructor
    initialize: function() {
    	if ( CORE.isDEVICE() ) 
    	{
    		this.bindDeviceEvents();
    	
    	} else {
    		
    		this.bindEvents();
    		
    	}

    	
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    //bind device
    bindDeviceEvents: function() {   	
    	    document.addEventListener("deviceready", page.onDeviceReady, false);
    		//$(document).bind('deviceready', page.onDeviceReady, false);
    },    
    bindEvents: function() {    	
    	//$(document).on('load', startpage.onDeviceReady, false);
		this.onDeviceReady();
    },
    
    
    //navigation
    onClickNewGame:function()
    {    	
    	gameData.newGame();
    	gameState.setPlayerState( PLAYERSTATE.UNSIGNED);
		gameState.setGameState(GAMESTATE.NEW);
		
    	window.location = "game.html";
    },
    onClickContinue:function()
    {    	
    	//gameState.setPlayerState(PLAYERSTATE.SIGNED);
		gameState.setGameState(GAMESTATE.CONTINUE);
    	window.location = "game.html";
    },
    onClickLogin:function()
    {    	
    	var l = new LoginCommunication( CORE.SERVER_URL,
    			//login ok
    			function(id){    				
    				gameState.setPlayerState( PLAYERSTATE.SIGNED);
    				gameState.setGameState(GAMESTATE.CONTINUE);
    				gameData.setPlayerID(id);
    				window.location = "game.html";
    			},
    			//fail
    			function(){
    				gameState.setPlayerState( PLAYERSTATE.UNSIGNED);
    				gameState.setGameState(GAMESTATE.NEW);
    				gameData.setPlayerID(0);
    				window.location = "startpage.html";
    				alert("Logowanie błędne");
    			}
    	);    	
    	
    	
    	l.login(
    			$("#login").val(),
    			$("#password").val()    			
    		);    	
    	
    	
    },
        
    // deviceready Event Handler
    onDeviceReady: function() {    	
    	$(".login").on('click', page.onClickLogin);
    	$(".new_game").on('click', page.onClickNewGame);
    	$(".continue").on('click', page.onClickContinue); 	
    	
    },       
    
};
