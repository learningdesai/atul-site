const express=require('express');
const app=express();

const path=require('path');

app.use(express.static(__dirname+'/dist'));

app.listen(process.env.PORT || 8080);

//Path Location startergy

app.get('/*',fundction(req,res){
    res.sendFile(path.join(__dirname+'/dist/index.html'));
})

console.log('console Listening!!');