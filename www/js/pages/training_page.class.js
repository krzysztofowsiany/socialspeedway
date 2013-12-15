/*alert('starttraining');
 * Project: SocialSpeedwayalert('starttraining');
 * Author: Krzysztof Owsiany 
 */

function TrainingPage() {
	function init(){
		$(".stopTraining").on('click', onStopTraining);
    	$(".startTraining").on('click', onStartTraining);
    			
	}
    
	function onStopTraining(){
		alert('stoptraining');	
	}
	
	function onStartTraining(){
		alert('starttraining');
	}
	
	return {
		init:init		
	};
    
}
