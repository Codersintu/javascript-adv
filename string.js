// console.log('hello SINTU !',Math.random());
// console.log("1"+2+3-3*4+'sintu')
//  let sintu=10;
//  --sintu
//  console.log(sintu)

// console.log(undefined>0)

//note: in javascript we have two types of memory 1).stack memory(permitive datatype) 2).heap memory(non-permitive datatype)
// jab koi value stack memory store karega wanha se copy value deta hai
// jab koi value heap memory store karega wanha se original value ka reference deta hai

// const name='sintu'
// const repocount=100
// console.log(name+repocount+'value'); //this is not write way to concatinate string
// console.log(`hello my name is ${name} and repo count is ${repocount}`)//this way to concatinate string


const newgame = new String('sintu')
// console.log(newgame)
// console.log(newgame.length)
// console.log(newgame.charAt(3))
// console.log(newgame.indexOf('t'))
// console.log(newgame.substring(-1,4))
// console.log(newgame.toUpperCase())
// console.log(newgame.toLowerCase())
// console.log(newgame.split('i'))
// console.log(newgame.replace('i','u'))
// console.log(newgame.concat('!'))
// console.log(newgame.slice(-1,0))
// console.log(newgame.substring(0,3))
// console.log(newgame.substring(3,0))
// console.log(newgame.substring(0,newgame.length))
// console.log(newgame.substring(newgame.length,0))
// console.log(newgame.substring(0,newgame.length-1))
// console.log(newgame.substring(newgame.length-1,0))
// console.log(newgame.substring(0,newgame.length-2))
// console.log(newgame.substring(newgame.length-2,0))
// console.log(newgame.slice(-1,0))
console.log(newgame.anchor('sintu'))
console.log(newgame.big())
console.log(newgame.blink())
console.log(newgame.bold())
console.log(newgame.charAt(3))
console.log(newgame.fixed())
console.log(newgame.fontcolor('red'))
console.log(newgame.fontsize(20))
console.log(newgame.italics())
// console.log(newgame.link('http://www.google.com'))
// console.log(newgame.small())
// console.log(newgame.strike()) 
// console.log(newgame.sub())


//number & maths************************************************************

// const balance = new Number(10000)
// console.log(balance);
// console.log(balance.toString().length)
// console.log(balance.toFixed(2))
// console.log(balance.toExponential(2))
// console.log(balance.toPrecision(2))

// const othernumber=124.89889
// console.log(othernumber.toPrecision(2))

// const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'))
// console.log(hundreds.toLocaleString('en-US'))


// //Maths******************************************************************
// console.log(Math.random()); //math.random() generate random number between 0 to 1
// console.log(Math.floor(Math.random()*10)+1); //generate random number between 0 to 10

// const max=10;
// const min=1;
// console.log(Math.floor(Math.random()*(max-min+1))+min); //generate random number between 0 to 10
// console.log(typeof Math)// Math is object
// console.log(typeof Number) //Number is function


//Dates***************************************************************
// let myDate=new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(typeof myDate) //Date is object
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())

// let mycreatedate=new Date(2023,0,23)
// console.log(mycreatedate)
// console.log(mycreatedate.toDateString()) // month  starts 0 in javascript
// let createdate= new Date(2023,0,13,5,3,2)
// console.log(createdate.toDateString())
// console.log(createdate.toLocaleString())

// let sodate=new Date ('01-14-2023')
// console.log(sodate.toLocaleString())

// let mytimestamp=Date.now()
// console.log(mytimestamp);// get value in form of millisecond you use Date.now()
// console.log(sodate.getTime())//you can use gettime() convert date in millisecond
// console.log(Math.floor(Date.now()/1000)); //divide by 1000 in (millisecond(Date.now())) you get value in second

// Array**************************************************************************************
// const myArr = [1,2,3,4,5,6,7,8,9]
// const myHeros = ['batman','robin','spiderman']
// const myArr2 = new Array(1,2,3,4,5)
// console.log(myArr[1])
// console.log(myArr2)


//Array methods******************************************************************************************
// myArr.push(10)//this value is added in last of array
// myArr.pop()//this value is removed from last of array
// myArr.unshift(11)//this value is added in first of array
// myArr.shift()//this value is removed from first of array
//myArr.reverse()//this reverse array
//myArr.sort()//this sort array
// console.log(myArr.includes(1))//this check array contains value or not
// console.log(myArr)
// console.log(myArr.indexOf(1))//this return index of value

// const newArr = myArr.join()//this join array in string
// console.log(newArr)

// slice,splice method****************************************************************************************************************

// console.log('a',myArr)
// const myn1 = myArr.slice(1, 3)// this slice array from 1 to 3 index not include 3 index
// console.log(myn1);
// console.log("B ", myArr);


// const myn2 = myArr.splice(1, 3)// this splice array from 1 to 3 index include 3 index
// console.log("C ", myArr);
// console.log(myn2);

//Array part2*****************************************************************************************************
// const marvel_heros = ["thor", "Ironman", "spiderman"]
// const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// const all_new_heros = [...marvel_heros, ...dc_heros]// spread operator

// console.log(all_new_heros);

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat(Infinity)// this flat array
// console.log(real_another_array);



