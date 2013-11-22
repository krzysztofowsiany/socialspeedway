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

    bindDeviceEvents: function() {    	
    		$(document).on('deviceready', page.onDeviceReady, false);
    },    
    bindEvents: function() {    	
    	//$(document).on('load', startpage.onDeviceReady, false);
		this.onDeviceReady();
    },    
    
    //navigation
    onClickRegister:function()
    {    	
    //	window.location = "game.html";
    	alert("register user");
    },    
        
    // deviceready Event Handler
    onDeviceReady: function() {
    	$(".register").on('click', page.onClickRegister);
    	
    },       
    
};
