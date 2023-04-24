const saluda = document.getElementById('saje');

document.addEventListener('scroll', () =>{
  var scroll_position = window.scrollY;
  if(scroll_position > 300){
    saje.style.backgroundColor = '#226654';
    saje.style.borderBottom = '4px solid #036'
  } else{
    saje.style.backgroundColor = '#036'
  }
})