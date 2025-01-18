document.addEventListener('DOMContentLoaded',function(){
const mas = document.getElementById('tilde');
document.addEventListener('scroll', () => {
let scroll_position = window.scrollY;
if(scroll_position > 600){
  mas.style.width = '300px';
  mas.style.height = '200px';
} else{
  mas.style.width = '0px';
  mas.style.height = '0px';
}
});
});

 