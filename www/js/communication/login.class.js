function LoginCommunication(sock, ok, fail)
{	
	var _this_ = this;
	this.okFunction = ok;
	this.failFunction = fail;
	this.socket = sock;	
	this.socket.on('login_result',result);


	function result(data)	{
		CORE.LOG.addInfo("LOGIN_COMMUNICATION:result");
		if (data['login_result'] > 0)	{			
			_this_.okFunction(data['login_result']);
		}
		else {
			_this_.failFunction();
		}
	}

	function login(e, p) {
		CORE.LOG.addInfo("LOGIN_COMMUNICATION:login");
		_this_.socket.emit('login',
			{ 
		  		email: e,
		  		password:CryptoJS.MD5(p).toString(CryptoJS.enc.Hex)		  		
			}
	  	);		

	}
	
	
	return  {
		login:login
	}
}


