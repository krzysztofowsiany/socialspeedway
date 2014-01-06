/*
 * Project: SocialSpeedway
 * Author: Krzysztof Owsiany 
 */

function ProfilePage(){
	function init(){    	
    	$(".saveProfile").on('click', onClickSaveProfile);
    	 
    	
    	//loadData();
	}	
    
    //navigation
    function onClickSaveContact()   { 
    	
    	setProfileContactFromValues();
    	
    	if (gameData.data.player.playerID>0) {
    		var p = new ProfileCommunication(CORE.SOCKET);
    		p.saveContact();    		
    	}
    	else alert("Dane zapisane");    	
    	
    	CORE.LOG.addInfo("PROFILE_PAGE:onClickSaveContact");
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
    	
    	CORE.LOG.addInfo("PROFILE_PAGE:onClickSaveProfile");
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
    	gameData.data.player.profile.mobile = $("#mobile").val();
    	gameData.saveLocal();
    	CORE.LOG.addInfo("PROFILE_PAGE:setProfilePlayerDataFromValues");
    }
    
    /*
     * setData
     * set data to HTML elements from JSON format data (database)
     * @params data
     */    
    function setData(profile){
    	gameData.data.player.profile.name = profile.name;
    	gameData.data.player.profile.surname = profile.surname;
    	gameData.data.player.profile.age = profile.age;
    	gameData.data.player.profile.sex = profile.sex;    	
    	gameData.data.player.profile.mobile = profile.mobile;
    	gameData.saveLocal();
    	CORE.LOG.addInfo("PROFILE_PAGE:setData");
    	setDataFromLocalStorage();    	
    }
    
    /*
     * setDataFromLocalStorage
     * get data from localstorage by gameData,
     * and set HTML elements 
     */
    function setDataFromLocalStorage() {    	
    	CORE.LOG.addInfo("PROFILE_PAGE:setDataFromLocalStorage");
    	$("#name").val(gameData.data.player.profile.name);
    	$("#surname").val(gameData.data.player.profile.surname);
    	$("#age").val(gameData.data.player.profile.age);
    	$("#sex").val(gameData.data.player.profile.sex);
    	$("#mobile").val(gameData.data.player.profile.mobile); 
    	    	    	
    }
    
    /*
     * loadData
     * load data from database if player are registered
     */
    function loadData(){    	
    	if (gameData.data.player.playerID>0) {
    		CORE.LOG.addInfo("PROFILE_PAGE:loadData");
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
