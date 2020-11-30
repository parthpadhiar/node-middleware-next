const express = require('express')
const app = express();

app.use(logger)

app.get('/', (req, res) => {
    console.log('hello');
    res.send("Hello world");
})

function logger(req, res, next) {
    console.log('Logger function');
    next();
}

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})