// console.log(Array.isArray("Hitesh"))
// console.log(Array.from("Hitesh"))
// console.log(Array.from({name: "hitesh"})) // interesting

// let score1 = 100
// let score2 = 200
// let score3 = 300

// console.log(Array.of(score1, score2, score3));


//OBJECTS******************************************************************************************

// singleton
// Object.create

// object literals

// const mySym = Symbol("key1")


// const JsUser = {
//     name: "Hitesh",
//     "full name": "Hitesh Choudhary",
//     [mySym]: "mykey1",
//     age: 18,
//     location: "Jaipur",
//     email: "hitesh@google.com",
//     isLoggedIn: false,
//     lastLoginDays: ["Monday", "Saturday"]
// }

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

// JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
// JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

// JsUser.greeting = function(){
//     console.log("Hello JS user");
// }
// JsUser.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.name}`);
// }

// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

//OBJECT PART2******************************************************************************************

// const tinderUser = new Object()//THIS is a singleton object
//const tinderUser = {}//this is not singleton object

// tinderUser.id = "123abc"
// tinderUser.name = "Sammy"
// tinderUser.isLoggedIn = false

// console.log(tinderUser);

// const regularUser = {
//     email: "some@gmail.com",
//     fullname: {
//         userfullname: {
//             firstname: "hitesh",
//             lastname: "choudhary"
//         }
//     }
// }

// console.log(regularUser.fullname.userfullname.firstname);

// const obj1 = {1: "a", 2: "b"}
// const obj2 = {3: "a", 4: "b"}
// const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }
// const obj3 = Object.assign({}, obj1, obj2, obj4)// use of .assign method to combined two object or more in one object


// const obj3 = {...obj1, ...obj2}// use of spread operator to combined two object or more in one object
// console.log(obj3);


// const users = [
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
//     {
//         id: 1,
//         email: "h@gmail.com"
//     },
// ]

// users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


// const course = {
//     coursename: "js in hindi",
//     price: "999",
//     courseInstructor: "hitesh"
// }

// course.courseInstructor

// const {courseInstructor: instructor} = course

// console.log(courseInstructor);
// console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }//in json key and value in string

// [
//     {},
//     {},
//     {}
// ] //json in form of array


//Function******************************************************************************************




// function sayMyName(){
//     console.log("H");
//     console.log("I");
//     console.log("T");
//     console.log("E");
//     console.log("S");
//     console.log("H");
// }

// sayMyName()//excute function use ()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

// function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
//     return number1 + number2
// }

// const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);

//return ke bad kuch bhi code run nahi hoga
// function loginUserMessage(username = "sam"){
//     if(!username){
//         console.log("PLease enter a username");
//         return
//     }
//     return `${username} just logged in`
// }

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))


// function calculateCartPrice(val1, val2, ...num1){//... this is rest operator to get all the values in function
//     return num1
// }

// console.log(calculateCartPrice(200, 400, 500, 2000))

// const user = {
//     username: "hitesh",
//     prices: 199
// }

// function handleObject(anyobject){
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
// }

// handleObject(user)
// handleObject({
//     username: "sam",
//     price: 399
// })

// const myNewArray = [200, 400, 100, 600]

// function returnSecondValue(getArray){
//     return getArray[1]
// }

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));


//GLOBAL AND LOCAL SCOPE******************************************************************************************
//var c = 300
// let a = 300
// if (true) {
//     let a = 10
//     const b = 20
    // console.log("INNER: ", a);
    
// }



// console.log(a);
// console.log(b);
// console.log(c);


// function one(){
//     const username = "hitesh"

//     function two(){
//         const website = "youtube"
//         console.log(username);
//     }
//     // console.log(website);

//      two()

// }//CHIld function access parent function scope but parent function can't access child function scope

// one()

// if (true) {
//     const username = "hitesh"
//     if (username === "hitesh") {
//         const website = " youtube"
        // console.log(username + website);
    // }
    // console.log(website);
// }

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


// console.log(addone(5))

// function addone(num){
//     return num + 1
// }



// addTwo(5)
// const addTwo = function(num){
//     return num + 2
// }

// function fetch(A){
    
//     console.log(A);
// }

// fetch(7);


//This and arrow function***********************************************************

// const user = {
//     username: "hitesh",
//     price: 999,

//     welcomeMessage: function() {
//         console.log(`${this.username} , welcome to website`);
//         console.log(this);
//     }
    

// }

//  user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

// const chai =  () => {
//     let username = "hitesh"
//     console.log(this);
// }


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
//in arrow function if you use {} then 'return' keyword use inside {} , you use() then not use 'return' inside ()
//  const addTwo = (num1, num2) =>  num1 + num2
//  console.log(addTwo(1,2))

//  const addTwo = (num1, num2) => ( num1 + num2 )
//  console.log(addTwo(1,2))
// const addTwo = (num1, num2) => ({username: "hitesh"})


// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()


//iife function************************************************
// Immediately Invoked Function Expressions (IIFE)


// (function chai(){
//     // named IIFE
//     console.log(`DB CONNECTED`);
// })();

// ( (name) => {
//     console.log(`DB CONNECTED TWO ${name}`);
// } )('hitesh')


let sum=0;
for (let i = 0; i < 100000000; i++) {
    sum=sum + i;
    
}
console.log(sum)