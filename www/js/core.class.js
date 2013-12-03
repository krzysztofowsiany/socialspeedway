/**
 * Loading a script into head tag
 * @param url
 * @param callback
 */
var CORE = {
	SERVER_URL :"http://localhost:8080",
	init:function(subLoad) {
		/**
		 * SERVER URL,
		 */
		this.SERVER_URL = "http://localhost:8080";


		if (this.isDEVICE())
			this.SERVER_URL = "http://10.0.2.2:8080";
		/**
		 * default includes
		 */

		
		
		
		CORE.loadScript(CORE.SERVER_URL+"/socket.io/socket.io.js",function(){
			CORE.loadScript("js/libs/jquery.min.js",function(){
				CORE.loadScript("js/game/gamestate.class.js",function(){
					CORE.loadScript("js/game/gamedata.class.js",function(){
						///fiutire import
						if (CORE.isDEVICE()) 
							CORE.loadScript("cordova.js",function(){subLoad();});
						else
							subLoad();
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





