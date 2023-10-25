function convertChar(chars)
{
  let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowercase = "abcdefghijklmnopqrstuvwxyz";
  for(let i = 0 ; i < lowercase.length ; i++)
    {
      if(chars == uppercase[i])
        {
          return lowercase[i];
        }
    }

}
function convertword(word)
{
  let bag = "";
  for(let i = 0 ; i < word.length ; i++)
    {
      bag += convertChar(word[i]);
    }
  return bag;
}

function convertArray(arr)
{
  let array = [];
  let container = "";
  for(let i = 0 ; i < arr.length ; i++)
    {
      container+= convertword(arr[i])
      array.push(container);
      container = "";
    }
  console.log(array);
}
convertArray(["MA", "SA", "I", "SCH", "OOL"]);