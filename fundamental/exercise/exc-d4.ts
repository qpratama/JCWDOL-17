/* Day 4 - Exercise 1 */

let numbr = 5;
let nom = "";

for (var i1 = 1; i1 < numbr; i1++) {
  for (var j1 = 0; j1 < i1; j1++) {
    nom += `0${i1 + j1} `;
  }
  nom += "\n";
}

console.log(nom);

/* Day 4 - Exercise 2 */

let limits = 0;
var n1 = 1;
while (n1 <= limits) {
  if (n1 == 3) {
    console.log("Fizz");
  } else if (n1 == 5) {
    console.log("Buzz");
  } else if (n1 % 15 == 0) {
    console.log("FizzBuzz");
  }
  console.log(n1);
  n1++;
}

/* Day 4 - Exercise 3 */

var weight = 100;
var height = 180;
var BMI = weight / Math.pow(height / 100, 2);

if (BMI < 18.5) {
  console.log(`${BMI} = less weight`);
} else if (BMI >= 18.5 && BMI <= 24.9) {
  console.log(`${BMI} = ideal`);
} else if (BMI >= 25 && BMI <= 29.9) {
  console.log(`${BMI} = overweight`);
} else if (BMI >= 30 && BMI <= 39.9) {
  console.log(`${BMI} = very overweight`);
} else {
  console.log(`${BMI} = obesity`);
}

/* Day 4 - Exercise 4 */

const arry: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evennumb: number[] = arry.filter((number) =>
  !(number % 2) ? true : false
);

console.log(evennumb);

/* Day 4 - Exercise 5*/

let kata = "Hello World";
let jdarry = kata.split(" ");

console.log(jdarry);
