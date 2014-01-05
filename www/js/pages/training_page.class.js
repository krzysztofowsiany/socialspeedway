/*alert('starttraining');
 * Project: SocialSpeedwayalert('starttraining');
 * Author: Krzysztof Owsiany 
 */

function TrainingPage() {
	var training,params;
	function init(){
		$(".stopTraining").on('click', onStopTraining);
    	$(".startTraining").on('click', onStartTraining);
    	
				
    	onResumeTraining();
	}
	
	/*'training':{
		  'endTime':undefined,
		  'trainingType':0,
		  'trainingTime':0,
		  'trainingStart':0
	  },
    */
	
	function setTrainingVisiblity(){
		if (gameData.data.player.training.trainingType == -1)
    		trainingOff();
    	else
    		trainingOn();
	}
	
	function trainingOn(){
		$("#training_in_progress").show();
		$("#new_training").hide();		
		
		
	}
	
	function trainingTimer(){
		if (gameData.data.player.training.trainingType >-1) {
			if ((gameData.data.player.training.endTime - new Date().getTime()) >0){			
				setTimeout(function(){trainingTimer()},1000);
				showActualTraining();
				
			}
			else
				{
					updateSkill();
				}
		}
	}
	
	function trainingOff(){
		$("#training_in_progress").hide();
		$("#new_training").show();
	}
	
	function updateSkill(){		
		switch (parseInt(gameData.data.player.training.trainingType)) {
		//strength
		case 0:
			gameData.data.player.skills.strength+=params.exp;
			break;
			
		//agility
		case 1:
			gameData.data.player.skills.agility+=params.exp;
			break;
			
		//speed
		case 2:
			gameData.data.player.skills.speed+=params.exp;
			
			break;
			
		//endurance
		case 3:
			gameData.data.player.skills.endurance+=params.exp;
			
			break;
		
		}
		
		CORE.showDialog("Training Done");
		
		onStopTraining();
	}
	
	function onStopTraining(){
		gameData.data.player.training.trainingType=-1;
		gameData.saveLocal();
		
		
		//save remote data
		page.gamePage.saveGameProfileData();
		
		setTrainingVisiblity();			
	}
	
	function showActualTraining(){
		
		
		
		$("#trainingType").html(training.name);

		$("#trainingBonus").html('+'+params.exp);

		$("#trainingLeft").html(CORE.getTimeInLogicView(
				gameData.data.player.training.endTime - new Date().getTime()
				));		
	}
	
	function setSkills(){
		$("#strengthValue").html(gameData.data.player.skills.strength);
		$("#agilityValue").html(gameData.data.player.skills.agility);
		$("#speedValue").html(gameData.data.player.skills.speed);
		$("#enduranceValue").html(gameData.data.player.skills.endurance);
	}
	
	function onResumeTraining(){		
		setTrainingVisiblity();
		setSkills();
		if (gameData.data.player.training.trainingType>-1) {
			getTrainingParams();
			
			trainingTimer();
			//	showActualTraining();
		}
		
		
		
	}
	
	function getTrainingParams(){
		training = trainingParams[gameData.data.player.training.trainingType];
		params = training.params[gameData.data.player.training.trainingLevel];		
	}
	
	function onStartTraining(){
		gameData.data.player.training.trainingType=parseInt($('input[name=trainingType]:radio:checked').val());
		gameData.data.player.training.trainingLevel=parseInt($('input[name=trainingLevel]:radio:checked').val());
		
		
		getTrainingParams();
		
		gameData.data.player.training.endTime = new Date().getTime() + 60*60*1000 * params.time;
		gameData.saveLocal();
		trainingTimer();
	//	showActualTraining();
		setTrainingVisiblity();		
	}
	
	return {
		init:init,
		resumeTraining:onResumeTraining
	};
    
}
