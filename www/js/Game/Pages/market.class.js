/*
 * Project: SocialSpeedway
 * Author: Krzysztof Owsiany 
 */
function MarketPage(){
	function init(){
		update();
	}	
	
	
	function update() {	
		var category_sell = $("#sell_category");
		var category_buy = $("#buy_category");

		category_buy.children().remove();
		category_sell.children().remove();
		for (var i=0;i<gameData.data.game.badgesList.length;i++) {			
			category_sell.append(
				"<option value='"
				+ parseInt(gameData.data.game.badgesList[i].ba_id)
				+ "'>"
				+ gameData.data.game.badgesList[i].ba_name
				+ "</option>"
			);
			
			category_buy.append(
					"<option value='"
					+ parseInt(gameData.data.game.badgesList[i].ba_id)
					+ "'>"
					+ gameData.data.game.badgesList[i].ba_name
					+ "</option>"
				);
			
		}
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