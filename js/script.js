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

////////////////////////////////////////////
///////////    Timers  ////////////////////
//////////////////////////////////////////


/* Algorithm:
        1. create a function that executes for every second using setInterval.
        2. Get the total number of minutes .
        3. convert that into seconds and store in a global variable.
        4. decrement the seconds by “1" for each second.
        5. check if the seconds reach 0 if true then alert user and clear the timer.
    */

/*
Round Timer Functions
*/

// Event Listener
document.getElementById('submit-rounds-timer').addEventListener('click', main);
document.getElementById('clear-rounds-timer').addEventListener('click', stopInterval);
document.getElementById('rounds').addEventListener('click',hideCountdown);

// Default View
document.getElementById('countdown-display').style.display = 'none';

// Global Variables
let lengthOfRounds;
let numOfRounds;

// Start Round Functionality
function main(){

    // Display Properties
    document.getElementById('submit-rounds-timer').disabled = true;
    document.getElementById('countdown').disabled = true;
    document.getElementById('round-display').style.display = 'block';
    document.getElementById('timer-display').style.display = 'block';
    document.getElementById('finished-display').innerHTML = '';
    document.getElementById('round-display').innerHTML = '';
    document.getElementById('timer-display').innerHTML = '';

    // String => Number conversion
    lengthOfRounds = Number(document.getElementById('length-of-rounds').value);
    numOfRounds = Number(document.getElementById('number-of-rounds').value);

    // Start intervals and pass the length of each round and the number of each round
    roundTimerInterval(lengthOfRounds, numOfRounds);
};

// @param ln = length of rounds & num = number of rounds
function roundTimerInterval(ln,num){
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

// Stop Round Timer
function stopInterval(){
    clearInterval(intervalVariable);
    document.getElementById('submit-rounds-timer').disabled = false;
    document.getElementById('countdown').disabled = false;
    document.getElementById('round-display').style.display = 'none';
    document.getElementById('timer-display').style.display = 'none';
    document.getElementById('finished-display').innerHTML = `Timer has finished!`;
};

function hideCountdown(){
    document.getElementById('rounds-display').style.display = 'block';
    document.getElementById('countdown-display').style.display = 'none';
};

///////////////////////////////////////
//    Countdown Timer Functions     //
/////////////////////////////////////

// Event listener for Countdown button
document.getElementById('countdown').addEventListener('click',hideRounds);

// Hides all round displays/functionality
function hideRounds(){
    document.getElementById('rounds-display').style.display = 'none';
    document.getElementById('countdown-display').style.display = 'block';
};

// Start, Stop, and Reset event listeners
document.getElementById('start-countdown').addEventListener('click',startCountdown);
document.getElementById('stop-countdown').addEventListener('click',stopCountdown);

function startCountdown(){
    /* Algorithm:
        1. create a function that executes for every second using setInterval.
        2. Get the total number of minutes .
        3. convert that into seconds and store in a global variable.
        4. decrement the seconds by “1" for each second.
        5. check if the seconds reach 0 if true then alert user and clear the timer.
    */
   const hours = Number(document.getElementById('hours-input').value);
   const mins = Number(document.getElementById('minutes-input').value);
   const secs = Number(document.getElementById('seconds-input').value);
   countdownTimerInterval(hours,mins,secs);

}

function countdownTimerInterval(h,m,s){
    let total = (h * 3600) + (m * 60) + (s);
    console.log(total);
    

    // executes every second
    countdownIntervalVariable = setInterval(() => {
        
         // Decrease time by seconds
        total = total - 1;
        console.log(total);
        // Check if timer is finished
        if(total === 3661){
            stopCountdown();
        };

    }, 1000);
};

function stopCountdown(){
    clearInterval(countdownIntervalVariable);
};










