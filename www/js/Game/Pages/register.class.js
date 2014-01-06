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
    			CORE.showDialog("Gracz zarejestrowany");
				gameState.setPlayerState( PLAYERSTATE.UNSIGNED);
				gameState.setGameState(GAMESTATE.NEW);
				
				gameData.data.player.playerID=0;
				
				$.mobile.changePage("#start_page", "flip");
				
			},
			function () {				
				CORE.showDialog("Gracz nie został zarejestrowany");    				    				
			}
		);
    	
    	
    	r.register(
    			$("#loginRegister").val(),
    			$("#passwordRegister").val()    			
    		);    	
    	
    } 
    
    return {
    	init:init
   	};
}