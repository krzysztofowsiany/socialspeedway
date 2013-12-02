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
    		$(document).on('deviceready', page.onDeviceReady, false);
    },    
    bindEvents: function() {    	
    	//$(document).on('load', startpage.onDeviceReady, false);
		this.onDeviceReady();
    },
    
    
    //navigation
    onClickSaveContact:function()
    {    	
    	page.setProfileContactFromValues();
    	
    	if (gameData.playerID>0) {
    		var p = new ProfileCommunication(CORE.SERVER_URL);
    		p.save_contact(gameData);
    	}
    	
    },
    isValidEmailAddress:function (emailAddress) {
        var pattern = new RegExp(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/);
        return pattern.test(emailAddress);
    },
    
    onClickSaveProfile:function()
    {    	
    	page.setProfilePlayerDataFromValues();
    	
    	if (gameData.playerID>0) {
    		var p = new ProfileCommunication(CORE.SERVER_URL);
       		p.save_profile(gameData);
    	}
    	
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
    	$("#name").val("test");
    	$("#surname").val("test");
    	$("#age").val("1");
    	$("#sex").val("1");    	
    	page.setProfilePlayerDataFromValues();
    	
    	$("#email").val("sadf");
    	$("#mobile").val("2");
    	page.setProfileContactFromValues();  	
    },
    /*
     * setDataFromLocalStorage
     * get data from localstorage by gameData,
     * and set HTML elements 
     */
    setDataFromLocalStorage:function() {
    	console.log(gameData.playerData);
    	$("#name").val(gameData.playerData.name);
    	$("#surname").val(gameData.playerData.surname);
    	$("#age").val(gameData.playerData.age);
    	$("#sex").val(gameData.playerData.sex);    	
    	    	
    	$("#email").val(gameData.playerContact.email);
    	$("#mobile").val(gameData.playerContact.mobile);    	  
    },
    
    /*
     * loadData
     * load data from database if player are registered
     */
    loadData:function(){
    	if (gameData.playerID>0) {
    		var p = new ProfileCommunication(CORE.SERVER_URL);
    		p.getData(gameData.playerID, page.setData);
    	}
    	else page.setDataFromLocalStorage();      	    	    	
    },
        
    // deviceready Event Handler
    onDeviceReady: function() {
    	$(".save_profile").on('click', page.onClickSaveProfile);
    	$(".save_contact").on('click', page.onClickSaveContact); 
    	this.loadData();
    },       
    
};
