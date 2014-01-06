function ProfileSynchronize(sock){	
	var _this_ = this;
	this.socket = sock;	
	
	this.socket.on('syncProfileResultData',resultData);
	this.socket.on('syncProfileCheckResult',checkResult);
	
	
	/**
	 * result Data 
	 */
	
	function resultData(profile) {
		CORE.LOG.addInfo("PROFILE_SYNCH:resultData");
		console.log(profile);
		gameData.data.player.profile.sex = parseInt(profile.sex);
		gameData.data.player.profile.name = profile.name;
		gameData.data.player.profile.surname = profile.surname;
		gameData.data.player.profile.age = parseInt(profile.age);
		gameData.data.player.profile.mobile = profile.mobile;
		
		gameData.data.synch.profile = Date.parse(profile.profile);
		gameData.saveLocal();
	}
	
	
	/**
	 * Check synch result
	 */		
	function checkResult(result)	{		
		switch (parseInt(result)) {
			case 0:break; //nothing to do
			case 1: getData(); break; //getData
			case -1: setData(); break; //setData	
		}		
	}
	
	/**
	 * synchronization direction and requiare
	 */	
	function check() {
		CORE.LOG.addInfo("PROFILE_SYNCH:check");
		_this_.socket.emit('checkSynch',{
				what:'profile',
				date:gameData.data.synch.profile,	  		
	  			playerID:gameData.data.player.playerID
			}
		);
	}
	
	/**
	 * set data to server
	 */
	function setData() {
		CORE.LOG.addInfo("PROFILE_SYNCH:setData");
		_this_.socket.emit('profileSetData',{
				profile:gameData.data.player.profile,	  		
	  			playerID:gameData.data.player.playerID,
	  			date:gameData.data.synch.profile,
			}
		);
	}
	
	/**
	 * get data from server
	 */
	function getData()	{	
		CORE.LOG.addInfo("PROFILE_SYNCH:getData");
		_this_.socket.emit('profileGetData',
			{ 		
		  		playerID:gameData.data.player.playerID
			}
	  	);
	}
	

	return {
		check:check	
	}	
}




