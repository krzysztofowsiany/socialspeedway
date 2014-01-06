/*
 * Project: SocialSpeedway
 * Author: Krzysztof Owsiany 
 */

var gameData = {
	synchronize:undefined,
	data:undefined,
	date:undefined,
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
	},
	
	sync:function() {
		this.synchronize.synchronize();
	},
	
	
	updateTime:function() {
		this.date = new Date().getTime();
	}
	
};


gameData.init();
	