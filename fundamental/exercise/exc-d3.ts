/* Display the multiplication table */
/* number -> 9 */

let nu = 9;
let lim = 10;
let reslt;
for (let i = 1; i <= lim; i++) {
  reslt = nu * i;
  console.log(`${nu} x ${i} = ${reslt}`);
}

/* check whether a string is a palindrome or not */
/* str = "madam" */

let kt: string = "babab";
let hsln = "";

for (let i = 0; i < kt.length; i++) {
  if (kt.charAt(kt.length - 1 - i) == kt.charAt(i)) {
    hsln += `${kt.charAt(i)}`;
  }
}
if (hsln == kt) console.log(`${kt} -> palindrome`);
else console.log(`${kt} -> not palindrome`);

/* convert cm to km */

let numr = 100000;
let conv = numr / 100000;

console.log(`${numr} = ${conv} km`);

/* convert number as currency */
/* 1000 -> Rp 1.000,00 */

let numr1 = 1000;
let rph = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
}).format(numr1);

console.log(rph);

/* remove given string from a string */
/* str = "Hello world", given = "ell" */

let str1 = "Hello world";
let srch = str1.replace("ell", "");

console.log(srch);

/* capitalize the first letter of each word */
/* "hello world" -> "Hello World" */

let str2 = "hello world";
let upcs = "";

for (let i = 0; i < str2.length; i++) {
  if (i == 0 || str2.charAt(i - 1) == " ") upcs += str2.charAt(i).toUpperCase();
  else upcs += str2.charAt(i).toLowerCase();
}
console.log(upcs);

/* swap the case of each character */
/* The QuiCk BrOwN Fox -> tHE qUIcK bRoWn fOX */

let str3 = "The QuiCk BrOwN Fox";
let swapx = "";

for (let i = 0; i < str3.length; i++) {
  if (str3.charAt(i) == str3.charAt(i).toUpperCase() || str3.charAt(i) == " ")
    swapx += str3.charAt(i).toLowerCase();
  else swapx += str3.charAt(i).toUpperCase();
}
console.log(swapx);

/* find the largest of two given integers */

const bil = (numr2: number, numr3: number) => {
  if (numr2 > numr3) console.log(numr2);
  else console.log(numr3);
};
bil(27, 50);

/* sort numbers */

const bilng = [42, 27, 18];
bilng.sort();

console.log(bilng);

/* 1 = string, 2 = number, 3 = others data type */

let wrd = "hello";

if (typeof wrd === "string") console.log(1);
else if (typeof wrd === "number") console.log(2);
else console.log(3);

/* change every given letter to "*" */
let lettr = "a";
let lettrUp = lettr.toUpperCase();
let final = "";
const lttr = (ax: string) => {
  for (let i = 0; i < ax.length; i++) {
    if (ax.charAt(i) == lettrUp) final += ax.charAt(i).replace(lettrUp, "*");
    else if (ax.charAt(i) == lettr) final += ax.charAt(i).replace(lettr, "*");
    else final += ax.charAt(i);
  }
};
lttr("An apple a day keeps the doctor away");
console.log(final);
