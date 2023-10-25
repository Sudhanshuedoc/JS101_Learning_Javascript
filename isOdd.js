function isOdd(num) {
  if (num % 2 === 0) {
    return false;
  } else {
    return true;
  }
}

function printOddLimit(limit) {
  for(let i = 0 ; i <= limit ; i++)
    {
      if(isOdd(i))
      {
        console.log(i);
      }
    }
}
printOddLimit(10);

  