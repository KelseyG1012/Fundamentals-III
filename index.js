

//add event listeners
document.getElementById("todoContainer").addEventListener("click", function(event){
    if (event.target.id === "addItemBtn") {
        addTodoItem();
    }
    if(event.target.id === "removeItemBtn"){
        const parent = event.target.parentElement;
        const allListItems = Array.from(document.querySelectorAll("#todoList li"));
        const index = allListItems.indexOf(parent);

        removeTodoItem(index);
    }
    if(event.target.id === "checkbox"){
        let content = document.getElementByClassName("listItemContent");
        let cross =document.createElement("del");
        content.appendChild(cross);
    }
});

/**
 *Takes in a string, content and appends a TODO to the todoList.
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

    // Clear text box field after adding task
    
}

/**
 * Takes in int index, the number of the list item to remove from todoList
 */
function removeTodoItem(index){
    //let orderedList = document.querySelectorAll("todoList");
    let orderedList = document.getElementById("todoList");

    let items = orderedList.querySelectorAll("li");
    let item = items[index.toString()];
    //console.log(`Index is ${index} with contents ${orderedList[index]}`);
    if (item) {
      console.log(`Index is ${index} with contents ${JSON.stringify(item)}`);
      orderedList.removeChild(item);
    } else {
      console.log(`it didn't work ${index} ${JSON.stringify(items)} ${items}`);
    }
}
// newRemoveBtn.addEventListener('click', () => {
//   orderedList.removeChild(newListItem);
// });
