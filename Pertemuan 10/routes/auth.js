const express = require('express');

const router = express.Router();

router.get('/login',async(req,res)=> {
    //If login, redirect to main page
    if (req.session.user){
        res.redirect('/');
    }
    else{
        res.render('pages/login', {layout:false});
    }
});

router.get('/logout',async(req,res)=>{
    //Removing session
    req.session.destroy();

    //Redirect to login page
    res.redirect('/auth/login');
})

router.post('/login',async(req,res)=> {
    //Get input
    const username = req.body.username;
    const password = req.body.password;

    if(username==="admin"&&password==="admin"){
        req.session.user="admin";

        //Redirect to logged site
        res.redirect('/');
    }
    else{
        res.render('pages/login', {layout: false, error: "Wrong username or password."});
    }
});

module.exports = router;