function BadgesSynchronize(sock){	
	var _this_ = this;
	this.socket = sock;	
	
	this.socket.on('syncBadgesResultData',resultData);
	this.socket.on('syncBadgesCheckResult',checkResult);
	
	//get achievements
	this.socket.on('badgesList', badgesList);
					
	
	/**
	 * badgesList
	 */
	function badgesList(list) {
		CORE.LOG.addInfo("BADGES_SYNCH:badgetsList");
		console.log(list);
		gameData.data.game.badgesList = list;
		//gameData.data.synch.achievements = Date.parse(achievements.date.achievements);
		
		gameData.saveLocal();
	}
	

	/**
	 * get badges list
	 * getBadgesList
	 */	
	function getBadgesList()	{	
		CORE.LOG.addInfo("BADGES_SYNCH:getBadgesList");
		_this_.socket.emit('getBadgesList',
			{ 		
				//playerID:gameData.data.player.playerID
			}
	  	);
	}
	
	
	/**
	 * result Data 
	 */
	
	function resultData(badges) {
		CORE.LOG.addInfo("BADGES_SYNCH:resultData");
		console.log(badges);		
		
		gameData.data.player.badges = badges.badges;	
		gameData.data.synch.badges = Date.parse(badges.date.badges);
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
		CORE.LOG.addInfo("BADGES_SYNCH:check");
		_this_.socket.emit('checkSynch',{
				what:'badges',
				date:gameData.data.synch.badges,	  		
	  			playerID:gameData.data.player.playerID
			}
		);
	}
	
	/**
	 * set data to server
	 */
	function setData() {
		CORE.LOG.addInfo("BADGES_SYNCH:setData");
		_this_.socket.emit('badgesSetData',{
				badges:gameData.data.player.badges,	  		
	  			playerID:gameData.data.player.playerID,
	  			date:gameData.data.synch.badges,
			}
		);
	}
	
	/**
	 * get data from server
	 */
	function getData()	{	
		CORE.LOG.addInfo("BADGES_SYNCH:getData");
		_this_.socket.emit('badgesGetData',
			{ 		
				playerID:gameData.data.player.playerID
			}
	  	);
	}

	return {
		check:check,		
		push:setData,	
		getBadgesList:getBadgesList,
	}	
}




