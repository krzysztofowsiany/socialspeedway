function TrainingSynchronize(sock){	
	var _this_ = this;
	this.socket = sock;	
	
	this.socket.on('syncTrainingResultData',resultData);
	this.socket.on('syncTrainingCheckResult',checkResult);
	
	
	/**
	 * result Data 
	 */
	
	function resultData(training) {
		CORE.LOG.addInfo("TRAINING_SYNCH:resultData");
		//gameData.data.player.skills.endurance = parseInt(training.endurance);		
		
		
		gameData.data.synch.training = Date.parse(training.trainings);
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
		CORE.LOG.addInfo("TRAINING_SYNCH:check");
		_this_.socket.emit('checkSynch',{
				what:'training',
				date:gameData.data.synch.training,	  		
	  			playerID:gameData.data.player.playerID
			}
		);
	}
	
	/**
	 * set data to server
	 */
	function setData() {
		CORE.LOG.addInfo("TRAINING_SYNCH:setData");
		_this_.socket.emit('trainingSetData',{
				training:gameData.data.player.training,	  		
	  			playerID:gameData.data.player.playerID,
	  			date:gameData.data.synch.training,
			}
		);
	}
	
	/**
	 * get data from server
	 */
	function getData()	{	
		CORE.LOG.addInfo("TRAINING_SYNCH:getData");
		_this_.socket.emit('trainingGetData',
			{ 		
				playerID:gameData.data.player.playerID
			}
	  	);
	}

	return {
		check:check,		
		push:setData,	
	}	
}




