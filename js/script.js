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

/* //////////////////////////////////////////
Timer Functions
//////////////////////////////////////////// */
/* Algorithm:
        1. create a function that executes for every second using setInterval.
        2. Get the total number of minutes .
        3. convert that into seconds and store in a global variable.
        4. decrement the seconds by “1" for each second.
        5. check if the seconds reach 0 if true then alert user and clear the timer.
    */

/*
// Get the total number of time needed
let lengthOfRounds = document.getElementById('length-of-rounds').value;
let numOfRounds = document.getElementById('number-of-rounds').value;



function executeRoundsTimer(){
   
};


*/

// Event Listener
document.getElementById('submit-rounds-timer').addEventListener('click', main);
document.getElementById('clear-rounds-timer').addEventListener('click', stopInterval);

// Global Variables
let lengthOfRounds;
let numOfRounds;

function main(){
    lengthOfRounds = Number(document.getElementById('length-of-rounds').value);
    numOfRounds = Number(document.getElementById('number-of-rounds').value);
    timerInterval(lengthOfRounds, numOfRounds);
};

function timerInterval(ln,num){
    let length = ln;
    let number = 1;

    // executes every second
    intervalVariable = setInterval(() => {
        
         // Decrease lengthOfRounds by seconds
        length = length - 1;

        // Check if timer is finished
        if (length > -1){
            if(length < 10){
                length = '0' + length;
            };
            document.getElementById('timer-display').innerHTML = `Time Remaining: 00:${length}`;
        } else {
            if(number != num){
                length = ln;
                number = number + 1;
            } else {
                console.log('Timer has finished!');
                stopInterval();
            };
        };
        document.getElementById('round-display').innerHTML = `Round: ${number}`;
    },1000);
};


function stopInterval(){
    clearInterval(intervalVariable);
    document.getElementById('round-display').style.display = 'none';
    document.getElementById('timer-display').style.display = 'none';
    document.getElementById('finished-display').innerHTML = `Timer has finished!`;
};