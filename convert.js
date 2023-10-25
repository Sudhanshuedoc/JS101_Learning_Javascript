let lower = "abcdefghijklmnopqrstuvwxyz";
let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let array = ["MA", "SA", "I", "SCH", "OOL"]
let bag = "";
let arr = [];
for (let i = 0; i < array.length; i++) {
  let str = array[i];
  for (let j = 0; j < str.length; j++) {
    for (let k = 0; k < lower.length; k++) {
      if (str[j] == upper[k]) {
        bag = bag + lower[k];
      }
    }
  }
}
  arr.push(bag);

console.log(arr);