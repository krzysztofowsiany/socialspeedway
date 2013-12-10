function RegisterCommunication(sock, ok, fail){	
	var _this_ = this;
	this.okFunction = ok;
	this.failFunction = fail;
	
	this.socket = sock;	
	this.socket.on('register_result', result);
	
	function result (data){
		if (data['register_result'] == '0')
			_this_.failFunction();
		else
			_this_.okFunction();
	}
	
	function register(n, p){ 
		_this_.socket.emit('register',
			{ 
		  		name: n,
		  		password:CryptoJS.MD5(p).toString(CryptoJS.enc.Hex),
		  		//profile
		  		playerName:gameData.playerData.name,
		  		playerSurname:gameData.playerData.surname,
		  		playerAge:gameData.playerData.age,
		  		playerSex:gameData.playerData.sex,
		  		//profileContact
		  		playerEmail:gameData.playerContact.email,
		  		playerMobile:gameData.playerContact.mobile		  		
			}
	  	);

	}
	
	
	return {
		register:register
	}
}



