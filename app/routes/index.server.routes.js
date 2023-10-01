var express=require('express');
var router=express.Router();

/*Get home page*/
router.get('/',function(req,res,next){
    res.render('index',{title:'Home'});

});
router.get('/home',function(req,res,next){
    res.render('home',{title:'Home'});

});
// Route for the about page
router.get('/about',function(req,res,next){
    res.render('about',{title:"About"});
});
// Route for the projects page
router.get('/projects',function(req,res,next){
    res.render('projects',{title:'projects'});
});
// Route for the contact page
router.get('/contact',function(req,res,next){
    res.render('contact',{title:'Contact'});
});
// Route for the services page
router.get('/services',function(req,res,next){
    res.render('services',{title:'Services'});

});
// Route for the submit page
router.get('/submit',function(req,res,next){
    res.render('submit',{title:'Submit'});

});


module.exports=router;

