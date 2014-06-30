/*
 * Project: SocialSpeedway
 * Author: Krzysztof Owsiany 
 */

function GamePage() {
	function init() {
		$(".logout").on('click', onClickLogout);
		$(".register").on('click', onClickRegister);
		$(".profile").on('click', onClickProfile);
		$(".achievements").on('click', onClickAchievements);
		$(".badges").on('click', onClickBadges);
		$(".training").on('click', onClickTraining);
		
		$(".market").on('click', onClickMarket);
		$(".machine_park").on('click', onClickMachinePark);
		$(".rank").on('click', onClickRank);
		$(".race").on('click', onClickRace);
		$(".schedule").on('click', onClickSchedule);

		if (gameState.isSigned())
			signed();
		else
			unSigned();

		// loadProfileData();
	}

	function signed() {
		$(".logout").show();
		$(".register").hide();

	}

	function unSigned() {
		$(".logout").hide();
		$(".register").show();
	}

	/*
	 * setData set data to HTML elements from JSON format data (database)
	 * @params data
	 */
	function setProfileData(skills) {
		gameData.data.player.skills.strength = parseInt(skills.strength);
		gameData.data.player.skills.speed = parseInt(skills.speed);
		gameData.data.player.skills.agility = parseInt(skills.agility);
		gameData.data.player.skills.endurance = parseInt(skills.endurance);
		gameData.saveLocal();
		CORE.LOG.addInfo("GAME_PAGE:setProfileData");
	}

	function loadGameProfileData() {
		if (gameData.data.player.playerID > 0) {
			CORE.LOG.addInfo("GAME_PAGE:loadProfileData");
			var p = new GameProfileCommunication(CORE.SOCKET, setProfileData);
			p.getSkills(gameData.data.player.playerID);
		}
	}

	function saveGameProfileData() {
		if (gameData.data.player.playerID > 0) {
			CORE.LOG.addInfo("GAME_PAGE:saveProfileData");
			var p = new GameProfileCommunication(CORE.SOCKET, setProfileData);
			p.saveSkills(gameData.data.player.playerID);
		}
	}

	// navigation
	function onClickRegister() {
		// event.preventDefault();
		CORE.LOG.addInfo("GAME_PAGE:onClickRegister");

		page.registerPage.clear();
		page.registerPage.thisPage();
	}

	function onClickProfile() {
		page.profilePage.loadData();
		// event.preventDefault();

		CORE.LOG.addInfo("GAME_PAGE:onClickProfile");
		page.profilePage.thisPage();

	}

	function onClickAchievements() {
		CORE.LOG.addInfo("GAME_PAGE:onClicAchievements");
		page.achievementsPage.thisPage();

	}

	function onClickBadges() {
		CORE.LOG.addInfo("GAME_PAGE:onClickBadges");

		page.badgesPage.thisPage();
	}

	function onClickTraining() {
		page.trainingPage.resumeTraining();
		CORE.LOG.addInfo("GAME_PAGE:onClickTraining");

		page.trainingPage.thisPage();
	}

	/*
	 * 
	 */
	function onClickRace() {
		
		CORE.LOG.addInfo("GAME_PAGE:onClickRace");

		page.racePage.thisPage();
	}
	
	/*
	 * 
	 */
	function onClickSchedule() {
		
		CORE.LOG.addInfo("GAME_PAGE:onClickSchedule");

		page.schedulePage.thisPage();
	}
	
	/*
	 * 
	 */
	function onClickMarket() {
		
		CORE.LOG.addInfo("GAME_PAGE:onClickMarket");

		page.marketPage.thisPage();
	}
	
	/*
	 * 
	 */
	function onClickRank() {
		
		CORE.LOG.addInfo("GAME_PAGE:onClickTraining");

		page.rankPage.thisPage();
	}
	
	function onClickMachinePark() {
		
		CORE.LOG.addInfo("GAME_PAGE:onClickMachinePark");

		page.machineParkPage.thisPage();
	}
	
	
	function onClickLogout() {
		gameState.setPlayerState(PLAYERSTATE.UNSIGNED);
		gameState.setGameState(GAMESTATE.NEW);
		gameData.data.player.playerID = 0;
		CORE.LOG.addInfo("GAME_PAGE:onClickLogout");

		backPage();

	}

	function backPage() {
		$.mobile.changePage("#start_page", "none");
		gameState.gamePage = GAMEPAGE.START;
		page.currentPage = page.startPage;
	}

	function thisPage() {
		$.mobile.changePage("#game_page", "none");
		gameState.gamePage = GAMEPAGE.GAME;
		page.currentPage = page.gamePage;
	}

	return {
		init : init,
		signed : signed,
		unSigned : unSigned,
		loadGameProfileData : loadGameProfileData,
		saveGameProfileData : saveGameProfileData,
		backPage : backPage,
		thisPage : thisPage,
	};
}
