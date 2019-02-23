const axios = require("axios");

module.exports = {

    registration(){
        const promise = axios.post('/admin/register', {
            login: document.querySelector('#registerUsername').value,
            email: document.querySelector('#registerEmail').value,
            password: document.querySelector('#registerPassword').value,
            passwordConfirm: document.querySelector('#registerConfirmPassword').value,
        });
        return promise.then((response) => {
            console.log(response.data);
            const data = response.data;
            const spanError = document.querySelector('.error');
            spanError.innerHTML = '';
            if(!data.ok){
                spanError.innerHTML = response.data.error;
                if(data.fields){
                    data.fields.forEach(item => {
                        // console.log(document.querySelector(`input[name=${item}]`))
                        document.querySelector(`input[name=${item}]`).style.backgroundColor='red'; 
                    });
                };
            }else{
                spanError.innerHTML = response.data.error;

            }
            return response.data;
        });
    },

    getAllUsers(){
        const promise = axios.get('/admin/register');
        return promise.then((response) => {
            console.log(response.data);
            return response.data;
        });
    },
    
    updateUser(id){
        const promise = axios.put('/admin/register',{

        });
        return promise.then((response) => {
            return response.data;
        });
    },
        
    deleteUser(login){
        const promise = axios.delete(`/admin?login=${login}`);
        return promise.then((response) => {
            return response.data;
        });
    },
}