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

//edit and update the values in the array
function edited(index) {
    console.log("edited " + index);
    title.value = data[index].tit;
    descr.value = data[index].des;
    document.getElementById("title").focus();
    document.getElementById("add").style = "display:none";
    document.getElementById("uptodate").style = "display:block";
    document.getElementById("uptodate").addEventListener("click", () => {
        console.log(title.value);
        console.log(descr.value);
        if (index != null) {
            console.log("index" + index);
            console.log(title.value);
            document.getElementById("add").style = "display:block";
            console.log("updated" + index);
            data[index].tit = title.value;
            data[index].des = descr.value;
            index = null;
            Update();
            Clear();
        }
        else { console.log("else:" + index) }
        console.log(data);
        document.getElementById("uptodate").style = "display:none";
    });
}

//delete the values in the array
function deleted(index) {
    data.splice(index, 1);
    Update();
}

// Searching titles from array
let search_field = document.getElementById("search");
search_field.addEventListener("keyup", () => {
    let search_value = search_field.value.toLowerCase();

    document.querySelector("tbody").innerHTML = "";
    if (search_value.length >= 1) {
        data.forEach((element, index) => {
            let letter = element.tit.toLowerCase();
            if (letter.length >= search_value.length) {
                let alz = "";
                for (let i = 0; i < search_value.length; i++) {
                    alz += letter.charAt(i);
                    if (alz == search_value) {
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
                    }
                }
            }
        });
    }
    else {
        Update();
    }

})