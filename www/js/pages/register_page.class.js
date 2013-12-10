/*
 * Project: SocialSpeedway
 * Author: Krzysztof Owsiany 
 */

function RegisterPage(){
	function init() {
		$(".register").on('click', onClickRegister);		  	
	}
    
    function onClickRegister()    {	
    	var r = new RegisterCommunication(CORE.SOCKET,
    		function () {
				alert("Gracz zarejestrowany");
				gameState.setPlayerState( PLAYERSTATE.UNSIGNED);
				gameState.setGameState(GAMESTATE.NEW);
				
				gameData.setPlayerID(0);
				
				window.location = "#start_page";
				
			},
			function () {
				
				alert("Gracz nie został zarejestrowany");    				    				
			}
		);
    	
    	
    	r.register(
    			$("#login").val(),
    			$("#password").val()    			
    		);    	
    	
    } 
    
    return {
    	init:init
   	};
}