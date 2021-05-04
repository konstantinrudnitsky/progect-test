document.addEventListener("DOMContentLoaded", () =>{
    "use strict";
    
    const menu = document.querySelector('.menu');
    const close = document.querySelector('.close');
    const header = document.querySelector('.main__header');

    const menuLink = document.querySelectorAll('.menu__nav');

    menu.addEventListener('click', ()=> {
        header.classList.toggle('main-active');
    });

    close.addEventListener('click', ()=> {
        header.classList.remove('main-active');
    });

    menuLink.forEach((link, index) =>{
        link.addEventListener('click', ()=> {
            link.classList.toggle('child-active');
        });
    });


})
