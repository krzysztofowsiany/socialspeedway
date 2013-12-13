/*
 * Project: SocialSpeedway
 * Author: Krzysztof Owsiany 
 */

function ProfilePage(){
	function init(){    	
    	$(".saveProfile").on('click', onClickSaveProfile);
    	$(".saveContact").on('click', onClickSaveContact); 
    	
    	loadData();
	}	
    
    //navigation
    function onClickSaveContact()   {    	
    	setProfileContactFromValues();
    	
    	if (gameData.data.player.playerID>0) {
    		var p = new ProfileCommunication(CORE.SOCKET);
    		p.saveContact();    		
    	}
    	else alert("Dane zapisane");    	
    }
    
    function isValidEmailAddress(emailAddress) {
        var pattern = new RegExp(/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/);
        return pattern.test(emailAddress);
    }
    
    function onClickSaveProfile(){    	
    	setProfilePlayerDataFromValues();
    	
    	if (gameData.data.player.playerID>0) {
    		var p = new ProfileCommunication(CORE.SOCKET);
       		p.saveProfile();
       		
    	}
    	else alert("Dane zapisane");
    }
    /*
     * setProfilePlayerDataFromValues
     * set gameData from entered in html elements values of userdata
     */
    function setProfilePlayerDataFromValues(){
    	gameData.data.player.profile.name = $("#name").val();
    	gameData.data.player.profile.surname = $("#surname").val();
    	gameData.data.player.profile.sex = $("#sex").val();
    	gameData.data.player.profile.age = $("#age").val();    
    	gameData.saveLocal();
    }
    /*
     * setProfileContactFromValues
     * set gameData from entered in html elements values of contact
     */
    function setProfileContactFromValues(){
    	gameData.data.player.contact.email=$("#email").val();
    	gameData.data.player.contact.mobile=$("#mobile").val();
    	gameData.saveLocal();
    }
    /*
     * setData
     * set data to HTML elements from JSON format data (database)
     * @params data
     */    
    function setData(data){    	
    	$("#name").val(gameData.data.player.profile.name);
    	$("#surname").val(gameData.data.player.profile.surname);
    	$("#age").val(gameData.data.player.profile.age);
    	$("#sex").val(gameData.data.player.profile.sex);    	
    	setProfilePlayerDataFromValues();
    	
    	$("#email").val(gameData.data.player.contact.email);
    	$("#mobile").val(gameData.data.player.contact.mobile);
    	setProfileContactFromValues();
    	
    }
    
    /*
     * setDataFromLocalStorage
     * get data from localstorage by gameData,
     * and set HTML elements 
     */
    function setDataFromLocalStorage() {    	
    	$("#name").val(gameData.data.player.profile.name);
    	$("#surname").val(gameData.data.player.profile.surname);
    	$("#age").val(gameData.data.player.profile.age);
    	$("#sex").val(gameData.data.player.profile.sex);    	
    	    	
    	$("#email").val(gameData.data.player.contact.email);
    	$("#mobile").val(gameData.data.player.contact.mobile);    	
    }
    
    /*
     * loadData
     * load data from database if player are registered
     */
    function loadData(){    	
    	if (gameData.data.player.playerID>0) {    		
    		var p = new ProfileCommunication(CORE.SOCKET, setData);    		
    		p.getData(gameData.data.player.playerID);    		
    		
    	}
    	else setDataFromLocalStorage();      	    	    	
    }
             
    
    return {
    	init:init,
    	loadData:loadData
    };
}
