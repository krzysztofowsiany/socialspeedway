/*
 * Project: SocialSpeedway
 * Author: Krzysztof Owsiany 
 */
function AchievementsPage(){
	function init(){
		$("#achievementBack").on('click', function (){page.gamePage.thisPage();});
		update();
	}
	
	function isGrant(id) {
		for (var i = 0;i<gameData.data.player.achievements.length;i++) {
			if (gameData.data.player.achievements[i] == id) {
				return true;
			}
		}
		
		return false;
	}
	
	function update() {		
		if (gameData.data.game.achievementsList.length>0) {
			var achievements = $("#achievements");

			//remove existed rows
			achievements.children().remove();								
			
			var style;
			
			for (var i=0;i<gameData.data.game.achievementsList.length;i++) {
				if (isGrant(parseInt(gameData.data.game.achievementsList[i].a_id)))
					style="achievementItemGrant";
				else				
					style="achievementItem";
				
				achievements.append(
					"<div class='"
					+style
					+"'><span class='achievementItemName'>"
					+gameData.data.game.achievementsList[i].a_name
					+"</span></div>"
				);
				
			}
			
		}
	}
	
	function backPage() {
		$.mobile.changePage("#game_page", "none");	    	
	    gameState.gamePage =GAMEPAGE.GAME;
	    page.currentPage = page.gamePage;
	}
	    
	function thisPage() {
		$.mobile.changePage("#achievements_page", "none");
	    gameState.gamePage =GAMEPAGE.ACHIEVEMENTS;
	    page.currentPage = page.achievementsPage;
	}
	
	return {
		init:init,
		update:update,
		backPage:backPage,
    	thisPage:thisPage,
	};	
	
}