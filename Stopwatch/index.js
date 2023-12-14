let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;
let counter = document.querySelector("#counter")
let timer = null;

 
function stopwatch()
{
    millisecond++
    if(millisecond == 100)
    {
        millisecond = 0;
    second++;
    if(second == 60)
    {
        second = 0;
        minute++;
        if(minute == 60)
        {
            minute = 0;
            hour++;
        }
    }
}
    let h = hour < 10 ? "0" + hour : hour;
    let m = minute < 10 ? "0" + minute : minute;
    let s = second < 10 ? "0" + second : second;
    let ms = millisecond < 10 ? "0" + millisecond : millisecond; 

    counter.textContent = `${h} : ${m} : ${s} : ${ms}`;
}

function startwatch()
{
    if(timer != null)
    {
        clearInterval(timer)
    }
    timer = setInterval(stopwatch , 10);
}

function watchstop()
{
    clearInterval(timer)
}
function resetwatch()
{
    clearInterval(timer)
   hour = 0;
   minute = 0;
   second =  0;
   millisecond = 0;
    counter.textContent = `00 : 00 : 00 : 00`;

}