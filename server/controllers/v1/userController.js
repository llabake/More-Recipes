import express from 'express';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
import { User } from './../../models';

const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);
const secret = "drtguug8*werty+uifghyu"

export const signUp =  (req, res) =>  {
    if(!req.body.username){
        res.status(400).json({message:"username is required"});
    }
    else if (!req.body.firstName){
        res.status(400).json({message: "firstName is required"});
    }
    else if (!req.body.lastName ){
        res.status(400).json({message:"lastName is required"});
    }
    else if (!req.body.email ){
        res.status(400).json({message:"email is required"});
    }
    else if (!req.body.password ){
        res.status(400).json({message:"password is required"});
    }
    else if (!req.body.confirmpassword ){
        res.status(400).json({message:"confirmpassword is required"});
    }
    else if (req.body.password != req.body.confirmpassword){
        res.status(400).json({message:"Please ensure the Password match"});
    }
    else {
        User.create({
            username: req.body.username,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, salt),
            firstName: req.body.firstName,
            lastName: req.body.lastName
        })
        .then(user => res.status(201).json({message: "Your account has been created"}))
        .catch(error => { 
            if(error.name === 'SequelizeUniqueConstraintError') {
                res.status(400).json({message: 'User already exists'});
            }
            res.status(400).send(error);
        }); 
    }
}

export const signIn = (req, res) => {
    User.findOne({
      where: {
        username: req.body.username    
      },
    })
    .then((user, err) => {
        if(err){
            res.status(500).send(err)
        }
        else if (!user){
            res.status(400).json({
                success: false, 
                message: 'Authentication failed. Incorrect credentials.'
            });
        }
        else  if (user){
            if (bcrypt.compareSync(req.body.password , user.password)){ 
                const token = jwt.sign({data: user}, secret, {expiresIn: 8640});
                res.status(200).json({
                    message: 'user logged in', 
                    token: token
                });
            }
            else {
                res.status(400).json({
                    message: 'Incorrect credentials, please check username or password'
                });
            }
        }
    })
}

  



