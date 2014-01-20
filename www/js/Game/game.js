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
	achievementsPage:undefined,
	badgesPage:undefined,
	
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
    	CORE.LOG.addInfo("GAME:bindDeviceEvents");
    	 document.addEventListener("deviceready", page.onDeviceReady, false);
    	//$(document).bind('deviceready', page.onDeviceReady, false);
    },    
    bindEvents: function() {    	
    	//$(document).on('load', startpage.onDeviceReady, false);
    	CORE.LOG.addInfo("GAME:bindEvents");
		this.onDeviceReady();		
    },    
       
    setSizes : function(){
    	var width = $('#start_page').width();
    	var w = (width / 2) - 40;
    	$('div.button').css({'height':w+'px','width':w+'px'});
    	
    	//w = (width / 3);
    	//$('td.achievementItem').css({'height':w+'px','width':w+'px'});
    },
    // deviceready Event Handler
    onDeviceReady: function() {
    	page.setSizes();
    	
    	CORE.SOCKET = io.connect(CORE.SERVER_URL);
    	
    	CORE.LOG.addInfo("GAME:onDeviceReady-init connection");
    	
    	gameData.synchronize = new Synchronize();
    	gameData.synchronize.init(CORE.SOCKET);
    	gameData.synchronize.updateGame();
    	
    	page.gamePage=GamePage();
    	page.gamePage.init();
    	CORE.LOG.addInfo("GAME:onDeviceReady-GamePage");
    	
    	page.startPage = StartPage();
    	page.startPage.init();   	
    	CORE.LOG.addInfo("GAME:onDeviceReady-StartPage");
    
    	page.profilePage=ProfilePage();
    	page.profilePage.init();
    	CORE.LOG.addInfo("GAME:onDeviceReady-ProfilePage");
    	
    	page.registerPage=RegisterPage();
    	page.registerPage.init();
    	CORE.LOG.addInfo("GAME:onDeviceReady-RegisterPage");
    	
    	page.trainingPage=TrainingPage();
    	page.trainingPage.init();
    	CORE.LOG.addInfo("GAME:onDeviceReady-TrainingPage");
    	
    	
    	page.achievementsPage=AchievementsPage();
    	page.achievementsPage.init();
    	CORE.LOG.addInfo("GAME:onDeviceReady-AchievementsPage");
    	
    	
    	page.badgesPage=BadgesPage();
    	page.badgesPage.init();
    	CORE.LOG.addInfo("GAME:onDeviceReady-BadgesPage");
    },       
};
