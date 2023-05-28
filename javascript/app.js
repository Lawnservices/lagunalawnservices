const saluda = document.getElementById('saje');
const sola = document.getElementById('men');
const foto = document.getElementById('foto1');
 
 
 

document.addEventListener('scroll', () =>{
  var scroll_position = window.scrollY;
  if(scroll_position > 600){
    
    saje.style.backgroundColor = '#226654';
    saje.style.borderBottom = '4px solid #036';
    men.style.color = 'green'; 
    
    
       } else{
    saje.style.backgroundColor = '#036';
    
    men.style.color = '#fff';
    foto1.style.border = 'none';
    
    
    }
});

function myFunction(){
  document.getElementById('titulo').style.color = '#fff';
  document.getElementById('titulo').style.fontSize = '2rem';
  document.getElementById('mase').style.backgroundImage = 'url("https://lagunalawnservice.com/img/galeria9.jpg")';
}

function Photo(){
  document.getElementById('titulo').style.color = '#299684';
  document.getElementById('titulo').style.fontSize = '2rem';
  document.getElementById('mase').style.backgroundImage = 'url("https://lagunalawnservice.com/img/galeria13.jpg")';
}
 

 