const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

function ensureToken(req,res,next){
   const bearerHeader = req.headers['authorization'];
    console.log(bearerHeader);
    if(typeof bearerHeader !== 'undefined'){
        const bear = bearerHeader.split(" ");
        const bearToken = bear[1];
        
        req.token = bearToken
        next();
    }else{
        res.sendStatus(403);
    }
}
app.get('/', ensureToken,(req,res)=>{
    res.json({
        tx: 'x'
    });
});
app.post('/api/log',(req,res) => {
    const user = {id: 3};
    const token = jwt.sign({user},'my_secret');

    res.json({
        token
    });

});
app.listen(3000, () => {
    console.log('puerto 3000');
});

