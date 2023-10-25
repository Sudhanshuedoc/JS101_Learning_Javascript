function spacedashed(str)
{
  let bag = "";
  for(let i = 0 ; i < str.length ; i++)
    {
      if(str[i] == " ")
        {
          bag += "-";
        }
      else
        {
          bag+= str[i];
        }
    }
  console.log(bag);
}
spacedashed("Trust me i have never been even good at making even sum problem in programming lang but masai helped me a lot");