const express = require("express");
const router = express.Router();
const bcrypt = require('bcrypt-nodejs');
const models = require('../models');

router.get('/', (req, res) => {
    console.log('get userRegister');
    res.render('register');
});

// POST is register
router.post("/register", (req, res)=>{
    console.log(req.body);
    const login = req.body.login;
    const email = req.body.email;
    const password = req.body.password;
    const passwordConfirm = req.body.passwordConfirm;

    if(!login || !password || !passwordConfirm){
        const fields = [];
        if(!login) fields.push('login');
        if(!password) fields.push('password');
        if(!passwordConfirm) fields.push('passwordConfirm');
        res.json({
            ok: false,
            error: 'Все поля должны быть заполнены!',
            fields
        });
    } else if(!/^[a-zA-Z0-9]+$/.test(login)){
        res.json({
            ok: false,
            error: 'Только латинские буквы и цифры!',
            fields: ['login']
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
        models.userRegister.findOne({
            login
        }).then(user => {
            if(!user){
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
                });
                res.redirect('/create');
            }else{
                res.json({
                    ok: false,
                    error: 'Имя занято!',
                    fields: ['login']
                });
            }
        })
    }
});

// POST is login
router.post("/login", (req, res)=>{
    const login = req.body.login;
    const password = req.body.password;
    if(!login || !password){
        const fields = [];
        if(!login) fields.push('login');
        if(!password) fields.push('password');
        res.json({
            ok: false,
            error: 'Все поля должны быть заполнены!',
            fields
        });
    } else(
        models.userRegister.findOne({
            login
        }).then(user => {
            if(!user){
                res.json({
                    ok: false,
                    error: 'Логин и пароль не верны!',
                    fields: ['login', 'password']
                });
            } else{
                bcrypt.compare(password, user.password, function(err, result) {
                    console.log(result);
                });
            }
        })
        .catch(err => {
            console.log(err);
            res.json({
                ok: false,
                error: 'Ошибка, попробуйте позже!'
            })
        })
    )
});

router.put('/', (req, res) => {
    console.log('put userRegister');
    console.log(req.body);
});

router.delete('/', (req, res) => {
    console.log('delete userRegister');
    console.log(res.body);
    models.userRegister.deleteOne({login:req.body.login});
});
module.exports = router;