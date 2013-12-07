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
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    //bind device
    bindDeviceEvents: function() {  
    	document.addEventListener("deviceready", page.onDeviceReady, false);
    	//$(document).on('deviceready', page.onDeviceReady, true);
    },    
    bindEvents: function() {    	
    	//$(document).on('load', startpage.onDeviceReady, false);
		this.onDeviceReady();
    },
    
    
    //navigation
    onClickRegister:function()
    {    	
    	window.location = "register.html";
    },
    onClickProfile:function()
    {    	
    	window.location = "profile.html";
    },
    onClickAchievements:function()
    {    	
    	window.location = "achievements.html";
    },
    onClickBadges:function()
    {    	
    	window.location = "badges.html";
    },
    onClickTraining:function()
    {    	
    	window.location = "training.html";
    },
    onClickLogout:function() {
    	gameState.setPlayerState( PLAYERSTATE.UNSIGNED);
    	gameState.setGameState(GAMESTATE.NEW);
    	gameData.setPlayerID(0);
    	window.location = "startpage.html";
    },
     
        
    // deviceready Event Handler
    onDeviceReady: function() {    	
    	if (gameState.isSigned()) {
    		$(".register").hide();
    		$(".logout").show();
    		$(".logout").on('click', page.onClickLogout);    		
    	}
    	else {
    			$(".register").on('click', page.onClickRegister);
    			$(".logout").hide();    			
    		}    	
    	
    	$(".profile").on('click', page.onClickProfile);
    	$(".achievements").on('click', page.onClickAchievements);
    	$(".badges").on('click', page.onClickBadges);
    	$(".training").on('click', page.onClickTraining);
    },       
    
};
