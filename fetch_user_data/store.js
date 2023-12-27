let profile = document.querySelector("#profile");

let btn = document.querySelector("button")
btn.addEventListener("click",() => {
    function getdata(datas) {
        console.log(datas.data[0].email)
        for(let i = 0 ; i < datas.data.length ;i++)
        {
            // console.log(datas.data[i].email)
            // console.log("hi")
            let realData = datas.data[i];
            //creating image
            let profilecard = document.createElement("div");
            profilecard.className = "profilecard"
            let image = document.createElement("img");
            image.src = realData.avatar;
            let para1 = document.createElement('p');
            para1.innerText = realData.first_name;
            let para2 = document.createElement('p');
            para2.textContent = realData.email;
            profilecard.append(image)
            profilecard.append(para1)
            profilecard.append(para2)
            profile.append(profilecard)
    
            console.log(realData)
        }
        
    }
    fetch("https://reqres.in/api/users?page=2").then((res) => {
        return res.json()
    }).then((respons) => {
        getdata(respons);
    }).catch((fail) => {
        console.log("error")
    })
})


