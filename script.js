const header=document.querySelector('.site-header');const menuButton=document.querySelector('.menu-button');const navLinks=document.querySelector('.nav-links');
window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>12));
menuButton.addEventListener('click',()=>{const open=navLinks.classList.toggle('open');menuButton.setAttribute('aria-expanded',open)});
navLinks.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{navLinks.classList.remove('open');menuButton.setAttribute('aria-expanded','false')}));
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(item=>observer.observe(item));
document.getElementById('year').textContent=new Date().getFullYear();
const glow=document.querySelector('.cursor-glow');window.addEventListener('pointermove',event=>{glow.style.left=event.clientX+'px';glow.style.top=event.clientY+'px'});
