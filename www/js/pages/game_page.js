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
        
    // deviceready Event Handler
    onDeviceReady: function() {
    	$(".register").on('click', page.onClickRegister);
    	$(".profile").on('click', page.onClickProfile);
    	$(".achievements").on('click', page.onClickAchievements);
    	$(".badges").on('click', page.onClickBadges);
    	$(".training").on('click', page.onClickTraining);
    },       
    
};
