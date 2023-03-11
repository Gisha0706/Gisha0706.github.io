// let styk = document.querySelector(".header");

// window.addEventListener("scroll",()=>{
    
// })
let nav_btn = document.querySelector('.nav_btn');
let navbar = document.querySelector('.header')
let nav = document.querySelector('.navbar')
let navActive = document.querySelector('.header_4')
window.addEventListener('scroll', ()=>{
    if(navActive.offsetTop<window.scrollY){
        navbar.classList.add('navbar_active')
    } else{
        navbar.classList.remove('navbar_active')
    }
})
// window.onscroll = () =>{
//     const header = document.querySelector('.header')
//     const Y = window.scrollY
//     if(Y>1500){
//         header.classList.add('header_fixed')
//     }else if(Y<1500){
//         header.classList.remove('header_fixed')
//     }
//  }


nav_btn.addEventListener('click',()=>{
    nav_btn.classList.toggle('active')
    nav.classList.toggle('header_active')
})