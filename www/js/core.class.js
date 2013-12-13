/**
 * Loading a script into head tag
 * @param url
 * @param callback
 */
var CORE = {
	SOCKET:undefined,
	SERVER_URL :"http://localhost:8080",
	init:function(subLoad) {
		/**
		 * SERVER URL,
		 */
		//local server
		this.SERVER_URL = "http://localhost:8080";
		//remote server
		//	this.SERVER_URL = "http://socialspeedway.com:8080";


		if (this.isDEVICE())
			//local			
			//this.SERVER_URL = "http://10.0.2.2:8080";
			//remote
			this.SERVER_URL = "http://socialspeedway.com:8080";
		
		/**
		 * default includes
		 */

		
      	
      	CORE.loadScript("js/libs/md5.js", function(){
      		//library
      		CORE.loadScript("js/libs/jquery.min.js", function(){
				CORE.loadScript("js/libs/jquery.mobile-1.3.2.min.js", function(){
					CORE.loadScript(CORE.SERVER_URL+"/socket.io/socket.io.js", function(){				
						
						//game state
						CORE.loadScript("js/game/dataScheme.js", function(){
						CORE.loadScript("js/game/gameState.class.js", function(){
							CORE.loadScript("js/game/gameData.class.js", function(){
						
								//communication
								CORE.loadScript("js/communication/login.class.js", function(){
									CORE.loadScript("js/communication/profile.class.js", function(){
										CORE.loadScript("js/communication/register.class.js", function(){
										
											//pages
											CORE.loadScript("js/pages/start_page.class.js", function(){
												CORE.loadScript("js/pages/profile_page.class.js", function(){
													CORE.loadScript("js/pages/game_page.class.js", function(){		        
														CORE.loadScript("js/pages/register_page.class.js", function(){			
															CORE.loadScript("js/pages/training_page.class.js", function(){
																CORE.loadScript("js/pages/achievements_page.class.js", function(){
																	CORE.loadScript("js/pages/badges_page.class.js", function(){
																		if (CORE.isDEVICE()) 
																			CORE.loadScript("cordova.js",function(){subLoad();});
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
		
		
		
		
	},

	loadScript:function(url, callback){
		var script = document.createElement("script")
		script.type = "text/javascript";
	
		if (script.readyState){ //IE
			script.onreadystatechange = function(){
				if (script.readyState == "loaded" ||
						script.readyState == "complete"){
					script.onreadystatechange = null;
					callback();
				}
			};
		} else { //Others
			script.onload = function(){
				callback();
			};
		}
	
		script.src = url;
		document.getElementsByTagName("head")[0].appendChild(script);
	},
	
	isDEVICE:function () { 		
		///return  "device" in window;
		//if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Opera Mobile|Kindle|Windows Phone|PSP|AvantGo|Atomic Web Browser|Blazer|Chrome Mobile|Dolphin|Dolfin|Doris|GO Browser|Jasmine|MicroB|Mobile Firefox|Mobile Safari|Mobile Silk|Motorola Internet Browser|NetFront|NineSky|Nokia Web Browser|Obigo|Openwave Mobile Browser|Palm Pre web browser|Polaris|PS Vita browser|Puffin|QQbrowser|SEMC Browser|Skyfire|Tear|TeaShark|UC Browser|uZard Web|wOSBrowser|Yandex.Browser mobile/i.test(navigator.userAgent) && confirm('Are you on a mobile device?')) isMobile = true;
		//return navigator.userAgent.search("mobile")>0;
		return ('ontouchstart' in document.documentElement);
	}
};

/**
 * INITIALIZE CORE
 */





