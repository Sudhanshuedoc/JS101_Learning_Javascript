function difference (a,b)
{
  return a-b;
}
// difference function 


//fucntion to find absolute difference 
function absDiff()
{
  let diff = difference(12,4);
  if(diff < 0)
  {
    diff = diff * -1;
    
  }
  return diff;
}
console.log(absDiff());