const express = require('express');
const Users = require('./models/users');
const app = express();

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let data = [
    {
        id: 1,
        name: 'Andriy',
        sername: 'Fedorchenko',
        age: 40
    }
]

app.get('/', (req, res) => {
    Users.find({}).then(users => {
        res.render('index',{users:users, data:data})
    })
});

app.get('/create', (req, res) => res.render('create'));
app.post('/create', (req, res) => {
    const{name, sername, age} = req.body;

    Users.create({
        name,
        sername,
        age
    }).then(users => console.log('created', users.id))

    res.redirect('/');
});

module.exports = app;