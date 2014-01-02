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
    	event.preventDefault();
    	$.mobile.changePage("#register_page", "flip");
    }
    
    function onClickProfile()    {    	
    	page.profilePage.loadData();
    	event.preventDefault();
    	$.mobile.changePage("#profile_page", "flip");
    }
    
    function onClickAchievements()    {    	
    	$.mobile.changePage("#achievements_page", "flip");
    }
    
    function onClickBadges()    {    	
    	$.mobile.changePage("#badges_page", "flip");
    }
    
    function onClickTraining()    {  
    	page.trainingPage.resumeTraining();
    	$.mobile.changePage("#training_page", "flip");
    }
    
    function onClickLogout() {
    	gameState.setPlayerState( PLAYERSTATE.UNSIGNED);
    	gameState.setGameState(GAMESTATE.NEW);
    	gameData.data.player.playerID = 0;
    	$.mobile.changePage("#start_page", "flip");
    }
    
    return {
    	init:init,
    	signed:signed,
    	unSigned:unSigned
    };
}
