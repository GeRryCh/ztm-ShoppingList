var button = document.getElementById("enter")
var input = document.getElementById("userInput")
var ul = document.querySelector("ul")

function inputLength() {
    return input.value.length
}

function createListItem() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value))
    ul.appendChild(li);
    input.value = "";
    createDeleteButtonFor(li)
}

function createDeleteButtonFor(element) {
    var deleteButton = document.createElement("button")
    var deleteText = document.createTextNode("Delete")
    deleteButton.appendChild(deleteText)
    deleteButton.addEventListener("click", deleteItem)
    // Add Button to List Item
    element.appendChild(deleteButton)
}

// Add Item
function addItemToListAfterClick() {
    if (inputLength() > 0) {
        createListItem()
    }
}

function addItemToListAfterKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) {
        createListItem()
    }
}

// Complete Item
function deleteItem(event) {
    var li = event.target.parentElement
    li.remove()
}

function toggleDone(event) {
    //clicked on ul
    if (!(event.target && event.target.matches("li"))) { return }
    //clicked on li
    var li = event.target
    
    if (li.childNodes.length == 1) {
        createDeleteButtonFor(li)
    }

    li.classList.toggle("done")
}

button.addEventListener("click", addItemToListAfterClick)

input.addEventListener("keypress", addItemToListAfterKeypress)

ul.addEventListener("click", toggleDone)