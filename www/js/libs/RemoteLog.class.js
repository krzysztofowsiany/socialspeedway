function RemoteLog(id, version){
	this.INFO = 30;
	this.WARNING = 20;
	this.ERROR = 10;
	this.CRITICAL=0;
		
	this.ID = id;
	this.ver = version;
	this.URL="http://localhost:8000/data/";
		
	this.addLog = function(message, msg_level)	{
		var link = "http://remotelog.socialspeedway.com/addGetLog/"+this.ID+"/"+msg_level	+"/"+encodeURIComponent(message);
		$.get( link);					
	};
}

RemoteLog.prototype.addError = function(message) {
		this.addLog(message, this.ERROR);
	};
	

RemoteLog.prototype.addCritical = function(message) {
		this.addLog(message, this.CRITICAL);
	};
	

RemoteLog.prototype.addInfo = function(message) {	
		this.addLog(message, this.INFO);
	};
	
RemoteLog.prototype.addWarning = function(message) {
		this.addLog(message, this.WARNING);
	};

