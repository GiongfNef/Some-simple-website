var mysql=require('mysql');
 var connection=mysql.createConnection({
   host:'127.0.0.1',
   user:'root',
   password:'password',
   database:'nodelogin',
   port:'3306'
 });
connection.connect(function(error){
   if(!!error){
     console.log(error);
   }else{
     console.log('Connected!:)');
   }
 });  
module.exports = connection; 