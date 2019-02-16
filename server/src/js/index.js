const formRegister = document.querySelector('.form-register');
const formLogin = document.querySelector('.form-login');
const changeRegister = document.querySelector('.change-register');
const btnRegister = document.querySelector('.btn-register');
const btnLogin = document.querySelector('.btn-login');

changeRegister.onclick = (e)=>{
    e.preventDefault();
    formRegister.style.display = 'flex';
    formLogin.style.display = 'none';
};

btnRegister.onclick = (e)=>{
    e.preventDefault();
    console.log('btnRegister');
    const data = {
            login: document.querySelector('#registerUsername').value,
            email: document.querySelector('#registerEmail').value,
            password: document.querySelector('#registerPassword').value,
            passwordConfirm: document.querySelector('#registerConfirmPassword').value,
    };
    console.log(data);
    
};

btnLogin.onclick = (e)=>{
    e.preventDefault();
    console.log('btnLogin');
    
};

/* eslint-disable no-undef */

// $(function(){
//     $('.btn-register').click((e)=>{
//         e.preventDefault();

//         const data = {
//             login: $('#registerUsername'.val(),
//             email: $('#registerEmail'.val(),
//             password: $('#registerPassword'.val(),
//             passwordConfirm: $('#registerConfirmPassword'.val(),
//         };
//         console.log(data);
        
//     });
// });

/* eslint-enable no-undef */
