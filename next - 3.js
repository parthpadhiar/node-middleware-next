const express = require('express')
const app = express();

app.get('/api', auth, (req, res) => {
    console.log('Auth api');
    res.send("Auth api")
})
// localhost:3000/api?admin:true
function auth(req, res, next) {
    if (req.query.admin == "true") {
        console.log('Auth function true');
        next();
    } else {
        res.send("No Auth")
    }
}

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})
