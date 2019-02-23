const service = require("./service");

const formRegister = document.querySelector('.form-register');
const formLogin = document.querySelector('.form-login');
const changeRegister = document.querySelector('.change-register');
const btnRegister = document.querySelector('.btn-register');
const btnLogin = document.querySelector('.btn-login');

if(changeRegister){
    changeRegister.addEventListener('click', (e)=>{
        e.preventDefault();
        formRegister.style.display = 'flex';
        formLogin.style.display = 'none';
    });
};

if(btnRegister){
    btnRegister.addEventListener('click', (e)=>{
        e.preventDefault();
        service.registration();
    });
};

if(btnLogin){
    btnLogin.addEventListener('click', (e)=>{
        e.preventDefault();
        console.log('btnLogin');
    });
};

/* eslint-disable no-undef */

// $(function(){
//     $('.btn-register').click((e)=>{
//         e.preventDefault();
//         const data = {
//             login: $('#registerUsername').val(),
//             email: $('#registerEmail').val(),
//             password: $('#registerPassword').val(),
//             passwordConfirm: $('#registerConfirmPassword').val()
//         };
//         $.ajax({
//             type: 'POST',
//             data: JSON.stringify(data),
//             contentType: 'application/json',
//             url: '/admin/register'
//         }).done((data)=>{
//             console.log(data);
//         });
//     });
// });

/* eslint-enable no-undef */
