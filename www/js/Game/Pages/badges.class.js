/*
 * Project: SocialSpeedway
 * Author: Krzysztof Owsiany 
 */
function BadgesPage(){
	function init(){
		update();
	}
	
	function isGrant(id) {
		for (var i = 0;i<gameData.data.player.badges.length;i++) {
			if (gameData.data.player.badges[i] == id) {
				return true;
			}
		}
		
		return false;
	}
	
	function update() {		
		if (gameData.data.game.badgesList.length>0) {
			var badges = $("#badges_page");

			//remove existed rows
			badges.children().remove();			
			
			var style;			
			
			for (var i=0;i<gameData.data.game.badgesList.length;i++) {
				if (isGrant(parseInt(gameData.data.game.badgesList[i].ba_id)))
					style="badgeItemGrant";
				else				
					style="badgeItem";
				
				badges.append(
					"<div class='"
					+style
					+"'><span class='badgeItemName'>"
					+gameData.data.game.badgesList[i].ba_name
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
