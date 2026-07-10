const header=document.querySelector('.site-header');const menuButton=document.querySelector('.menu-button');const navLinks=document.querySelector('.nav-links');
window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>12));
menuButton.addEventListener('click',()=>{const open=navLinks.classList.toggle('open');menuButton.setAttribute('aria-expanded',open)});
navLinks.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{navLinks.classList.remove('open');menuButton.setAttribute('aria-expanded','false')}));
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(item=>observer.observe(item));
document.getElementById('year').textContent=new Date().getFullYear();
const themeToggle=document.querySelector('.theme-toggle');const savedTheme=localStorage.getItem('portfolio-theme');if(savedTheme==='dark'){document.body.classList.add('dark')}const updateThemeButton=()=>{const isDark=document.body.classList.contains('dark');themeToggle.setAttribute('aria-label',isDark?'Switch to light mode':'Switch to dark mode');themeToggle.title=isDark?'Switch to light mode':'Switch to dark mode'};updateThemeButton();themeToggle.addEventListener('click',()=>{document.body.classList.toggle('dark');localStorage.setItem('portfolio-theme',document.body.classList.contains('dark')?'dark':'light');updateThemeButton()});
document.querySelectorAll('.project-card').forEach(card=>card.addEventListener('toggle',()=>{if(card.open){document.querySelectorAll('.project-card[open]').forEach(openCard=>{if(openCard!==card)openCard.removeAttribute('open')})}}));

