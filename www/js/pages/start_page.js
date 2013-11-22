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
    	window.location = "game.html";
    },
    onClickContinue:function()
    {    	
    	window.location = "game.html";
    },
    onClickLogin:function()
    {    	
    	window.location = "game.html";
    },
        
    // deviceready Event Handler
    onDeviceReady: function() {
    	$(".login").on('click', page.onClickLogin);
    	$(".new_game").on('click', page.onClickNewGame);
    	$(".continue").on('click', page.onClickContinue);
    	
    	
    },       
    
};
