const axios = require("axios");

module.exports = {

    registration(data){
        const promise = axios.post('/admin/register', data);
        return promise;
    },

    login(data){
        const promise = axios.post('/admin/login', data);
        return promise;
    },

    getAllUsers(){
        const promise = axios.get('/admin/allusers');
        return promise.then((response) => {
            return response.data;
        });
    },
    
    updateUser(id){
        const promise = axios.put(`/admin/user/:${id}`,{
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