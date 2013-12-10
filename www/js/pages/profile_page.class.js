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
    	
    	if (gameData.playerID>0) {
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
    	
    	if (gameData.playerID>0) {
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
    	gameData.setProfilePlayerData({
			name:$("#name").val(), 
			surname:$("#surname").val(),
			age:$("#age").val(),
			sex:$("#sex").val()
		});
    }
    /*
     * setProfileContactFromValues
     * set gameData from entered in html elements values of contact
     */
    function setProfileContactFromValues(){
    	gameData.setProfileContact({
			email:$("#email").val(), 
			mobile:$("#mobile").val()
			});
    	
    }
    /*
     * setData
     * set data to HTML elements from JSON format data (database)
     * @params data
     */    
    function setData(data){    	
    	$("#name").val(data.profile.name);
    	$("#surname").val(data.profile.surname);
    	$("#age").val(data.profile.age);
    	$("#sex").val(data.profile.sex);    	
    	setProfilePlayerDataFromValues();
    	
    	$("#email").val(data.profile.email);
    	$("#mobile").val(data.profile.mobile);
    	setProfileContactFromValues();
    	
    }
    
    /*
     * setDataFromLocalStorage
     * get data from localstorage by gameData,
     * and set HTML elements 
     */
    function setDataFromLocalStorage() {
    	//console.log(gameData.playerData);
    	$("#name").val(gameData.playerData.name);
    	$("#surname").val(gameData.playerData.surname);
    	$("#age").val(gameData.playerData.age);
    	$("#sex").val(gameData.playerData.sex);    	
    	    	
    	$("#email").val(gameData.playerContact.email);
    	$("#mobile").val(gameData.playerContact.mobile);
    	
    }
    
    /*
     * loadData
     * load data from database if player are registered
     */
    function loadData(){    	
    	if (gameData.playerID>0) {    		
    		var p = new ProfileCommunication(CORE.SOCKET, setData);    		
    		p.getData(gameData.playerID);
    		
    	}
    	else setDataFromLocalStorage();      	    	    	
    }
             
    
    return {
    	init:init
    };
}
