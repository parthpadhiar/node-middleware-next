const express = require('express')
const app = express();

// app.use(logger)

app.get('/',(req, res, next) => {
    console.log('hello');
    res.send("Hello world");
    next();
})

app.use(logger);

app.get('/api', auth, (req, res) => {
    console.log('Auth api');
    res.send("Auth api")
})

function logger(req, res, next){
    console.log('Logger function');
    next();
}

function auth(req, res, next){
    if(req.query.admin == "true"){
    console.log('Auth function true');
        next();
    } else {
        res.send("No Auth")
    }
}

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})