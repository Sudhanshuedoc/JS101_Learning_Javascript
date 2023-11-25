let arr = [];

let form = document.querySelector("form");
let names = document.getElementById("name");
let id = document.getElementById("doctor_id");
let spec = document.getElementById("specialization");
let exp = document.getElementById("experience");
let email = document.getElementById("email");
let mobile = document.getElementById("mobile");
let filter = document.getElementById("filter");
let tbody = document.querySelector("tbody");

filter.addEventListener("change", function () {
    masaiTable();
});

form.addEventListener("submit", function (e) {
    e.preventDefault();
    let obj = {};
    obj.input1 = names.value;
    obj.input2 = id.value;
    obj.input3 = spec.value;
    obj.input4 = exp.value;
    obj.input5 = email.value;
    obj.input6 = mobile.value;
    arr.push(obj);
    console.log(arr);
    tbody.innerHTML = null;

    masaiTable();
});

function deleteRow(index) {
    arr.splice(index, 1);
    masaiTable();
}

function masaiTable() {
    let filteredArr = arr;
    if (filter.value !== "All") {
        filteredArr = arr.filter(ele => ele.input3 === filter.value);
    }

    tbody.innerHTML = null;
    filteredArr.forEach((ele, index) => {
        let tr = document.createElement("tr");
        let td = document.createElement("td");
        let td1 = document.createElement("td");
        let td2 = document.createElement("td");
        let td3 = document.createElement("td");
        let td4 = document.createElement("td");
        let td5 = document.createElement("td");
        let td6 = document.createElement("td");
        let td7 = document.createElement("td");

        td.innerText = ele.input1;
        td1.innerText = ele.input2;
        td2.innerText = ele.input3;
        td3.innerText = ele.input4;
        td4.innerText = ele.input5;
        td5.innerText = ele.input6;

        if (parseInt(td3.innerText) > 5) {
            td6.innerText = "Senior";
        } else if (parseInt(td3.innerText) <= 1) {
            td6.innerText = "Fresher";
        } else {
            td6.innerText = "Junior";
        }

        td7.innerText = "Delete";
        td7.style.backgroundColor = "red";

        tr.append(td, td1, td2, td3, td4, td5, td6, td7);
        tbody.append(tr);

        td7.addEventListener("click", function () {
            deleteRow(index);
        });
    });
}
