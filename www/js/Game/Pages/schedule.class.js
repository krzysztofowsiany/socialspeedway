/*
 * Project: SocialSpeedway
 * Author: Krzysztof Owsiany 
 */
function SchedulePage(){
	function init(){
		$("#scheduleBack").on('click', function (){page.gamePage.thisPage();});
		update();
	}	
	
	
	function update() {	
		
	}
	
	function backPage() {
		$.mobile.changePage("#game_page", "none");	    	
	    gameState.gamePage =GAMEPAGE.GAME;
	    page.currentPage = page.gamePage;
	}
	    
	function thisPage() {
		$.mobile.changePage("#schedule_page", "none");
	    gameState.gamePage = GAMEPAGE.SCHEDULE;
	    page.currentPage = page.schedulePage;
	}
	
	return {
		init:init,
		update:update,
		backPage:backPage,
    	thisPage:thisPage,
	};	
	
}