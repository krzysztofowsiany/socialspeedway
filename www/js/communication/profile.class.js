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

ProfileCommunication.prototype.resultData = function(data)
{
	this.resultFunction(data);
};


ProfileCommunication.prototype.save_profile = function(id)
{	
	this.socket.emit('save_profile',
			{ 		  		
		  		sex:this.sex,
		  		age:this.age,
		  		name:this.name,
		  		surname:this.surname,
		  		avatar:this.avatar,		  		
		  		
		  		
		  		playerID:id
			}
	  	);

};


ProfileCommunication.prototype.save_contact = function(id)
{	
	this.socket.emit('save_contact',
			{ 
		  		email: this.email,
		  		mobile:this.mobile,
		  		
		  		playerID:id
			}
	  	);

};


ProfileCommunication.prototype.getData = function(id, resultFunction)
{	
	this.resultFunction = resultFunction;
	this.socket.emit('getData',
			{ 		
		  		playerID:id
			}
	  	);

};


