function swap(char)
{
  let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowercase = "abcdedghijklmnopqrstuvwxyz";
  for(let i = 0 ; i < uppercase.length ; i++)
    {
      if(char == uppercase[i])
        {
          return lowercase[i];
        }
      else if(char == lowercase[i])
        {
          return uppercase[i];
        }
    }
}

function convert(string)
{
  let bag = "";
  for(let i = 0 ; i < string.length ; i++)
    {
      let new_char = string[i];
      bag+= swap(new_char);
    }
  console.log(bag);
}
convert("tEST");