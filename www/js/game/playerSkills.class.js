function PlayerSkillsData(){
	var speed=0,
		agility=0,
		strength=0,
		endurance=0;
	
	
	
	function updateSpeed(value){
		speed+=value;
	}
	
	function updateSpeed(value){
		agility+=value;
	}
	
	function updateSpeed(value){
		strength+=value;
	}
	
	function updateSpeed(value){
		endurance+=value;
	}
	
	function save(){
		
	}
	
	return {
		updateSpeed:updateSpeed,
		updateEndurance:updateEndurance,
		updateStrength:updateStrength,
		updateAgility:updateAgility,
		save:save,
		
	};
}