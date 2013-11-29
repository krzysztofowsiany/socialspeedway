function RegisterCommunication(URL)
{	
	this.socket = io.connect(URL);	
	this.socket.on('register_result',this.result);
}

RegisterCommunication.prototype.result = function(data)
{
	if (data['register_result'] == '0')
		alert('Rejestracja nie powiodłą się');
};

RegisterCommunication.prototype.register = function(n, p)
{
	this.socket.emit('register',
			{ 
		  		name: n,
		  		password:CryptoJS.MD5(p).toString(CryptoJS.enc.Hex)
		  		
			}
	  	);

};


