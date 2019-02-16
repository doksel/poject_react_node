const formRegister = document.querySelector('.form-register');
const formLogin = document.querySelector('.form-login');
const changeRegister = document.querySelector('.change-register');
const btnRegister = document.querySelector('.btn-register');
const btnLogin = document.querySelector('.btn-register');

changeRegister.onclick = (e)=>{
    e.preventDefault();
    formRegister.style.display = 'flex';
    formLogin.style.display = 'none';
    const data = {
        
    };
};

btnRegister.onclick = (e)=>{
    e.preventDefault();
    console.log('btnRegister');
    
};

btnLogin.onclick = (e)=>{
    e.preventDefault();
    console.log('btnLogin');
    
};

/* eslint-disable no-undef */
$(function(){

});
/* eslint-enable no-undef */
