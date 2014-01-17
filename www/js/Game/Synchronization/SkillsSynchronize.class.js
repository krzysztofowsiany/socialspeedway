function SkillsSynchronize(sock){	
	var _this_ = this;
	this.socket = sock;	
	
	this.socket.on('syncSkillsResultData',resultData);
	this.socket.on('syncSkillsCheckResult',checkResult);
	
	
	/**
	 * result Data 
	 */
	
	function resultData(skills) {
		CORE.LOG.addInfo("SKILLS_SYNCH:resultData");
		
		gameData.data.player.skills.strength = parseInt(skills.strength);
		gameData.data.player.skills.speed = parseInt(skills.speed);
		gameData.data.player.skills.agility = parseInt(skills.agility);
		gameData.data.player.skills.endurance = parseInt(skills.endurance);		
		
		gameData.data.synch.skills = Date.parse(skills.skills);
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
		CORE.LOG.addInfo("SKILLS_SYNCH:check");
		_this_.socket.emit('checkSynch',{
				what:'skills',
				date:gameData.data.synch.skills,	  		
	  			playerID:gameData.data.player.playerID
			}
		);
	}
	
	/**
	 * set data to server
	 */
	function setData() {
		CORE.LOG.addInfo("SKILLS_SYNCH:setData");
		_this_.socket.emit('skillsSetData',{
				skills:gameData.data.player.skills,	  		
	  			playerID:gameData.data.player.playerID,
	  			date:gameData.data.synch.skills
			}
		);
	}
	
	/**
	 * get data from server
	 */
	function getData()	{	
		CORE.LOG.addInfo("SKILLS_SYNCH:getData");
		_this_.socket.emit('skillsGetData',
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




