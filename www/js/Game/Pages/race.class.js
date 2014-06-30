/*
 * Project: SocialSpeedway
 * Author: Krzysztof Owsiany 
 */
function RacePage(){
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
		$.mobile.changePage("#race_page", "none");
	    gameState.gamePage = GAMEPAGE.RACE;
	    page.currentPage = page.racePage;
	}
	
	return {
		init:init,
		update:update,
		backPage:backPage,
    	thisPage:thisPage,
	};	
	
}