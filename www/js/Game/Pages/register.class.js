/*
 * Project: SocialSpeedway
 * Author: Krzysztof Owsiany 
 */

function RegisterPage(){
	function init() {
		$(".registerUser").on('click', onClickRegister);		  	
	}
    
	function clear() {
		$("#loginRegister").val("");
		$("#passwordRegister").val("");    		
	}
	
    function onClickRegister()    {    	
    	r = new RegisterCommunication(CORE.SOCKET,
    		function () {    			
    			CORE.showDialog("Authentication", "New Player are registered.", function(){    				
    				page.startPage.thisPage();
    			});
    			
				gameState.setPlayerState( PLAYERSTATE.UNSIGNED);
				gameState.setGameState(GAMESTATE.NEW);				
				gameData.data.player.playerID=0;
				
				
				
			},
			function () {				
				CORE.showDialog("Authentication", "New Player registration failed!");    				    				
			}
		);
    	
    	
    	r.register(
    			$("#loginRegister").val(),
    			$("#passwordRegister").val()    			
    		);    	
    	
    } 
    
	function backPage() {
		$.mobile.changePage("#game_page", "none");	    	
	    gameState.gamePage =GAMEPAGE.GAME; 
	    page.currentPage = page.gamePage;
	}
	    
	function thisPage() {
		$.mobile.changePage("#register_page", "none");
	    gameState.gamePage =GAMEPAGE.REGISTER;
	    page.currentPage = page.registerPage;
	}  
    
    return {
    	init:init,
    	clear:clear,
    	backPage:backPage,
    	thisPage:thisPage,
   	};
}