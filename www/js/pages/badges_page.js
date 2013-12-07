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
    onClickNewGame:function()
    {    	
    	window.location = "game.html";
    },

        
    // deviceready Event Handler
    onDeviceReady: function() {
    	
    	
    },       
    
};
