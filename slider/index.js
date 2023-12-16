let value = 0;
let clear = null;

let imgarr = ["https://images.pexels.com/photos/3052361/pexels-photo-3052361.jpeg?auto=compress&cs=tinysrgb&w=600",
"https://images.pexels.com/photos/1496373/pexels-photo-1496373.jpeg?auto=compress&cs=tinysrgb&w=600",
"https://images.pexels.com/photos/3694706/pexels-photo-3694706.jpeg?auto=compress&cs=tinysrgb&w=600",
"https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&w=600",
"https://images.pexels.com/photos/2444429/pexels-photo-2444429.jpeg?auto=compress&cs=tinysrgb&w=600",
"https://images.pexels.com/photos/2670898/pexels-photo-2670898.jpeg?auto=compress&cs=tinysrgb&w=600",
"https://images.pexels.com/photos/2310641/pexels-photo-2310641.jpeg?auto=compress&cs=tinysrgb&w=600",
"https://images.pexels.com/photos/4622893/pexels-photo-4622893.jpeg?auto=compress&cs=tinysrgb&w=600",
"https://images.pexels.com/photos/2310713/pexels-photo-2310713.jpeg?auto=compress&cs=tinysrgb&w=600",
"https://images.pexels.com/photos/3222686/pexels-photo-3222686.jpeg?auto=compress&cs=tinysrgb&w=600",
"https://images.pexels.com/photos/3016320/pexels-photo-3016320.jpeg?auto=compress&cs=tinysrgb&w=600",
"https://images.pexels.com/photos/2884867/pexels-photo-2884867.jpeg?auto=compress&cs=tinysrgb&w=600"]

let image = document.querySelector("img")
image.setAttribute('src' , imgarr[value])
next = document.getElementById("next")
previous = document.getElementById("previous")
next.addEventListener('click',function()
{
    if(value >= imgarr.length - 1)
    {
        value = 0;
    }
    
    image.setAttribute("src" , imgarr[value])
    value++;
    console.log("am being clicked")
});
previous.addEventListener("click" , function()
{
    if(value <= 0)
    {
        value = imgarr.length - 1;
    }
    
    image.setAttribute("src" , imgarr[value])
    value--;
    
    
    
    
})
let play = document.getElementById("play")
play.addEventListener('click' , function()
{
    if(clear != null)
    {
        clearInterval(clear)
    }
    clear = setInterval(function()
    {
        if(value >= imgarr.length - 1)
        {
            value = 0;
        }
        value++;
        image.setAttribute('src' , imgarr[value])
    }, 1000)
})
 let pause = document.getElementById("pause");
 pause.addEventListener("click" , function ()
 {
    clearInterval(clear)
 })


