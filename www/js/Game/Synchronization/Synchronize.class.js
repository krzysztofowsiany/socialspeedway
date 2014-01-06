function Synchronize(){	
	function init(sock) {
		this.profileSynchronize = new ProfileSynchronize(sock);
		this.skillsSynchronize = new SkillsSynchronize(sock);
		this.trainingSynchronize = new TrainingSynchronize(sock);
		this.badgesSynchronize = new BadgesSynchronize(sock);
		this.achievementsSynchronize = new AchievementsSynchronize(sock);
	}
	
	
	/**
	 * Push profile 
	 */
	function pushProfile() {
		CORE.LOG.addInfo("SYNCHRONIZE:pushProfile");
		try {
			this.profileSynchronize.push();
		}
		catch(except) {
			CORE.LOG.addError("SYNCHRONIZE:pushProfile("+except+")");
		}
	}
	
	/**
	 * Push skills
	 */
	function pushSkills() {
		CORE.LOG.addInfo("SYNCHRONIZE:pushSkills");
		try {
			this.skillsSynchronize.push();
		}
		catch(except) {
			CORE.LOG.addError("SYNCHRONIZE:pushSkills("+except+")");
		}
	}
	
	/**
	 * Push training 
	 */
	function pushTraining() {
		CORE.LOG.addInfo("SYNCHRONIZE:pushTraining");
		try {
			this.trainingSynchronize.push();
		}
		catch(except) {
			CORE.LOG.addError("SYNCHRONIZE:pushTraining("+except+")");
		}
	}
	
	/**
	 * Push badges 
	 */
	function pushBadges() {
		CORE.LOG.addInfo("SYNCHRONIZE:pushBadges");
		try {
			this.badgesSynchronize.push();
		}
		catch(except) {
			CORE.LOG.addError("SYNCHRONIZE:pushBadges("+except+")");
		}
	}
	
	/**
	 * Push achievements
	 */
	function pushAchievements() {
		CORE.LOG.addInfo("SYNCHRONIZE:pushAchievements");
		try {
			this.achievementsSynchronize.push();
		}
		catch(except) {
			CORE.LOG.addError("SYNCHRONIZE:pushAchievements("+except+")");
		}
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
			this.skillsSynchronize.check();
		}
		catch(except) {
			CORE.LOG.addError("SYNCHRONIZE:"+except);
		}
		
		try {
			this.trainingSynchronize.check();
		}
		catch(except) {
			CORE.LOG.addError("SYNCHRONIZE:"+except);
		}
		
		try {
			this.badgesSynchronize.check();
		}
		catch(except) {
			CORE.LOG.addError("SYNCHRONIZE:"+except);
		}
		
		try {
			this.achievementsSynchronize.check();
		}
		catch(except) {
			CORE.LOG.addError("SYNCHRONIZE:"+except);
		}
	}
	
	return {
		pushProfile:pushProfile,
		pushSkills:pushSkills,
		pushTraining:pushTraining,
		pushBadges:pushBadges,
		pushAchievements:pushAchievements,
		
		synchronize:synchronize,
		init:init,
	}	
}