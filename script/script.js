document.addEventListener('DOMContentLoaded', function(){
  
const mas = document.querySelectorAll('.dos');
mas.forEach(elemento => {
 setTimeout(function(){
  elemento.style.color = 'green';
},4000);
});

const masa = document.querySelector('.doss');
if(masa){
  setTimeout(function(){
   masa.style.display = 'block';
  },6000); 

}



});