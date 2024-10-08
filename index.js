

//add event listener for form

document.getElementById("addItemBtn").addEventListener("click", addTodoItem);

/**
 *Takes in a string, content and appends a TODO to the listContainer.
 */
function addTodoItem(){
    let content = document.getElementById("contentText").value;
    console.log(`Starting addTodoItem function with content: ${content}`);
    let orderedList = document.getElementById("todoList");

    //create all the elements needed for a todo item
    const newListItem = document.createElement('li');

    //add the relevant fields for each todo item property
    //newItem.textContent = content;

    //paragraph
    const newP = document.createElement('p');
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


function removeTodoItem(){

}

