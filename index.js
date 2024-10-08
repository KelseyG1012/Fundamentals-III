

//add event listener for form

document.getElementById("todoContainer").addEventListener("click", function(event){
    if (event.target.id === "addItemBtn") {
        //console.log("add item");
        addTodoItem();
    }
    if(event.target.id === "removeBtn"){
        //console.log("remove item");
        const parent = event.target.parentElement;
        const allListItems = Array.from(document.querySelectorAll("#todoList li"));
        const index = allListItems.indexOf(parent) + 1; 

        removeTodoItem(index);
    }
});

/**
 *Takes in a string, content and appends a TODO to the listContainer.
 */
function addTodoItem(){
    let orderedList = document.getElementById("todoList");

    //list item to hold paragraph, checkbox, button
    const newListItem = document.createElement('li');

    //paragraph
    const newP = document.createElement('p');
    let content = document.getElementById("contentText").value;
    newP.textContent = content;


    //checkbox
    const newCheckBox = document.createElement('input');
    newCheckBox.classList.add("checkbox");
    newCheckBox.type = "checkbox";
    newCheckBox.value = "check";

    //button
    const newRemoveBtn = document.createElement('button');
    newRemoveBtn.classList.add("removeBtn");
    newRemoveBtn.type = "button";
    newRemoveBtn.textContent = "remove";

    //add all todo list elements to the list item
    newListItem.appendChild(newP);
    newListItem.appendChild(newCheckBox);
    newListItem.appendChild(newRemoveBtn);


    //add list item to the todo list
    orderedList.appendChild(newListItem);
}


function removeTodoItem(index){
    console.log(index);
    let listItem = document.getElementById("listContainer").children[index];

}

