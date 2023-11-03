let forms = document.querySelector("form");
let tasks = document.getElementById("task");
let priorities = document.getElementById("priority");
forms.addEventListener("submit", function (e) {
    e.preventDefault();
    let obj = {};
    obj.input1 = tasks.value;
    obj.input2 = priorities.value;
    console.log(obj)
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    td3.innerText = "★★★★★"
    let thead = document.querySelector("thead");
    td.innerText = obj.input1;
    td2.innerText = priorities.value;
    if (td2.innerText == "High") {
        td3.innerText = "★★★★★"
    }
    else if (td2.innerText == "Low") {
        td3.innerText = "★"
    }
    tr.append(td, td2, td3)
    thead.append(tr);


})