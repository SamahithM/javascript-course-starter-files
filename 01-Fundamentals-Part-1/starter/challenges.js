const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);




/* Write your code below. Good luck! 🙂 */

if (BMIMarkM > BMIJohn) {
    console.log("Mark's BMI is higher than John's!")
    console.log(`Mark's BMI (${BMIMarkM}) is higher than John's! (${BMIJohn})`)
    
}else {
    console.log("John's BMI is higher than Mark's!" )
    console.log(`John's (${BMIJohn}) is higher than Mark's (${BMIMark})`)
}
