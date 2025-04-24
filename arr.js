const input=[2,3,4,5,6];

//solution

// const newArray=[];
// for (let i = 0; i < input.length; i++) {
//     newArray.push(input[i] * 2)
    
// }
// console.log(newArray)


//other solution


// const ans=input.map(function transform(i){
//     return i * 2;
// });
// console.log(ans)


const ans=input.filter(function (n){
    if (input % 2 == 0) {
        return true;
    }else{
        return false;
}
})
console.log(ans)