/*
 * Project: SocialSpeedway
 * Author: Krzysztof Owsiany 
 */
function MachineParkPage(){
	function init(){
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
	    gameState.gamePage = GAMEPAGE.MACHINE_PARK;
	    page.currentPage = page.machineParkPage;
	}
	
	return {
		init:init,
		update:update,
		backPage:backPage,
    	thisPage:thisPage,
	};	
	
}