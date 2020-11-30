const express = require('express')
const app = express();

app.get('/', (req, res,  next) => {
    console.log('hello');
    res.send("Hello world");
    next()
})

app.use(logger);

function logger(req, res, next) {
    console.log('Logger function');
    next();
}

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})