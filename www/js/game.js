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
	trainingPage:undefined,
	
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
    	page.gamePage=GamePage();
    	page.gamePage.init();    
    	
    	page.startPage = StartPage();
    	page.startPage.init();   	
    
    	page.profilePage=ProfilePage();
    	page.profilePage.init();
    	
    	page.registerPage=RegisterPage();
    	page.registerPage.init();
    	
    	
    	page.trainingPage=TrainingPage();
    	page.trainingPage.init();
    },       
};
