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
    	var r = new RegisterCommunication("http://localhost:8080");
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
