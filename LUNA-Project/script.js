// navbar 
window.addEventListener('scroll',function(){
    var header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 0);
})


// dark mod 
let theme_btn = document.querySelector('.theme_btn');
let body = document.querySelector('body');
theme_btn.onclick = function(){
    theme_btn.classList.toggle('activate');
    body.classList.toggle('dark');
}
// navbar menu 
let menu_toggle = document.querySelector('.toggle');
let nav = document.querySelector('.nav');
menu_toggle.onclick = function(){
    menu_toggle.classList.toggle('active');
    nav.classList.toggle('active');

}
