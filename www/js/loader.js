/**
 * Loading a script into head tag
 * @param url
 * @param callback
 */

function loadScript(url, callback){
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
}


/**
 * default includes
 */
loadScript("js/game/gamestate.class.js",function(){});
loadScript("js/libs/jquery.min.js",function(){});
loadScript("http://localhost:8080/socket.io/socket.io.js",function(){});
loadScript("cordova.js",function(){});