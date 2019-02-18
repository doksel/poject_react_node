const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt-nodejs');
const models = require('../models');

router.post("/register", (req, res)=>{

    const login = req.body.login;
    const email = req.body.email;
    const password = req.body.password;
    const passwordConfirm = req.body.passwordConfirm;

    if(!login || !password || !passwordConfirm){
        res.json({
            ok: false,
            error: 'Все поля должны быть заполнены!',
            fields: ['login', 'email', 'password', 'passwordConfirm']
        });
    } else if(login.length < 3 || login.length > 16){
        res.json({
            ok: false,
            error: 'Длина логина должна быть от 3 до 16 символов!',
            fields: ['login']
        });
    } else if(password !== passwordConfirm){
        res.json({
            ok: false,
            error: 'Пароли не совпадают!',
            fields: ['password', 'passwordConfirm']
        });
    } else{
        bcrypt.hash(password, null, null ,(err, hash) => {
            models.userRegister.create({
                login,
                email,
                password: hash
            }).then(user => {
                console.log(user);
                res.json({
                    ok: true
                })
            }).catch(err => {
                console.log(err);
                res.json({
                    ok: false,
                    error: 'Ошибка, попробуйте позже!'
                })
            })
        })
    }

});

module.exports = router;