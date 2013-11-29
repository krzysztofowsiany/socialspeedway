/*
 * Project: SocialSpeedway
 * Author: Krzysztof Owsiany 
 */

var page = {
    // Application Constructor
    initialize: function() {
    	if ( "device" in window ) 
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
    		$(document).on('deviceready', page.onDeviceReady, false);
    },    
    bindEvents: function() {    	
    	//$(document).on('load', startpage.onDeviceReady, false);
		this.onDeviceReady();
    },
    
    
    //navigation
    onClickNewGame:function()
    {    	
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
    	var l = new LoginCommunication("http://localhost:8080",
    			function(){    				
    				gameState.setPlayerState( PLAYERSTATE.SIGNED);
    				gameState.setGameState(GAMESTATE.CONTINUE);
    				window.location = "game.html";
    			},
    			function(){
    				gameState.setPlayerState( PLAYERSTATE.UNSIGNED);
    				gameState.setGameState(GAMESTATE.NEW);
    				window.location = "startpage.html";
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
