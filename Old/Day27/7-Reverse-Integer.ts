function reverse(x: number): number {
  let num = 0;
  if (x < 0) num = -Number(x.toString().split("").slice(1).reverse().join(""));
  else num = Number(x.toString().split("").reverse().join(""));
  if (num < -(2 ** 31) || num > 2 ** 31 - 1) return 0;
  else return num;
}
