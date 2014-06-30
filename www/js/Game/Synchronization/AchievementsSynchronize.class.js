function AchievementsSynchronize(sock){	
	var _this_ = this;
	this.socket = sock;	
	
	this.socket.on('syncAchievementsResultData',resultData);
	this.socket.on('syncAchievementsCheckResult',checkResult);
	
	//get achievements
	this.socket.on('achievementsList', achievementsList);
					
	
	/**
	 * achievementsList
	 */
	function achievementsList(list) {
		CORE.LOG.addInfo("ACHIEVEMENTS_LIST:achievementsList");
		console.log(list);
		gameData.data.game.achievementsList = list;
		//gameData.data.synch.achievements = Date.parse(achievements.date.achievements);
		
		gameData.saveLocal();
	}
	

	/**
	 * get achievements list
	 * getAchievementList
	 */	
	function getAchievementsList()	{	
		CORE.LOG.addInfo("ACHIEVEMENTS_SYNCH:getAchievementsList");
		_this_.socket.emit('getAchievementsList',
			{ 		
				//playerID:gameData.data.player.playerID
			}
	  	);
	}
	
	
	
	/**
	 * result Data 
	 */
	
	function resultData(achievements) {
		CORE.LOG.addInfo("ACHIEVEMENTS_SYNCH:resultData");
		
		
		gameData.data.player.achievements = achievements.achievements;
		
		
		gameData.data.synch.achievements = Date.parse(achievements.date.achievements);
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
	  			playerID:gameData.data.player.playerID,
	  			date:gameData.data.synch.achievements,
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
				playerID:gameData.data.player.playerID
			}
	  	);
	}

	return {
		check:check,		
		push:setData,
		getAchievementsList:getAchievementsList,
	}	
}




