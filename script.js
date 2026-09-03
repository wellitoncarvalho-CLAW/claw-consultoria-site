const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
if(menuButton){menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',open?'true':'false');});}
document.querySelectorAll('.nav a').forEach(link=>link.addEventListener('click',()=>nav.classList.remove('open')));
document.getElementById('year').textContent=new Date().getFullYear();
