const clock= document.getElementById('clock')



setInterval(function(){
    let date= new Date();
    clock.innerHTML=date.toLocaleTimeString();

  clock.style.background= 
  "linear-gradient(90deg, rgba(114,43,166,1) 0%, rgba(56,19,47,1) 0%, rgba(74,73,24,1) 0%, rgba(81,79,119,1) 1%, rgba(167,136,172,1) 35%, rgba(121,84,52,0.9118329466357309) 52%, rgba(164,136,156,1) 68%, rgba(71,36,10,0.9559164733178654) 99%, rgba(2,2,31,0.9443155452436195) 100%)";  
  
   
},1000);