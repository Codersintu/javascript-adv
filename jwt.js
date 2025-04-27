// write a function that takes in  a username and password and return jwt token with the
// username encodeed inside an object. should return null if the username is not a valid email or
// if the password is less than 6 character. try using the zod library here


const express=require("express")
const app=express()
const zod=require("zod")
const jwt=require("jsonwebtoken")
const jwtPassword="secret"

const emailSchema=zod.string().email();
const passwordSchema=zod.string().min(6);

function signJwt(username,password) {
    const usernameResponse=emailSchema.safeParse(username)
    const passwordResponse=passwordSchema.safeParse(password)

    if (!usernameResponse.success || !passwordResponse.success) {
        return null;
    }

    const signature=jwt.sign({
        username
    },jwtPassword);
    return signature;

}
const ans=signJwt("sintuhr@gmail.com","asddseddfd")
console.log(ans)


function verifyJwt(token) {
    let ans=true;
    try {
        jwt.verify(token,jwtPassword)
    } catch (error) {
        ans=false
    }
    return ans;
}
verifyJwt(token)

function decodeJwt(token){
    const decoded=jwt.decode(token)
    if (decoded) {
        return true;
    } else {
        return false;
    }
}

decodeJwt(token)