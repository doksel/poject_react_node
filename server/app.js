import express from 'express';
import path from 'path';
import staticAsset from 'static-asset';
import engine from 'ejs-mate';
import models from './models';
import config from './config';
import routes from './routes';
// import myAPI from './routes/myAPI';
import cors from 'cors';

const app = express();

import session from 'express-session';
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

app.use(cors());
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
// app.use('/api', myAPI.posts.api);

app.get('/users', (req, res) => {
    models.userData.find({}).then(users => {
        res.render('users',{users:users})
    })
});

app.get('/create', (req, res) => res.render('createUser'));
app.post('/create', (req, res) => {
    const{name, sername, age} = req.body;

    models.userData.create({
        name,
        sername,
        age
    }).then(users => console.log('created', users.id))

    res.redirect('/');
});

app.get('/posts', (req, res) => {
    models.post.find({}).then(posts => {
        res.render('createPost');
    })
});
app.post('/posts', (req, res) => {
    const{title, text} = req.body;
    
    models.post.create({
        title,
        text
    }).then(post => console.log('created', post.id))

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