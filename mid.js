//you have been given an express server which has fewendpoints
//your task is to create a global middleware (app.use) which will
// maintain a count of the number of requesst made to the server in global 
// requestCount variable

const express=require("express");
const { number } = require("zod");
const app=express();

let requestCount=0;

app.use(function(req,res,next){
    requestCount= requestCount + 1;
    next();
})

app.get("/user",(req,res)=>{
    res.status(200).json({name:"sintu"})
})

app.get("/request",(req,res)=>{
    res.status(200).json({requestCount})
})


// rate limit the request from a user to only 5 request per second 
// if a user sends more than 5 requests in a single second.the server
// should block them with a 404
// user will be sending in their user id  n the header as "user-id"
//you have been given a numberrequestforUser object to start off with which
// clears every one second

let numberofRequestForUser={};
setInterval(() => {
    numberofRequestForUser={};
}, 1000);

app.use(function(req,res,next){
    const userId=req.headers["user-Id"]
    if (numberofRequestForUser[userId]) {
        numberofRequestForUser[userId] = numberofRequestForUser[userId] + 1
        if (numberofRequestForUser > 5) {
            res.status(404).json("no entry")
        }else{
            next()
        }
    }else{
        numberofRequestForUser[userId]=1
        next()
    }
})

app.listen(3000);
