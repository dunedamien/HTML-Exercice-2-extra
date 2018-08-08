$(function(){; 
   console.log('ready Jquery'); 
   //je clic sur le bouton 
   //on ajoute la class show a ul 
   $('#bt_menu').click(function(){ 
       console.log('OK'); 
       $('#main_nav ul').toggleClass('show'); 
   }); 
    
}); 
