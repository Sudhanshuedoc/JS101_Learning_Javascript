function checkcase(charac)
{
  let lowercase = "abcdefghijklmnopqrstuvwxyz";
  for(var i = 0 ; i < lowercase.length ; i++)
    {
      if(charac === lowercase[i])
        {
          return true;
        }
    }
          return false;
}

if(checkcase("Z") == true)
{
  console.log("Small Case");
}
else
{
  console.log("Upper Case");
}