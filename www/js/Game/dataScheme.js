var dataScheme = {
  'player': {	  
	  'playerID':undefined,
	  'state':0,	  
	  'profile':{
		  'name':'',
		  'surname':'',
		  'age':0,
		  'sex':0,
		  'mobile':'',
	  }, 
	  'skills': {
		  'speed':0,
		  'agility':0,
		  'endurance':0,
		  'strength':0,
		  'rest':0
	  },
	  'training':{
		  'endTime':0,
		  'trainingType':-1,
		  'trainingLevel':0,
		  "cost":0
	  },
	  'achievements':[],
	  'badges':[],
  },
  'game':{
	  'state':0,
	  
	  'achievementsList':[],
	  'badgesList':[],	  
  },
  'synch':{
	  'profile':0,
	  'skills':0,
	  'training':0,
	  'badges':0,
	  'achievements':0,  
  },
  'authenticate':{
	  'lastLogin':'',
	  'lastPassword':''
  }
  
};