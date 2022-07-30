const menubtn = document.querySelector('.menu-btn');  
const menu = document.querySelector('.nav__menu');
const submenufeaturesbtn = document.querySelector('.nav__menu_list--element--features');
const submenucompanybtn = document.querySelector('.nav__menu_list--element--company');
const submenufeatures = document.querySelector('.nav__menu_list--element__list--features');
const submenucompany = document.querySelector('.nav__menu_list--element__list--company');
const prueba = document.querySelectorAll('.close');/*for*/


const toggle = () => {
    menu.classList.toggle('nav__menu--toggle')
};

menubtn.addEventListener('click',toggle)

submenufeaturesbtn.addEventListener('click', () => {
    if(submenufeatures.style.display === "none"){
        submenufeatures.style.display = "block"
    }
    else {
        submenufeatures.style.display = "none"
    }
});

submenucompanybtn.addEventListener('click', () => {
    if(submenucompany.style.display === "none"){
        submenucompany.style.display = "block"
    }
    else {
        submenucompany.style.display = "none"
    }
}); 

prueba.forEach(element => {
    element.addEventListener('click', e =>{
        toggle();
        submenufeatures.style.display = "none";
        submenucompany.style.display = "none"
    });
});