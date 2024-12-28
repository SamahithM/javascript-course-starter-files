// type conversion 
// manual type changes

let inputYear = "1991"
console.log(Number(inputYear))


//type coersion 
// js changes types in backend 

console.log("i am " + 23 + "years old ")
console.log("27" * 23 )
console.log("23" / "2")
console.log("23" > "18")

//etc 

// 5 falsy values: 0, '', undefined, null, NaN
console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean('Jonas'))
console.log(Boolean({}))
console.log(Boolean(''))

const money = 0
if(money){
    console.log("dont spend it all")         
}
else{   
    console.log("you should get a job")
}       