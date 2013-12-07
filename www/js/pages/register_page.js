/*
 * Project: SocialSpeedway
 * Author: Krzysztof Owsiany 
 */

var page = {
    // Application Constructor
    initialize: function() {
    	if ( CORE.isDEVICE() )     	
    		this.bindDeviceEvents();
    	
    	else     		
    		this.bindEvents();   
    	
    },
    // Bind Event Listeners

    bindDeviceEvents: function() {
    	document.addEventListener("deviceready", page.onDeviceReady, false);
    		//$(document).on('deviceready', page.onDeviceReady, false);
    },    
    bindEvents: function() {    	
    	//$(document).on('load', startpage.onDeviceReady, false);
		this.onDeviceReady();
    },    
    
    //navigation
    onClickRegister:function()
    {	
    	var r = new RegisterCommunication(CORE.SERVER_URL,
    		function () {
				alert("Gracz zarejestrowany");
				gameState.setPlayerState( PLAYERSTATE.UNSIGNED);
				gameState.setGameState(GAMESTATE.NEW);
				
				gameData.setPlayerID(0);
				ProgressBar.destroy();
				window.location = "startpage.html";
				
			},
			function () {
				ProgressBar.destroy();
				alert("Gracz nie został zarejestrowany");    				    				
			}
		);
    	ProgressBar.create();
    	r.register(
    			$("#login").val(),
    			$("#password").val()    			
    		);    	
    	
    },    
        
    // deviceready Event Handler
    onDeviceReady: function() {
    	$(".register").on('click', page.onClickRegister);
    	
    },
    
};
