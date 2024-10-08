

//add event listener for form
document.getElementById("submitForm").addEventListener("submit", addTodoItem(document.getElementById("submitContent").value));

/**
 *Takes in a string, content and appends a TODO to the listContainer.
 */
function addTodoItem(content){
    console.log(`Starting addTodoItem function with content: ${content}`);
}

