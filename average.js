function average(number) {
  if (number.length === 0) {
    return 0;
  } else {
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
      sum += number[i];
    }
    return sum / number.length;
  }
}
  
console.log(average([1,2,3,4,5]));