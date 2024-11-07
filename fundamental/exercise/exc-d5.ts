/* Day 5 - Exercise 1.1*/

let arr1 = [12, 5, 23, 18, 4, 45, 32];

let minArr = Math.min(...arr1);
let maxArr = Math.max(...arr1);

let lgth = arr1.length;
let i2 = 0;
let result1 = 0;

while (i2 < lgth) {
  result1 += arr1[i2];
  i2++;
}

let avg = result1 / lgth;

console.log(`lowest: ${minArr}, highest: ${maxArr}, average: ${avg}`);

/* Day 5 - Exercise 1.2*/

let arr6 = ["apple", "banana", "cherry", "date"];
// let concat1 = "";
// for (let i3 = 0; i3 < arr6.length; i3++) {
//   if (i3 == arr6.length - 1) concat1 += ",and " + arr6[i3];
//   else concat1 += arr6[i3] + ", ";
// }

// console.log(concat1);

const contatenate = (mp: string[]) =>
  console.log(
    mp.map((val, i) => (i == mp.length - 1 ? "and " + val : val)).toString()
  );

contatenate(["apple", "banana", "cherry", "date"]);

/* Day 5 - Exercise 1.3*/

// let arr7 = [5, 3, 1, 7, 2, 6];
// let arrsrt = arr7.sort();
// console.log(arrsrt[1]);

const arrsrt = (numbers: number[]) =>
  console.log(numbers.sort((a, b) => a - b)[1]);

arrsrt([5, 3, 1, 7, 2, 6]);

/* Day 5 - Exercise 1.4*/

let arr8 = [1, 2, 3, 4];
let newarr8 = [];
let x1 = 0;

for (let i4 = 0; i4 < arr8.length; i4++) {
  x1 += arr8[i4] + arr8.reverse()[i4];
  newarr8.push(x1);
  x1 = 0;
}

console.log(newarr8);

/* Day 5 - Exercise 1.5*/

let arr9 = [1, 2, 3, 4];
let newElement = 4;

if (!arr9.includes(newElement)) arr9.push(newElement);

console.log(arr9);

/* Day 5 - Exercise 2.1*/

// let arr10 = ["3", 1, "string", null, false, undefined, 2];

// let numb1 = arr10.filter((nomr) => (typeof nomr === "number" ? nomr : false));
// console.log(numb1[0]);

// let totl = "";
// for (let i5 = 0; i5 < numb1.length; i5++) {
//   totl += numb1[i5];
// }
// console.log(totl);

const sch = (mixed: any[]) =>
  console.log(
    mixed.reduce(
      (sum, element) => (typeof element == "number" ? sum + element : sum),
      0
    )
  );

sch(["3", 1, "string", null, false, undefined, 2]);

/* Day 5 - Exercise 2.2*/

const insrt = (max: number, ...int: number[]) =>
  console.log([...new Array(max)].map((n, i) => int[i]));

insrt(5, 5, 10, 24, 3, 6, 7, 8);

/* Day 5 - Exercise 2.3*/

const combn = (arr1: any[], arr2: any[]) => console.log(arr1.concat(arr2));

combn([1, 2, 3], [4, 5, 6]);

/* Day 5 - Exercise 2.4*/

const dupli = (numbers: number[]) =>
  console.log(
    numbers.reduce(
      (arr: number[], val: number) =>
        numbers.filter((n) => n == val).length > 1 && arr.indexOf(val) == -1
          ? [...arr, val]
          : arr,
      []
    )
  );
dupli([1, 2, 2, 2, 3, 3, 4, 5, 5]);

/* Day 5 - Exercise 2.5*/

const differ = (arr1: number[], arr2: number[]) =>
  console.log(
    arr1
      .concat(arr2)
      .reduce(
        (arr: number[], val: number, i, currArr) =>
          currArr.filter((n) => n == val).length == 1 && arr.indexOf(val) == -1
            ? [...arr, val]
            : arr,
        []
      )
  );

differ([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);

/* Day 5 - Exercise 2.6*/
