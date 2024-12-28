const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);




/* Write your code below. Good luck! 🙂 */

if (BMIMark > BMIJohn) {
    console.log("Mark's BMI is higher than John's!")
    console.log(`Mark's BMI (${BMIMarkM}) is higher than John's! (${BMIJohn})`)
    
}else {
    console.log("John's BMI is higher than Mark's!" )
    console.log(`John's (${BMIJohn}) is higher than Mark's (${BMIMark})`)
}



//  challenge 2 

const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 123) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas) {
    console.log("Dolphins win the trophy 🏆")
} else if (scoreKoalas > scoreDolphins) {
    console.log("Koalas win the trophy 🏆")
} else if (scoreDolphins === scoreKoalas) {
    console.log("Both win the trophy!")
} else {
    console.log("No one wins the trophy")
}       


//  challenge 3
const bill =    275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + givetip}`)
