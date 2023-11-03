let form = document.querySelector("form");
let names = document.getElementById("name");
let id = document.getElementById("employeeID");
let depart = document.getElementById("department");
let exp = document.getElementById("exp");
let email = document.getElementById("email");
let mobile = document.getElementById("mbl");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    let tr = document.createElement("tr")
    let td = document.createElement("td")
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    let td3 = document.createElement("td")
    let td4 = document.createElement("td")
    let td5 = document.createElement("td")
    let td6 = document.createElement("td")
    let thead = document.querySelector("thead")
    td.innerText = names.value;
    td1.innerText = id.value;
    td2.innerText = depart.value;
    td3.innerText = exp.value;
    td4.innerText = email.value;
    td5.innerText = mobile.value;
    if (parseInt(td3.innerText) > 5) {
        td6.innerText = "Senior"
    }
    else if (parseInt(td3.innerText) <= 1) {
        td6.innerText = "Fresher"
    }
    if (parseInt(td3.innerText) >= 2 && parseInt(td3.innerText) < 5) {
        td6.innerText = "Junior"
    }
    tr.append(td, td1, td2, td3, td4, td5, td6);
    thead.append(tr);
})