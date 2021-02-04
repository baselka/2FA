const Auth = require('../models/authModel')

exports.signup = (req, res) => {
    const {name, email, password } = req.body;
 if (  name == null  || name.length < 1  || email == null   || password == null  || email.length < 1  || password.length < 1 ) {
        res.status(400).send({
            statusName: 'Bad Request',
            statusCode: 400,
            message: "Can not sign up please check Email and Password  "
        });
    }else {
       
        Auth.signup(name, email, password, (err,data) => {
            if(err) {
                res.status(500).send({
                    message: err.message || "Internal Server Error. Please try again"
                })
                                
            } else if(data !== undefined) {
                console.log(data)
                if(data && data.keyPattern){
                    return res.status(409).send({
                        statusName: 'Duplicated',
                        statusCode: 409,
                        message: 'User already exist'
                    });
                }
                
                    res.status(201).send({
                        statusName: 'Created',
                        statusCode: 201,
                        message: 'Account created successfully',
                        data : data
                    });
                }
        })   
    }
}    

exports.login = (req, res) => {
    const { email, password } = req.body;
    if (email === undefined || password === undefined || email.length < 1 || password.length < 1) {
        res.status(400).send({
            statusName: 'Bad Request',
            statusCode: 400,
            message: "Login credintials not provided"
        });
    } else {
       
        Auth.login(email, password, (err,data) => {
            if(err) {
                res.status(500).send({
                    message: err.message || "Internal Server Error. Please try again"
                });
            } 
           
            if(data === null || data === undefined) {
               return res.status(401).send({
                    statusName: 'Unauthorized',
                    statusCode: 401,
                    message:  'Invalid Username or Password try again .'
                });  
                                  
            }
                         
                res.status(200).send({
                    statusName: 'Ok',
                    statusCode: 200,
                    user : {
                        data
                    }
                });
      
            })   
        }
    }    

exports.verify2FA = (req, res) => {
    const { id, token } = req.body;
    if (id === undefined || token === undefined) {
        res.status(400).send({
            statusName: 'Bad Request',
            statusCode: 400,
            message: "Login credintials not provided"
        });
    } else {
       
        Auth.verify2FA(id, token, (err,data) => {
            if(err) {
                res.status(500).send({
                    message: err.message || "Internal Server Error. Please try again"
                });
            } 
           
            if(data === null || data === undefined) {
               return res.status(401).send({
                    statusName: 'Unauthorized',
                    statusCode: 401,
                    message:  'Invalid Username or Password try again .'
                });  
                                  
            }
                         
                res.status(200).send({
                    statusName: 'Ok',
                    statusCode: 200,
                    verify: data
                });
      
            })   
        }
    }    