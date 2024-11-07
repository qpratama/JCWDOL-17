/* function declaration */

function squre(nomor: number) {
  return nomor * nomor;
}
console.log(squre(10)); // call function

/*function expression */

var dclr = function (nomor2: number) {
  return nomor2 + nomor2;
};
console.log(dclr(4));

/* rest parameter */

function rstprmtr(a: string, b: string, ...sisa: string[]) {
  console.log(a);
  console.log(b);
  console.log(sisa);
}
rstprmtr("1", "2", "3", "4", "5");

/////////////////////////////
/* looping array built in method */
/////////////////////////////

/* for each */

let nama: string[] = ["ronald", "john", "andrew"];
let nama2: string[] = ["ronaldowati", "naruto"];
let gabungnama: string[] = nama.concat(nama2);

// console.log(gabungnama);

gabungnama.forEach((nama3, ix, arrx) => {
  //console.log(nama3, "index ke-", ix, arrx);
  console.log(ix, nama3);
});
// for each tidak memiliki return

const addit: string[] = ["jordan", "dewa"];

gabungnama.concat(addit).forEach((nama4, ixx) => {
  console.log(ixx, nama4);
});

/* map */
// bedanya sm for each, kalau map ada return

const lpmp = gabungnama.map((nama5, ixs, urr) => nama5 + ixs);
console.log(lpmp);

/*filter */

const lpfltr = gabungnama.concat(addit).filter((nama6, i2) => {
  if (i2 % 2) return true;
});
console.log(lpfltr);

const nomooor: number[] = [1, 2, 3, 4, 5, 6];
const genap1: number[] = nomooor.filter((nomr) => (!(nomr % 2) ? true : false));
const ganjil1: number[] = nomooor.filter((nomr) => (nomr % 2 ? true : false));

console.log(genap1);
console.log(ganjil1);

/* cara 1
const avg2 = (noms: number[]) => {
  const min1 = Math.min(...noms);
  const max1 = Math.max(...noms);
  let avg = 0;
  for (let i = 0; i < noms.length; i++) {
    avg += noms[i];
  }

  console.log(min1, max1, avg / noms.length);
};
*/
const avg2 = (nooms: number[]) =>
  console.log((nooms.reduce((sum, n) => sum + n, 0) / nooms.length).toFixed(4));

avg2([12, 5, 23, 18, 4, 45, 32]);
