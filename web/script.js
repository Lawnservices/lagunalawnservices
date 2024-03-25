document.getElementById('video').addEventListener('click',function(){
document.getElementById('cali').style.display= 'block';
document.getElementById('cal').style.display= 'none';
document.getElementById('best').style.color= '#003349';
document.getElementById('best').innerText= 'Subscribe to the Channel';
});
document.getElementById('fotos').addEventListener('click',function(){
document.getElementById('cali').style.display= 'none';
document.getElementById('cal').style.display= 'block';
document.getElementById('best').style.color= '#04aa6b';
document.getElementById('best').innerText = 'THE BEST PRICES IN THE AREA.';
});