/* Check whether the number is odd or even */
/* 25 -> odd, 2 -> even */

let nx = 21;

console.log(nx % 2 == 0 ? `${nx} -> even number` : `${nx} -> odd number`);

/* Check whether the number is prime number or not */

n = 15;
let isPrimex = n > 1 ? true : false;
for (let i = 2; i < n; i++) {
  if (n % i == 0) {
    isPrimex = false;
  }
}
console.log(isPrimex);

/* sum the number from 1 to n */

let mul = 0;
let angk = 5;

for (let i = 1; i <= angk; i++) {
  mul += i;
}
console.log(mul);

/* find factorial of a number */
/* 4! = 4 x 3 x 2 x 1 = 24 */

let angk1 = 6;
let strt = 1;
for (let i = 1; i <= angk1; i++) {
  strt *= i;
}
console.log(strt);

/* print the first N fibonacci numbers */
/* 15 -> 0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610 */

let fstrt = 0;
let sstrt = 1;
let fnmbr = 15;
let nexterm;

for (let i = 1; i < fnmbr; i++) {
  nexterm = fstrt + sstrt;
  fstrt = sstrt;
  sstrt = nexterm;
}

console.log(nexterm);
