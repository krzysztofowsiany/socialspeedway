/**
 * 
 */
var ProgressBar = {
	//vars
		div:undefined,
	
		
		//method
	create:function(){
		if (this.div != undefined)
			this.destroy();
		
		this.div = $("<div class='progresbar'>");
		$("body").prepend(this.div);    
		
	},
	
	destroy:function() {
		if (this.div!=undefined) {
			this.div.remove();
			this.div = undefined;
		}
	}
		
		
		
};