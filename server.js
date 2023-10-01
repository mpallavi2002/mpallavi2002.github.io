/*File name : server.js
Student name : Pallavi Mishra
Student id: 301294886 */

process.env.NODE_ENV=process.env.NODE_ENV || 'development';
var express=require('./config/express');
var app=express();
app.listen(3000);
module.exports=app;
console.log('Server running at http://localhost:3000/');
