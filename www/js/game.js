/*
 * Project: SocialSpeedway
 * Author: Krzysztof Owsiany 
 */

var page = {
    // Application Constructor
	startPage:undefined,
	profilePage:undefined,
	gamePage:undefined,
	registerPage:undefined,
	
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
       
    // deviceready Event Handler
    onDeviceReady: function() {    	
    	CORE.SOCKET = io.connect(CORE.SERVER_URL);
    	this.gamePage=GamePage();
    	this.gamePage.init();    
    	
    	this.startPage = StartPage();
    	this.startPage.init();   	
    
    	this.profilePage=ProfilePage();
    	this.profilePage.init();
    	
    	this.registerPage=RegisterPage();
    	this.registerPage.init();
    },       
};
