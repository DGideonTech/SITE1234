/* navbar toggle */
const btnn = document.getElementById('btnn');
const menuList = document.querySelector('.menu-list');
const btnnn = document.getElementById('btnnn');

btnn.addEventListener('click', function(e){
    menuList.classList.toggle('view');
})

btnnn.addEventListener('click', function(e){
    menuList.classList.remove('view');
}) 

/* navbarHeight */
const navBar = document.querySelector('.navbar');
const page = document.querySelector('.main-page');
const linkUp = document.querySelector('.link-up');
window.addEventListener('scroll', e => {
    pageHeight = window.pageYOffset;
    
   if(pageHeight >= 42){
    navBar.classList.add('show');
    
   }
   else{
    navBar.classList.remove('show');
    
   }
   /* link-up */
   if(pageHeight >= 165){
    linkUp.classList.add('active');
   }
   else if(pageHeight <= 165){
    linkUp.classList.remove('active');
   }
   
})












    
