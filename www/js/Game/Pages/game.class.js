/*
 * Project: SocialSpeedway
 * Author: Krzysztof Owsiany 
 */

function GamePage(){
	function init(){    		
    	$(".logout").on('click', onClickLogout);    		
    	$(".register").on('click', onClickRegister);
    	$(".profile").on('click', onClickProfile);
    	$(".achievements").on('click', onClickAchievements);
    	$(".badges").on('click', onClickBadges);
    	$(".training").on('click', onClickTraining);
    	
    	if (gameState.isSigned())
    		signed();
    	else
    		unSigned();
    	
    	//loadProfileData();
	}
	
	function signed(){		
		$(".logout").show();
		$(".register").hide();
		
	}
	
	function unSigned(){
		$(".logout").hide();
		$(".register").show();
	}
    
	
	/*
     * setData
     * set data to HTML elements from JSON format data (database)
     * @params data
     */    
    function setProfileData(skills){
    	gameData.data.player.skills.strength = parseInt(skills.strength);
    	gameData.data.player.skills.speed = parseInt(skills.speed);
    	gameData.data.player.skills.agility = parseInt(skills.agility);
    	gameData.data.player.skills.endurance =parseInt(skills.endurance);    	
    	gameData.saveLocal();
    	CORE.LOG.addInfo("GAME_PAGE:setProfileData");    	    	
    }
	/*
	function loadGameProfileData(){    	
    	if (gameData.data.player.playerID>0) {
    		CORE.LOG.addInfo("GAME_PAGE:loadProfileData");
    		var p = new GameProfileCommunication(CORE.SOCKET, setProfileData);    		
    		p.getSkills(gameData.data.player.playerID);    		
    	}  	    	    	
    }
	
	function saveGameProfileData(){    	
    	if (gameData.data.player.playerID>0) {
    		CORE.LOG.addInfo("GAME_PAGE:saveProfileData");
    		var p = new GameProfileCommunication(CORE.SOCKET, setProfileData);    		
    		p.saveSkills(gameData.data.player.playerID);    		
    	}  	    	    	
    }
      */       
	
    //navigation
    function onClickRegister()    {    	
    //	event.preventDefault();
    	CORE.LOG.addInfo("GAME_PAGE:onClickRegister");
    	$.mobile.changePage("#register_page", "flip");
    	
    }
    
    function onClickProfile()    {    	
    	page.profilePage.loadData();
    	event.preventDefault();
    	
    	CORE.LOG.addInfo("GAME_PAGE:onClickProfile");
    	$.mobile.changePage("#profile_page", "flip");
    	
    }
    
    function onClickAchievements()    {
    	CORE.LOG.addInfo("GAME_PAGE:onClicAchievements");
    	$.mobile.changePage("#achievements_page", "flip");
    	
    }
    
    function onClickBadges()    {    	
    	CORE.LOG.addInfo("GAME_PAGE:onClickBadges");
    	$.mobile.changePage("#badges_page", "flip");
    	
    	
    }
    
    function onClickTraining()    {  
    	page.trainingPage.resumeTraining();
    	CORE.LOG.addInfo("GAME_PAGE:onClickTraining");
    	$.mobile.changePage("#training_page", "flip");
    	
    }
    
    function onClickLogout() {
    	gameState.setPlayerState( PLAYERSTATE.UNSIGNED);
    	gameState.setGameState(GAMESTATE.NEW);
    	gameData.data.player.playerID = 0;
    	CORE.LOG.addInfo("GAME_PAGE:onClickLogout");
    	$.mobile.changePage("#start_page", "flip");
    	
    }
    
    return {
    	init:init,
    	signed:signed,
    	unSigned:unSigned,
    	//loadGameProfileData:loadGameProfileData,
    	//saveGameProfileData:saveGameProfileData
    };
}
