const saluda = document.getElementById('saje');
const sola = document.getElementById('men');
const foto = document.getElementById('foto1');
 
 
 

document.addEventListener('scroll', () =>{
  var scroll_position = window.scrollY;
  if(scroll_position > 600){
    
    saje.style.backgroundColor = '#226654';
    saje.style.borderBottom = '4px solid #036';
    men.style.color = 'blue'; 
    foto1.style.border = '4px solid #036';
    
       } else{
    saje.style.backgroundColor = '#036';
    
    men.style.color = '#fff';
    foto1.style.border = 'none';
    
    
    }
});

 

 