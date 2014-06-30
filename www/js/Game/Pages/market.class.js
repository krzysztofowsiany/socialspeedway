/*
 * Project: SocialSpeedway
 * Author: Krzysztof Owsiany 
 */
function MarketPage(){
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
		$.mobile.changePage("#market_page", "none");
	    gameState.gamePage = GAMEPAGE.MARKET;
	    page.currentPage = page.marketPage;
	}
	
	return {
		init:init,
		update:update,
		backPage:backPage,
    	thisPage:thisPage,
	};	
	
}