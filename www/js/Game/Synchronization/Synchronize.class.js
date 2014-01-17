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
			console.log("push profile");
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
			console.log("push skills");
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
			console.log("push training");
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
			console.log("push badges");
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
			console.log("push achievements");
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
			console.log("profile check");
			this.profileSynchronize.check();
		}
		catch(except) {
			CORE.LOG.addError("SYNCHRONIZE:"+except);
		}
		
		try {		
			console.log("skills check");
			this.skillsSynchronize.check();
		}
		catch(except) {
			CORE.LOG.addError("SYNCHRONIZE:"+except);
		}
		
		try {
			console.log("training check");
			this.trainingSynchronize.check();
		}
		catch(except) {
			CORE.LOG.addError("SYNCHRONIZE:"+except);
		}
		
		try {
			console.log("badges check");
			this.badgesSynchronize.check();
		}
		catch(except) {
			CORE.LOG.addError("SYNCHRONIZE:"+except);
		}
		
		try {
			console.log("achievements check");
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