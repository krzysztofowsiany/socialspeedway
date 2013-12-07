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
    onClickSaveContact:function()   {   
    	ProgressBar.create();
    	page.setProfileContactFromValues();
    	
    	if (gameData.playerID>0) {
    		var p = new ProfileCommunication(CORE.SERVER_URL);
    		p.saveContact();    		
    	}
    	
    	ProgressBar.destroy();
    },
    
    isValidEmailAddress:function (emailAddress) {
        var pattern = new RegExp(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/);
        return pattern.test(emailAddress);
    },
    
    onClickSaveProfile:function()   {
    	ProgressBar.create();
    	page.setProfilePlayerDataFromValues();
    	
    	if (gameData.playerID>0) {
    		var p = new ProfileCommunication(CORE.SERVER_URL);
       		p.saveProfile();
       		
    	}
    	
    	ProgressBar.destroy();    	
    },
    /*
     * setProfilePlayerDataFromValues
     * set gameData from entered in html elements values of userdata
     */
    setProfilePlayerDataFromValues:function(){
    	gameData.setProfilePlayerData({
			name:$("#name").val(), 
			surname:$("#surname").val(),
			age:$("#age").val(),
			sex:$("#sex").val()
		});
    },
    /*
     * setProfileContactFromValues
     * set gameData from entered in html elements values of contact
     */
    setProfileContactFromValues:function(){
    	gameData.setProfileContact({
			email:$("#email").val(), 
			mobile:$("#mobile").val()
			});
    	
    },
    /*
     * setData
     * set data to HTML elements from JSON format data (database)
     * @params data
     */    
    setData:function(data){    	
    	$("#name").val(data.profile.name);
    	$("#surname").val(data.profile.surname);
    	$("#age").val(data.profile.age);
    	$("#sex").val(data.profile.sex);    	
    	page.setProfilePlayerDataFromValues();
    	
    	$("#email").val(data.profile.email);
    	$("#mobile").val(data.profile.mobile);
    	page.setProfileContactFromValues();
    	
    	ProgressBar.destroy();
    },
    /*
     * setDataFromLocalStorage
     * get data from localstorage by gameData,
     * and set HTML elements 
     */
    setDataFromLocalStorage:function() {
    	//console.log(gameData.playerData);
    	$("#name").val(gameData.playerData.name);
    	$("#surname").val(gameData.playerData.surname);
    	$("#age").val(gameData.playerData.age);
    	$("#sex").val(gameData.playerData.sex);    	
    	    	
    	$("#email").val(gameData.playerContact.email);
    	$("#mobile").val(gameData.playerContact.mobile);
    	ProgressBar.destroy();
    },
    
    /*
     * loadData
     * load data from database if player are registered
     */
    loadData:function(){
    	ProgressBar.create();
    	if (gameData.playerID>0) {    		
    		var p = new ProfileCommunication(CORE.SERVER_URL, page.setData);    		
    		p.getData(gameData.playerID);
    		
    	}
    	else page.setDataFromLocalStorage();      	    	    	
    },
        
    // deviceready Event Handler
    onDeviceReady: function() {    	
    	$(".saveProfile").on('click', page.onClickSaveProfile);
    	$(".saveContact").on('click', page.onClickSaveContact); 
    	
    	page.loadData();
    },       
    
};
