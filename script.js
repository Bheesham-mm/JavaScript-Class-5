// var numberOfpage  = 50;

// var page1 = 8;
// var page2 = 8;
// var page3 = 8;
// var page4 = 8;
// var page5 = 8;

// var totalPages = page1+page2+page3+page4+page5;

// console.log(totalPages);
// var scores = 50;

var q1 = prompt("Where do  you live")// mithi
var q2 = prompt("in wich class do you read") //metric
var q3 = prompt("Do you Know web development") // yes

var score1 = 1;
var score2 = 2;
var score3 = 3;

var totalScore = 0;

if (q1 === "mithi") {
    totalScore++;
}
if (q2 === "metric") {
    totalScore++;
}
if (q3 === "yes") {
    totalScore++;
}
console.log(totalScore);