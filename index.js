const express = require('express');
const app = express();
const port = process.env.PORT;

//app.set('port', process.env.PORT || 3000);

app.use(express.static(path.join(__dirname,'public')));

app.use(express.static('public'));

app.listen(port, ()=>{
    console.log(`Example app listen`);
})

//const server = app.listen(app.get('port'),()=>{
//    console.log('server on port ',app.get('port'));
//});


/*const mysql = require('mysql');

const con = mysql.createConnection({
    host:"us-cdbr-east-04.cleardb.com",
    user:"b94cca5baae069",
    password:"0b4080e7",
    database:"heroku_238f010ee41bd1d"
});

con.connect(function(err){
    if(err)throw err;
    console.log("Conected");
});*/