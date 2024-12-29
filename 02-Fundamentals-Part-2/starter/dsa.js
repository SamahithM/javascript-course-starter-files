// arrays

const friends = ['Michael', 'Steven', 'Peter'];

// console.log(friends.length);



let calcAge = function(birthYear) {
    return 2037 - birthYear;
}

const years = [1990, 1967, 2002, 2010, 2018];
for(let year = 0; year < years.length;year++) {
    console.log('your age is '+ calcAge(years[year]));
}

