const express = require('express');
const path = require('path');
const app = express();
const staticAsset = require('static-asset');
const engine = require('ejs-mate');
const models = require('./models');
const config = require('./config');
const routes = require('./routes');

const session = require('express-session');
const MongoStore = require('connect-mongo')(session);


// sessions
// app.use(
//     session({
//         secret: config.SESSION_SECRET,
//         resave: true,
//         saveUinitialized: false,
//         store: new MongoStore({
//             mongoConnection: mongoose.connection
//         })
//     })
// );

// sets and uses
app.engine('ejs', engine);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(staticAsset(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/javascrips',express.static(path.join(__dirname, 'node_modules', 'jquery','dist')));

let data = [
    {
        id: 1,
        name: 'Andriy',
        sername: 'Fedorchenko',
        age: 40
    }
]

// routes
app.get('/', (req, res) => {
    // const id = req.session.userId;
    // const login = req.session.userLogin;
    models.userRegister.find({}).then(users => {
        res.render('index',{users:users,data:data});
    });
});

app.use('/admin', routes.admin);
app.use('/api', routes.api);

app.get('/users', (req, res) => {
    models.userRegister.find({}).then(users => {
        res.render('users',{users:users})
    })
});

app.get('/create', (req, res) => res.render('create'));
app.post('/create', (req, res) => {
    const{name, sername, age} = req.body;

    models.userData.create({
        name,
        sername,
        age
    }).then(users => console.log('created', users.id))

    res.redirect('/');
});


// error 404
app.use((req, res, next) => {
    const err = new Error('Not found');
    err.status = 404;
    next(err);
});
// error 500
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.render('error', {
        message: error.message,
        error: !config.IS_PRODUCTION ? error : {},
        title: 'Oops... error 500'
    })
});

module.exports = app;