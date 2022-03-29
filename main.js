// References
let form = document.querySelector("form");
let toDoInput = document.querySelector("#userInput");
let add = document.querySelector("#addButton");
let editButton = document.querySelector("#editButton");
let deleteButton = document.querySelector("#deleteButton");
let removeCompleted = document.querySelector("#completedButton");
let removeAll = document.querySelector("#removeButton");
let toDoList = document.querySelector("#todoList");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    let listItem = toDoInput.value
    let listDiv = document.createElement("div");
    listDiv.innerHTML = listItem;

    listDiv.addEventListener("click", function () {
        if (listDiv.style.textDecoration === "") {
            listDiv.style.textDecoration = "line-through";
        } else {
            listDiv.style.textDecoration = "";
        };
    });

    if (listItem !== "") {
        toDoList.appendChild(listDiv);
    }
    form.reset()
});

let editItem = false;
let deleteItem = false;

editButton.addEventListener("click", function () {
    editItem = true
})
deleteButton.addEventListener("click", function() {
    deleteItem = true;
})

toDoList.addEventListener("click", function(event) {
    if (editItem === true) {
        const edit = prompt("Edit:");
        event.target.innerHTML = edit;
        editItem = false;
    }

    if (deleteItem === true) {
        event.target.remove();
        deleteItem = false;
    }
})



removeCompleted.addEventListener("click", function () {
    const toDoAll = document.querySelectorAll("#todoList div");
    for (let i = 0; i < toDoAll.length; i++) {
        const items = toDoAll[i];
        if (items.style.textDecoration === "line-through") {
            items.remove();
        }
        
    }
});

removeAll.addEventListener("click", function () {
    const toDoAll = document.querySelectorAll("#todoList div");
    for (let i = 0; i < toDoAll.length; i++) {
        const items = toDoAll[i];
        items.remove();
        
    }
})