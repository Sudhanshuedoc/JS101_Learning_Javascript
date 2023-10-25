function prime(number)
{
  let count = 0; 
  for(let i = 1 ; i <= number ; i++)
    {
      if(number % i === 0)
        {
          count++;
        }
    }
  if(count === 2)
    {
      return true;
    }
  else{
    return false;
  }
  
  
}
function primeLimit(limit)
{
  for(let i = 2 ; i <= limit ; i++)
    {
      if(prime(i))
        {
          console.log(i);
        }
    }
}
primeLimit(100)