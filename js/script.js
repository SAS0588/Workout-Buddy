
// Grab text and store in in a variable
function submit(){
    const exercise = document.getElementById('exercise').value;
    const number = document.getElementById('number').value;
    const type = document.getElementById('type-of-exercise').value;
    document.getElementById('exercise').value = '';
    console.log(exercise + " " + number + " " + type);
    //console.log(type);
    // create a list item
    const listItem = document.createElement('li');
    const spanItem = document.createElement('span')
    // create a text node to attach the text value to the list item
    const listItemText = document.createTextNode(exercise);
    const spanItemText = document.createTextNode(number + " " + type);
    // attach the text to the list item
    spanItem.appendChild(spanItemText);
    listItem.appendChild(listItemText);
    console.log(listItem);
    listItem.append(spanItem);
    console.log(listItem);
    //spanItemText.appendChild(spanItemText);
    // attach span item to list item
    // get the parent node: unordered list
    unorderedList = document.getElementById('exercise-list-unordered');
    // attach the new list item + the exercise text to the parent
    unorderedList.appendChild(listItem);
}