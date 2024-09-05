let data = [];
let title = document.getElementById("title");
let descr = document.getElementById("descr");

//Firstly retrive the data in the array
Update();
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

    //update
    Update();
}

//Clear the input fields after every operation
function Clear() {
    title.value = "";
    descr.value = "";
}
//Update the values in the array
document.getElementById("uptodate").style = "display:none";
function Update() {
    document.querySelector("tbody").innerHTML = "";
    if (data.length >= 1) {
        for (let index = 0; index < data.length; index++) {
            document.querySelector("tbody").innerHTML += `<tr>
            <th scope="row">${index + 1}</th>
            <td>${data[index].tit}</td>
            <td>${data[index].des}</td>
            <td>
            <span class="material-symbols-outlined edit" onclick ="edited(${index})">edit</span>
            </td>
            <td>
            <span class="material-symbols-outlined delete" onclick ="deleted(${index})">
                delete
                </span>
            </td>
          </tr>`;
        };
    }
    else {
        document.querySelector("tbody").innerHTML = "<tr><th scope='row'></th><td></td><td><b>Record has no data</b></td><td></td><td></td></tr>";
    }
}