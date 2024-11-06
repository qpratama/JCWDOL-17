/* Find area (luas) of Rectangle */
/* L = 5, W = 3 */

let l = 5;
let w = 3;
let area = l * w;

console.log(`Area of rectangle is ${area}`);

/* Find parameter (keliling) of Rectangle */
/* L = 5, W = 3 */

let perimeter = 2 * (l + w);

console.log(`Perimeter of rectangle is ${perimeter}`);

/* Find diameter, circumference (keliling), area of circle */
/* radius = 5 */

let rCircle = 5;
let dCircle = 2 * rCircle;
let cCircle = 2 * Math.PI * rCircle;
let aCircle = Math.PI * Math.pow(rCircle, 2);

console.log(
  `Diameter: ${dCircle}, Circumference: ${cCircle.toPrecision(
    6
  )}, Area: ${aCircle.toPrecision(5)}`
);

/* Find angles of triangle */
/* a = 80, b = 65*/

let a = 80;
let b = 65;
let c = 180 - a - b;

console.log(c);

/* Convert days to years, months, days */
/*  400 days */

let d = 50;
let year, month, day;
year = Math.floor(d / 360);
month = Math.floor(d / 30 - year * 12);
day = d - year * 360 - month * 30;

console.log(`${d} = ${year} tahun, ${month} bulan, ${day} hari`);

/* Get difference between dates in days */
/* date1 = 2022-01-20, date2 = 2022-01-22 */

let date1 = new Date("2022-11-20");
let date2 = new Date("2022-1-22");

let ddiff = date2.getDate() - date1.getDate();

console.log(ddiff);
