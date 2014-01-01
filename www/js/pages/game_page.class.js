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
	}
	
	function signed(){		
		$(".logout").show();
		$(".register").hide();
	}
	
	function unSigned(){
		$(".logout").hide();
		$(".register").show();
	}
    
    //navigation
    function onClickRegister()    {    	
    	window.location = "#register_page";
    }
    
    function onClickProfile()    {    	
    	page.profilePage.loadData();
    	window.location = "#profile_page";
    }
    
    function onClickAchievements()    {    	
    	window.location = "#achievements_page";
    }
    
    function onClickBadges()    {    	
    	window.location = "#badges_page";
    }
    
    function onClickTraining()    {  
    	page.trainingPage.resumeTraining();
    	window.location = "#training_page";
    }
    
    function onClickLogout() {
    	gameState.setPlayerState( PLAYERSTATE.UNSIGNED);
    	gameState.setGameState(GAMESTATE.NEW);
    	gameData.data.player.playerID = 0;
    	window.location = "#start_page";
    }
    
    return {
    	init:init,
    	signed:signed,
    	unSigned:unSigned
    };
}
