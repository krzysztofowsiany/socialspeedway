/*
 * Project: SocialSpeedway
 * Author: Krzysztof Owsiany 
 */

var gameData = {
	data:undefined,
	init:function(){
		var tmp = localStorage.getItem("data");
		
		if (tmp === null) {
			this.data = dataScheme;
		}
		else
			this.data = JSON.parse(tmp);		
	},	

	saveLocal:function() {		
		localStorage.setItem("data", JSON.stringify(this.data) );
	},		
	
	newGame:function() {		
		this.data=dataScheme;
		this.saveLocal();
	}
	
};


gameData.init();
	