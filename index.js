let todo_states = [0, 0, 0, 0];

//add event listeners
document.getElementById("todoContainer").addEventListener("click", function(event){
    const parent = event.target.parentElement;
    const contentList = Array.from(document.querySelectorAll("#todoList li"));
    const index = contentList.indexOf(parent);

    if (event.target.id === "addItemBtn") {
        addTodoItem();
    }
    if(event.target.id === "removeItemBtn"){
        removeTodoItem(index);
    }
    if(event.target.id === "checkbox"){
        console.log(`${todo_states} and index ${index}`);
        let contents = document.querySelectorAll(".listItemContent");
        let content = contents[index.toString()];
        let curr_content_html = content.innerHTML;
        if(todo_states[index] === 0){
            content.innerHTML = "<del>"+curr_content_html+"</del>";
            todo_states[index] = 1;
        } else if(todo_states[index] === 1){
            let new_content_html = curr_content_html.replace("<del>", '');
            new_content_html = new_content_html.replace("</del>", "");
            content.innerHTML = new_content_html;
            todo_states[index] = 0;
        }
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
    newP.classList.add("listItemContent");
    let content = document.getElementById("contentText").value;
    newP.textContent = content;


    //checkbox
    const newCheckBox = document.createElement('input');
    //newCheckBox.classList.add("checkbox");
    newCheckBox.id = "checkbox"
    newCheckBox.type = "checkbox";
    newCheckBox.value = "check";

    //button
    const newRemoveBtn = document.createElement('button');
    //newRemoveBtn.classList.add("removeBtn");
    newRemoveBtn.id = "removeItemBtn"
    newRemoveBtn.type = "button";
    newRemoveBtn.textContent = "X";

    //add all todo list elements to the list item
    newListItem.appendChild(newP);
    newListItem.appendChild(newCheckBox);
    newListItem.appendChild(newRemoveBtn);


    //add list item to the todo list
    orderedList.appendChild(newListItem);

    // Clear text box field after adding task
    document.getElementById("contentText").value = '';

    todo_states.push(0);
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

    todo_states.splice(index, 1);
}
