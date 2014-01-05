function ProfileCommunication(sock, resultFunction){	
	var _this_ = this;
	this.resultFunction = resultFunction;
	this.socket = sock;	
	this.socket.on('profile_result',result);
	this.socket.on('resultData',resultData);
	
	
	this.socket.on('saveProfileResult',saveProfileResult);
	
	function result (data)	{
		
	}
	
	function resultData(data)	{	
		CORE.LOG.addInfo("PROFILE_COMMUNICATION:resultData");
		_this_.resultFunction(data.profile);
	}
	
	
	function saveProfileResult(data) {
		CORE.LOG.addInfo("PROFILE_COMMUNICATION:saveProfileResult");
		alert("Dane zapisane");
	}
	
	function saveProfile()	{
		CORE.LOG.addInfo("PROFILE_COMMUNICATION:saveProfile");
		_this_.socket.emit('saveProfile',{
				profile:gameData.data.player.profile,	  		
	  			playerID:gameData.data.player.playerID
			}
		);
	}
	
	
	function getData(id)	{	
		CORE.LOG.addInfo("PROFILE_COMMUNICATION:getData");
		_this_.socket.emit('getData',
			{ 		
		  		playerID:id
			}
	  	);
	}

	return {
		getData:getData,
		
		saveProfile:saveProfile		
	}	
}




