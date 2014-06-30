/*
 * Project: SocialSpeedway
 * Author: Krzysztof Owsiany 
 */
function RankPage(){
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
		$.mobile.changePage("#rank_page", "none");
	    gameState.gamePage = GAMEPAGE.RANK;
	    page.currentPage = page.rankPage;
	}
	
	return {
		init:init,
		update:update,
		backPage:backPage,
    	thisPage:thisPage,
	};	
	
}