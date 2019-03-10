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
                        item.style.borderColor='red'; 
                    });
                };
            });
        };
    }else{        
        if(spanError){
            spanError.forEach(item => {
                item.innerHTML = '';
                item.innerHTML = 'Вы успешео зарегистрировалиь!!!';
            });
            resetInputValue();
        };
        setTimeout(() => {
            location="/";
        },3000);
    }
};

function resetInputValue (){
    let input = document.querySelectorAll(`input`);
    if(input){
        input.forEach(item => {
            item.value = '';
            item.style.borderColor='inherit';
        });
    };
}
