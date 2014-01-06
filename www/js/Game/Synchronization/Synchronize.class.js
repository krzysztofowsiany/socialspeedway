function Synchronize(){	
	function init(sock) {
		this.profileSynchronize = new ProfileSynchronize(sock);
		this.skillsSynchronize = new SkillsSynchronize(sock);
		this.trainingSynchronize = new TrainingSynchronize(sock);
		this.badgesSynchronize = new BadgesSynchronize(sock);
		this.achievementsSynchronize = new AchievementsSynchronize(sock);
	}
	
	/**
	 * Synchronize data
	 * @params
	 */
	
	function synchronize() {		
		CORE.LOG.addInfo("SYNCHRONIZE:synchronize");
		try {
			this.profileSynchronize.check();
		}
		catch(except) {
			CORE.LOG.addError("SYNCHRONIZE:"+except);
		}
		
		try {		
			//this.skillsSynchronize.check();
		}
		catch(except) {
			CORE.LOG.addError("SYNCHRONIZE:"+except);
		}
		
		try {
			//this.trainingSynchronize.check();
		}
		catch(except) {
			CORE.LOG.addError("SYNCHRONIZE:"+except);
		}
		
		try {
			//this.badgesSynchronize.check();
		}
		catch(except) {
			CORE.LOG.addError("SYNCHRONIZE:"+except);
		}
		
		try {
			//this.achievementsSynchronize.check();
		}
		catch(except) {
			CORE.LOG.addError("SYNCHRONIZE:"+except);
		}
	}
	
	return {
		synchronize:synchronize,
		init:init,
	}	
}