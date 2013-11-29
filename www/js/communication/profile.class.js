function ProfileCommunication(URL)
{	
	this.socket = io.connect(URL);	
	this.socket.on('profile_result',this.result);
}

ProfileCommunication.prototype.result = function(data)
{
	if (data['profile_result'] == '0')
		alert('Profil zapisany');
};

ProfileCommunication.prototype.save = function()
{	
	this.socket.emit('save_profile',
			{ 
		  		email: this.email,
		  		
		  		
			}
	  	);

};


