let calcAverage = (s1, s2, s3) => (s1 + s2  + s3) / 3;

let scoreDolphins = calcAverage(85, 54, 41);
let scoreKoalas = calcAverage(65, 54, 49);

let checkWinner = function(avgDolphins, avgKoalas) {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log(`No team wins...(${avgDolphins} vs. ${avgKoalas})`);
    }
}

console.log(checkWinner(scoreDolphins,scoreKoalas));

