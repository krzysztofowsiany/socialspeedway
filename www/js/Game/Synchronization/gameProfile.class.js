function GameProfileCommunication(sock, resultFunction){	
	var _this_ = this;
	this.resultFunction = resultFunction;
	this.socket = sock;	
	
	this.socket.on('resultSkills',resultSkills);		
	this.socket.on('saveProfileResult',saveProfileResult);
	
	
	function resultSkills(data)	{		
		CORE.LOG.addInfo("GAMEPROFILE_COMMUNICATION:resultSkills");
		_this_.resultFunction(data.skills);
	}
		
	function saveProfileResult(data) {
		alert("Dane zapisane");
	}
	
	
	function saveSkills()	{	
		_this_.socket.emit('saveSkills',{
				skills:gameData.data.player.skills,	  		
	  			playerID:gameData.data.player.playerID
			}
		);
	}	
	
	function getSkills(id)	{		
		CORE.LOG.addInfo("GAMEPROFILE_COMMUNICATION:getSkills");
		_this_.socket.emit('getSkills',
			{ 		
		  		playerID:id
			}
	  	);
	}

	return {
		getSkills:getSkills,
		
		saveSkills:saveSkills		
	}	
}
