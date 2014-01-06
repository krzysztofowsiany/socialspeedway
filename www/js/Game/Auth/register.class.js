function RegisterCommunication(sock, ok, fail) {	
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
	
	function register(e, p){
		_this_.socket.emit('register',
			{ 
		  		email: e,
		  		password:CryptoJS.MD5(p).toString(CryptoJS.enc.Hex),
		  		//profile
		  		profile:gameData.data.player.profile		  		
			}
	  	);
	}	
	
	return {
		register:register
	}
}



