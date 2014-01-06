function BadgesSynchronize(sock){	
	var _this_ = this;
	this.socket = sock;	
	
	this.socket.on('syncBadgesResultData',resultData);
	this.socket.on('syncBadgesCheckResult',checkResult);
	
	
	/**
	 * result Data 
	 */
	
	function resultData(data) {
		CORE.LOG.addInfo("BADGES_SYNCH:resultData");
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
	  			playerID:gameData.data.player.playerID
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
		  		playerID:id
			}
	  	);
	}

	return {
		check:check	
	}	
}




