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
        let data = {
            login: document.querySelector('#registerUsername').value,
            email: document.querySelector('#registerEmail').value,
            password: document.querySelector('#registerPassword').value,
            passwordConfirm: document.querySelector('#registerConfirmPassword').value,
        };
        service.registration(data)
        .then(validateRegister);
    });
};

if(btnLogin){
    btnLogin.addEventListener('click', (e)=>{
        e.preventDefault();
        let data = {
            login: document.querySelector('#loginUsername').value,
            password: document.querySelector('#loginPassword').value,
        };
        console.log(data);
        service.login(data)
        .then(validateRegister);
    });
};

function validateRegister(response) {
    console.log(response.data);
    const data = response.data;
    const spanError = document.querySelectorAll('.error');

    if(!data.ok){
        if(spanError){
            spanError.forEach(item => {
                item.innerHTML = '';
                item.innerHTML = response.data.error; 
            });
        };
        if(data.fields){
            data.fields.forEach(item => {
                let input = document.querySelectorAll(`input[name=${item}]`);
                if(input){
                    input.forEach(item => {
                        item.style.backgroundColor='red'; 
                    });
                };
            });
        };
    }else{        
        if(spanError){
            spanError.forEach(item => {
                item.innerHTML = '';
                item.innerHTML = 'Your were registering successfull'; 
            });
        };
        setTimeout(() => {
            location="/";
        },3000);
    }
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
