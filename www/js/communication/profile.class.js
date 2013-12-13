function ProfileCommunication(sock, resultFunction){	
	var _this_ = this;
	this.resultFunction = resultFunction;
	this.socket = sock;	
	this.socket.on('profile_result',result);
	this.socket.on('resultData',resultData);
	
	this.socket.on('saveContactResult',saveContactResult);
	this.socket.on('saveProfileResult',saveProfileResult);
	
	function result (data)	{
		
	}
	
	function resultData(data)	{		
		_this_.resultFunction(data);
	}
	
	function saveContactResult(data) {
		alert("Kontakt zapisany");		
	}
	
	function saveProfileResult(data) {
		alert("Dane zapisane");
	}
	
	function saveProfile()	{	
		_this_.socket.emit('saveProfile',{
				profile:gameData.player.profile,	  		
	  			playerID:gameData.player.playerID
			}
		);
	}
	
	function saveContact(){	
		_this_.socket.emit('saveContact',
			{ 
		  		contact: gameData.player.contact,
		  		playerID: gameData.player.playerID
			}
	  	);
	}
	
	function getData(id)	{		
		_this_.socket.emit('getData',
			{ 		
		  		playerID:id
			}
	  	);
	}

	return {
		getData:getData,
		saveContact:saveContact,
		saveProfile:saveProfile		
	}	
}




