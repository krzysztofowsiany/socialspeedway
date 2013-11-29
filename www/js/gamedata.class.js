/*
 * Project: SocialSpeedway
 * Author: Krzysztof Owsiany 
 */

function GameData() {
	var logged=false;
	
	function setLogged() {
		logged = true;
	},
		
	function setUnLogged(){
		logged=false;
	}
	
	return {
		isLogged:logged,
		setLogged:setLogged,
		setUnLogged:setUnloged
		
	}
	
};
