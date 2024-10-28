/*eslint-env browser*/


document.addEventListener("DOMContentLoaded", employeeManagement);


function employeeManagement () {

    "use strict";
    var form1=document.querySelector("form");
    var tableBody = document.querySelector("tBody");
    var table1 = document.querySelector("table");
    var employeeList = [
        ["Sally Smith", "Quality Assurance", "3423"],
        ["Mark Martin", "VP Sales", "3346"],
        ["John Johnson", "Marketing", "3232"],
    ];

    form1.addEventListener("submit", addNewEmployee);
    table1.addEventListener("click", deleteRow);

    function addNewEmployee(ev) {
    "use strict";
        ev.preventDefault();
        var nameInput = document.getElementById("name").value;
        var titleInput = document.getElementById("Title").value;
        var extensionInput = document.getElementById("extension").value;
        if (!formValid(nameInput, titleInput, extensionInput)) { return; }
        tableBody.innerHTML +=`
            <tr>
                <td>${nameInput}</td>
                <td>${titleInput}</td>
                <td>${extensionInput}</td>
                <td><button class="deleteBtn">Delete</button></td>

            </tr>
        `;
        document.getElementById("tableCpat").innerHTML = "Showing " + employeeList.length + " employees.";
    }

    function deleteRow (ev) {
        if(!ev.target.classList.contains("deleteBtn")) {
            return;
        }

        var btnn = ev.target;
        var row = btnn.closest("tr");
        var items = row.cells;
        for (var i = 0; i < employeeList.length; i++) {
            if (items[0].textContent == employeeList[i][0] && items[1].textContent == employeeList[i][1] && items[2].textContent == employeeList[i][2]) {
                employeeList.splice(i, 1);
                break;
            }
        }

        row.remove();
        document.getElementById("tableCpat").innerHTML = "Showing " + employeeList.length + " employees.";
        console.log(employeeList);
    }

    
    
    function addEmployeeTable () {
        "use strict";

        var tableBody2 = document.querySelector("tBody");
        employeeList.forEach((employee, index) => {
            tableBody2.innerHTML += `
                        <tr>
                            <td>${employee[0]}</td>
                            <td>${employee[1]}</td>
                            <td>${employee[2]}</td>
                            <td><button class="deleteBtn">Delete</button></td>
                        </tr> 
                        `;
        });

        document.getElementById("tableCpat").innerHTML = "Showing " + employeeList.length + " employees.";
    }

   addEmployeeTable ();


function formValid(myName, hisTitle, emNum) {
    "use strict";
    let nameValid = false;
    let hisTitleValid = false;
    let emNumValid = false;

    //let myName = nameEm.value.trim();
    //let hisTitle = titleEM.value.trim();
    //let emNum = extension.value;
    var nameEm = document.getElementById("name");
    var titleEm = document.getElementById("Title");
    var extension = document.getElementById("extension");


    if (myName === "") {
        nameEm.nextElementSibling.textContent = "This field is required.";
        nameEm.nextElementSibling.style.setProperty("color", "red");
    }
    else {
        nameValid = true;
        nameEm.nextElementSibling.textContent = "";
    }

    if (hisTitle === "") {
        titleEm.nextElementSibling.textContent = "This field is required.";
        titleEm.nextElementSibling.style.setProperty("color", "red");
    }
    else {
        hisTitleValid = true;
        titleEm.nextElementSibling.textContent = "";
    }

    if (!isNaN(emNum) && emNum.length === 4 ) {
        emNumValid = true;
        extension.nextElementSibling.textContent = "";
    }
    else {
        emNumValid = false;
        extension.nextElementSibling.textContent = "This field is required.";
        extension.nextElementSibling.style.setProperty("color", "red");
    }

    if (nameValid && hisTitleValid && emNumValid) {
        employeeList.push([myName, hisTitle, emNum]);
        nameEm.value = "";
        titleEm.value = "";
        extension.value = "";
        return true;
    }
    return false;
}


}