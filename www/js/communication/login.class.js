function LoginCommunication(URL, ok, fail)
{	
	var _this_ = this;
	this.okFunction = ok;
	this.failFunction = fail;
	this.socket = io.connect(URL);	
	this.socket.on('login_result',result);


	function result(data)	{
		if (data['login_result'] > 0)	{
			alert('Logowanie ok');
			_this_.okFunction();
		}
		else {
			alert('logowanie błedne');
			_this_.failFunction();
		}
	}

	function login(n, p) {
		_this_ .socket.emit('login',
			{ 
		  		name: n,
		  		password:CryptoJS.MD5(p).toString(CryptoJS.enc.Hex)		  		
			}
	  	);		

	}
	
	
	return  {
		login:login
	}
}


