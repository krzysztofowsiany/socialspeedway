/*
 * Project: SocialSpeedway
 * Author: Krzysztof Owsiany 
 */
function AchievementsPage(){
	function init(){
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
			var achievements = $("#achievements_page");

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
	
	
	return {
		init:init,
		update:update,
	};	
	
}