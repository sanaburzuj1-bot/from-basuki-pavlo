const snow = document.querySelector('.snow');
function spawnSnow(){
  const s=document.createElement('span');s.className='snowflake';s.textContent=Math.random()>.45?'❄':'·';
  s.style.left=Math.random()*100+'vw';s.style.opacity=.25+Math.random()*.65;
  s.style.fontSize=(8+Math.random()*14)+'px';s.style.animationDuration=(7+Math.random()*8)+'s';
  snow.appendChild(s);setTimeout(()=>s.remove(),16000);
}
setInterval(spawnSnow,190);