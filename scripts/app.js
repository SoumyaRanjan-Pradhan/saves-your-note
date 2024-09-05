let data = [];
let title = document.getElementById("title");
let descr = document.getElementById("descr");
//Add the values in the array
document.getElementById("title").focus();
function myFun() {
    if (title.value != "" && descr.value != "") {
        data.push({ tit: title.value, des: descr.value });
        console.log(data);
        Clear();
    }
    else {
        alert("Input field should be filled!!");
    }
}

//Clear the input fields after every operation
function Clear() {
    title.value = "";
    descr.value = "";
}