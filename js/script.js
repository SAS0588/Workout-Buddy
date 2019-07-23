// form validation check for numbers in input field
const checkAgainst = /^[0-9]+$/;

// Add eventListeners for exercise submission and clear list
document.getElementById('submit').addEventListener("click",submit);
document.getElementById('clear').addEventListener("click",clear);

// Grab text and store in in a variable
function submit(){
    // set values to variables
    const exercise = document.getElementById('exercise').value;
    const number = document.getElementById('number').value;
    const type = document.getElementById('type-of-exercise').value;
    console.log(`${exercise},${number}`);

    // erase UI input values
    document.getElementById('exercise').value = '';
    document.getElementById('number').value = '';
    document.getElementById('type-of-exercise').value = 'Reps';

    // Check form for accuracy
    if (exercise.length === 0){
        alert("please enter an exercise.");
    } else if(number.length === 0 || number == 'e'){
        alert("please check the number field for an error.");
    } else if (exercise.match(checkAgainst)) {
        alert("please enter a proper exercise name");
    } else {
        // pass variables to createElement function
        createElement(exercise,number,type);
    };
};

function createElement(ex,num,typ){
    // 1. create a list item and span item
    const listItem = document.createElement('li');
    const spanItem = document.createElement('span')
    // 2. create span attribute
    const spanAttribute = document.createAttribute('class');
    spanAttribute.value = 'span-item-list';
    spanItem.setAttributeNode(spanAttribute);
    // 3. create a text node to attach the text value to the list item and span item
    const listItemText = document.createTextNode(ex);
    const spanItemText = document.createTextNode(` ${num} ${typ}`);
    // 4. attach the text to the list item and span item
    spanItem.appendChild(spanItemText);
    listItem.appendChild(listItemText);
    // 5. attach the span item to the end of list item
    listItem.append(spanItem);
    // 6. get the parent node: unordered list
    unorderedList = document.getElementById('exercise-list-unordered');
    // 7. attach the new list item + the exercise text to the parent
    unorderedList.appendChild(listItem);
};

function clear(){
    // this function clears the entire list of exercises
    console.log('clear function works');
};

/* function roundsTimer(){
    let x = setInterval(function(){

        Pseudo code
        1. Enter the number of rounds
        2. Enter the length of each round
        3. Create a new date object
        4. Set the length of each round as the setTimeout parameter
        5. Display the seconds
        

        // 1. Enter the number or rounds
        const rounds = document.getElementById('number-of-rounds').value;
        
        // 2. Enter the length of each round
        const roundLength =  document.getElementById('length-of-rounds').value;
        console.log(roundLength);

        const timerForRounds = new Date();
    },500);

}; */