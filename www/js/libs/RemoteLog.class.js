var RemoteLog=RemoteLog||function(id, version){
	var INFO = 30,
		WARNING = 20,
		ERROR = 10,
		CRITICAL=0,
		
		ID = id,
		ver = version;
		
	
	this.URL="";
	
	this.addError = function(message) {
		this.addLog(message, ERROR);
	}
	

	this.addCritical = function(message) {
		this.addLog(message, CRITICAL);
	}
	

	this.addInfo = function(message) {
		this.addLog(message, INFO);
	}
	
	this.addWarning = function(message) {
		this.addLog(message, WARNING);
	}
	
	this.addLog = function(message, msg_level)	{
		//jquery
		$.post( this.URL, { id: ID, version: ver,msg:message, msg_l:msg_level } );		
	}	
}