const express=require('express');
const morgan=require('morgan');
const compress=require('compression');
const bodyParser=require('body-parser');
const methodOverride=require('method-override');

module.exports=()=>{
    const app=express();
     // Middleware for logging HTTP requests in development mode
    if(process.env.NODE_ENV === 'development'){
        app.use(morgan('dev'));

    }else if(process.env.NODE_ENV === 'production'){
        // Middleware for compressing HTTP responses in production mode
        app.use(compress());
    }
        // Middleware for parsing URL-encoded and JSON request bodies
    app.use(bodyParser.urlencoded({
        extended:true
    }));

    app.use(bodyParser.json());

    // Middleware for handling HTTP method override
    app.use(methodOverride());
    app.set('views','./app/views');
    app.set('view engine','ejs');
    // Route handling: Use the routes defined in 'index.server.routes.js'
    app.use('/',require('../app/routes/index.server.routes.js'));
    //require('../app/routes/index.server.routes.js')(app);
    app.use(express.static('./public'));
    app.use(express.static("./node_modules"));
    return app;
};