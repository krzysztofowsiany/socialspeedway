function ProfileCommunication(URL, resultFunction)
{	
	var _this_ = this;
	this.resultFunction = resultFunction;
	this.socket = io.connect(URL);	
	this.socket.on('profile_result',result);
	this.socket.on('resultData',resultData);
	
	this.socket.on('saveContactResult',saveContactResult);
	this.socket.on('saveProfileResult',saveProfileResult);
	
	function result (data)	{
		if (data['profile_result'] == '0')
			alert('Profil zapisany');
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
		_this_.socket.emit('saveProfile',
			{ 		  		
		  		sex:gameData.playerData.sex,
		  		age:gameData.playerData.age,
		  		name:gameData.playerData.name,
		  		surname:gameData.playerData.surname,
		  		avatar:"",		  	
		  		
		  		
		  		playerID:gameData.playerID
			}
	  	);

	}
	
	function saveContact(){	
		_this_.socket.emit('saveContact',
			{ 
		  		email: gameData.playerContact.email,
		  		mobile:gameData.playerContact.mobile,
		  		
		  		playerID:gameData.playerID
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




