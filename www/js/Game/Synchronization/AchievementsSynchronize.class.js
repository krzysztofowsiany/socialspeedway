function AchievementsSynchronize(sock){	
	var _this_ = this;
	this.socket = sock;	
	
	this.socket.on('syncAchievementsResultData',resultData);
	this.socket.on('syncAchievementsCheckResult',checkResult);
	
	
	/**
	 * result Data 
	 */
	
	function resultData(data) {
		CORE.LOG.addInfo("ACHIEVEMENTS_SYNCH:resultData");
	}
	
	
	/**
	 * Check synch result
	 */		
	function checkResult(result)	{
		switch (result) {
		case 0:break; //nothing to do
		case 1: getData(); break; //getData
		case -1: setData(); break; //setData		
		}
		
	}
	
	/**
	 * synchronization direction and requiare
	 */	
	function check() {
		CORE.LOG.addInfo("ACHIEVEMENTS_SYNCH:check");
		_this_.socket.emit('checkSynch',{
				what:'achievements',
				date:gameData.data.synch.achievements,	  		
	  			playerID:gameData.data.player.playerID
			}
		);
	}
	
	/**
	 * set data to server
	 */
	function setData() {
		CORE.LOG.addInfo("ACHIEVEMENTS_SYNCH:setData");
		_this_.socket.emit('achievementsSetData',{
			achievements:gameData.data.player.achievements,	  		
	  			playerID:gameData.data.player.playerID
			}
		);
	}
	
	/**
	 * get data from server
	 */
	function getData()	{	
		CORE.LOG.addInfo("ACHIEVEMENTS_SYNCH:getData");
		_this_.socket.emit('achievementsGetData',
			{ 		
		  		playerID:id
			}
	  	);
	}

	return {
		check:check	
	}	
}



