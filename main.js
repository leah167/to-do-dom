// References
let form = document.querySelector("form");
let toDoInput = document.querySelector("#userInput");
let add = document.querySelector("#addButton");
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



removeAll.addEventListener("click", function () {
    const toDoAll = document.querySelectorAll("#todoList div");
    for (let i = 0; i < toDoAll.length; i++) {
        const items = toDoAll[i];
        items.remove();
        
    }
})