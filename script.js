// fetching the elements from html
const inputField = document.querySelector("#inputField");
const addButton = document.querySelector("#addButton");
const toDoList = document.querySelector("#toDoList");

// registers when button is clicked and activates a function
addButton.addEventListener("click", function() {
    console.log("works");

    // creating a variable storing the value of another variable
    // taking the global cariable inputField and using the method .value to fetch a value stored in a new variable
    const inputFieldValue = inputField.value;
    console.log(inputFieldValue);

    // creates a new element to the list with the content from input after button press.
    const toDoItem = document.createElement("li");
    toDoItem.textContent = inputFieldValue;
    toDoList.appendChild(toDoItem);
});