/**
 * Loading a script into head tag
 * 
 * @param url
 * @param callback
 */
var CORE = {
	SOCKET : undefined,
	SERVER_URL : "http://localhost:8080",
	LOG : undefined,
	ID : 1,
	VERSION : 0.1,
	init : function(subLoad) {
		/**
		 * SERVER URL,
		 */
		// local server
		this.SERVER_URL = "http://localhost:8080";
		// remote server
		// this.SERVER_URL = "http://socialspeedway.com:8080";

		if (this.isDEVICE()) {
			// local
			// this.SERVER_URL = "http://10.0.2.2:8080";
			// remote
			this.SERVER_URL = "http://socialspeedway.com:8080";
			this.ID = 2;
		}

		/**
		 * default includes
		 */
		CORE
				.loadScript(
						"js/libs/md5.js",
						function() {
							// library
							CORE
									.loadScript(
											"js/libs/jquery.min.js",
											function() {
												CORE
														.loadScript(
																"js/libs/jquery.mobile-1.4.3.min.js",
																function() {
																	CORE
																			.loadScript(
																					CORE.SERVER_URL
																							+ "/socket.io/socket.io.js",
																					function() {
																						CORE
																								.loadScript(
																										"js/libs/RemoteLog.class.js",
																										function() {

																											// authentication
																											CORE
																													.loadScript(
																															"js/Game/Auth/login.class.js",
																															function() {
																																CORE
																																		.loadScript(
																																				"js/Game/Auth/register.class.js",
																																				function() {

																																					// synchronization
																																					CORE
																																							.loadScript(
																																									"js/Game/Synchronization/ProfileSynchronize.class.js",
																																									function() {
																																										CORE
																																												.loadScript(
																																														"js/Game/Synchronization/SkillsSynchronize.class.js",
																																														function() {
																																															CORE
																																																	.loadScript(
																																																			"js/Game/Synchronization/TrainingSynchronize.class.js",
																																																			function() {
																																																				CORE
																																																						.loadScript(
																																																								"js/Game/Synchronization/BadgesSynchronize.class.js",
																																																								function() {
																																																									CORE
																																																											.loadScript(
																																																													"js/Game/Synchronization/AchievementsSynchronize.class.js",
																																																													function() {

																																																														CORE
																																																																.loadScript(
																																																																		"js/Game/Synchronization/Synchronize.class.js",
																																																																		function() {

																																																																			// game
																																																																			// state
																																																																			CORE
																																																																					.loadScript(
																																																																							"js/Game/dataScheme.js",
																																																																							function() {
																																																																								CORE
																																																																										.loadScript(
																																																																												"js/Game/gameState.class.js",
																																																																												function() {
																																																																													CORE
																																																																															.loadScript(
																																																																																	"js/Game/gameData.class.js",
																																																																																	function() {
																																																																																		CORE
																																																																																				.loadScript(
																																																																																						"js/Game/trainingParams.js",
																																																																																						function() {

																																																																																							// pages
																																																																																							CORE
																																																																																									.loadScript(
																																																																																											"js/Game/Pages/start.class.js",
																																																																																											function() {

																																																																																												CORE
																																																																																														.loadScript(
																																																																																																"js/Game/Pages/profile.class.js",
																																																																																																function() {
																																																																																																	CORE
																																																																																																			.loadScript(
																																																																																																					"js/Game/Pages/game.class.js",
																																																																																																					function() {
																																																																																																						CORE
																																																																																																								.loadScript(
																																																																																																										"js/Game/Pages/register.class.js",
																																																																																																										function() {
																																																																																																											CORE
																																																																																																													.loadScript(
																																																																																																															"js/Game/Pages/training.class.js",
																																																																																																															function() {
																																																																																																																CORE
																																																																																																																		.loadScript(
																																																																																																																				"js/Game/Pages/achievements.class.js",
																																																																																																																				function() {
																																																																																																																					CORE
																																																																																																																							.loadScript(
																																																																																																																									"js/Game/Pages/badges.class.js",
																																																																																																																									function() {
																																																																																																																										CORE
																																																																																																																												.loadScript(
																																																																																																																														"js/Game/Pages/schedule.class.js",
																																																																																																																														function() {
																																																																																																																															CORE
																																																																																																																																	.loadScript(
																																																																																																																																			"js/Game/Pages/rank.class.js",
																																																																																																																																			function() {
																																																																																																																																				CORE
																																																																																																																																						.loadScript(
																																																																																																																																								"js/Game/Pages/race.class.js",
																																																																																																																																								function() {
																																																																																																																																									CORE
																																																																																																																																											.loadScript(
																																																																																																																																													"js/Game/Pages/market.class.js",
																																																																																																																																													function() {
																																																																																																																																														CORE
																																																																																																																																																.loadScript(
																																																																																																																																																		"js/Game/Pages/machine_park.class.js",
																																																																																																																																																		function() {

																																																																																																																																																			if (CORE
																																																																																																																																																					.isDEVICE())
																																																																																																																																																				CORE
																																																																																																																																																						.loadScript(
																																																																																																																																																								"cordova.js",
																																																																																																																																																								function() {
																																																																																																																																																									subLoad();
																																																																																																																																																								});
																																																																																																																																																			else
																																																																																																																																																				subLoad();
																																																																																																																																																		});
																																																																																																																																													});
																																																																																																																																								});
																																																																																																																																			});
																																																																																																																														});

																																																																																																																									});
																																																																																																																				});
																																																																																																															});
																																																																																																										});
																																																																																																					});
																																																																																																});
																																																																																											});
																																																																																						});
																																																																																	});
																																																																												});
																																																																							});
																																																																		});
																																																													});
																																																								});
																																																			});
																																														});
																																									});
																																				});
																															});
																										});
																					});
																});
											});
						});

	},

	loadScript : function(url, callback) {
		var script = document.createElement("script")
		script.type = "text/javascript";

		if (script.readyState) { // IE
			script.onreadystatechange = function() {
				if (script.readyState == "loaded"
						|| script.readyState == "complete") {
					script.onreadystatechange = null;
					callback();
				}

			};
		} else { // Others
			script.onload = function() {
				callback();
			};
		}

		// console.log(url);
		script.src = url;
		document.getElementsByTagName("head")[0].appendChild(script);
	},

	isDEVICE : function() {
		// /return "device" in window;
		// if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera
		// Mini|Opera Mobile|Kindle|Windows Phone|PSP|AvantGo|Atomic Web
		// Browser|Blazer|Chrome Mobile|Dolphin|Dolfin|Doris|GO
		// Browser|Jasmine|MicroB|Mobile Firefox|Mobile Safari|Mobile
		// Silk|Motorola Internet Browser|NetFront|NineSky|Nokia Web
		// Browser|Obigo|Openwave Mobile Browser|Palm Pre web browser|Polaris|PS
		// Vita browser|Puffin|QQbrowser|SEMC Browser|Skyfire|Tear|TeaShark|UC
		// Browser|uZard Web|wOSBrowser|Yandex.Browser
		// mobile/i.test(navigator.userAgent) && confirm('Are you on a mobile
		// device?')) isMobile = true;
		// return navigator.userAgent.search("mobile")>0;
		return ('ontouchstart' in document.documentElement);
	},

	numberEnding : function(number) { // todo: replace with a wiser code
		if (number > 0)
			return (number > 9) ? number : '0' + number;
		else
			return '00';

	},
	getTimeInLogicView : function(time) {
		x = Math.floor(time / 1000);
		seconds = Math.round(x % 60);

		x = Math.floor(x / 60);
		minutes = Math.round(x % 60);

		hours = Math.floor(x / 60);

		return CORE.numberEnding(hours) + ':' + CORE.numberEnding(minutes)
				+ ':' + CORE.numberEnding(seconds);
	},
	getCurrentTime : function() {
		// return new Date().toISOString();
		return new Date().getTime();
	},
	showDialog : function(title, message, onClose) {
		$("#MessageBoxTitle").html(title);
		$("#MessageBoxMessage").html(message);
		$("#MessageBox").bind("pagehide", onClose);
		$.mobile.changePage("#MessageBox", {
			transition : "pop",
			role : "dialog",

		});
		// alert(message);
	}
};

/**
 * INITIALIZE CORE
 */

