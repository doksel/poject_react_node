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
            return response.data;
        });
    },

    getAllUsers(){
        const promise = axios.get('/admin/register');
        return promise.then((response) => {
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
        
    deleteUser(id){
        const promise = axios.delete(`/admin/register`);
        return promise.then((response) => {
            return response.data;
        });
    },
}