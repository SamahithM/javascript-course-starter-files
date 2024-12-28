const day = prompt("Enter the day of the week: ");
switch (day) {
    case "monday":
        alert("monday");
        break;
    case "tuesday":
        alert("tuesday");
        break;
    case "wednesday":
        alert("wednesday");
        break;
    case "thursday":
        alert("thursday");
        break;
    case "friday":
        alert("friday");
        break;
    case "saturday":
        alert("saturday");
        break;
    case "sunday":
        alert("sunday");
        break;
    default:
        alert("Not a valid day");
        break;
}



//  conditional and ternary operator

const age = prompt("Enter your age: ");

age >= 18 ? alert("You are an adult ") : alert("You are a child");
//condition ? true : false  

