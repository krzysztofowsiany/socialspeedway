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
				
				gameData.data.player.playerID=0;
				
				window.location = "#start_page";
				
			},
			function () {
				
				alert("Gracz nie został zarejestrowany");    				    				
			}
		);
    	
    	alert($("#passwordRegister").val());
    	r.register(
    			$("#loginRegister").val(),
    			$("#passwordRegister").val()    			
    		);    	
    	
    } 
    
    return {
    	init:init
   	};
}