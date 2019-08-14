////////////////////////////////////////////
///////////  Exercise  ////////////////////
//////////////////////////////////////////

// Add eventListeners for exercise submission and clear list
document.getElementById('submit').addEventListener("click",submit);
document.getElementById('start').addEventListener("click",start);
document.getElementById('enter').addEventListener("click",enter);

// form validation check for numbers in input field
const checkAgainst = /^[0-9]+$/;

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
    } else if (exercise.match(/^[0-9]+$/)) {
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
    const spanItemText = document.createTextNode(` - ${num} ${typ}`);
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

function start(){
    // this function clears the entire list of exercises
    document.getElementById('start-hide').style.display = 'none';
    document.getElementById('enter').style.display = 'block';
};

function enter(){
    document.getElementById('start-hide').style.display = 'block';
    document.getElementById('enter').style.display = 'none';
}


////////////////////////////////////////////
///////////    Timers  ////////////////////
//////////////////////////////////////////

// Toggling between Round Timer and Countdown Timer

// Event Listener for Round or Countdown button
document.getElementById('rounds').addEventListener('click',toggleRoundOn);
document.getElementById('countdown').addEventListener('click',toggleCountdownOn);

// Toggle Functions
function toggleRoundOn() {
    document.getElementById('countdown-display').style.display = 'none';
    document.getElementById('minutes-input').value = '';
    document.getElementById('seconds-input').value = '';
    document.getElementById('rounds-display').style.display = 'block';
};

function toggleCountdownOn(){
    document.getElementById('countdown-display').style.display = 'block';
    document.getElementById('rounds-display').style.display = 'none';
    document.getElementById('number-of-rounds').value = '';
};

/*
Round Timer Functions
*/

/* Algorithm:
        1. create a function that executes for every second using setInterval.
        2. Get the total number of minutes .
        3. convert that into seconds and store in a global variable.
        4. decrement the seconds by “1" for each second.
        5. check if the seconds reach 0 if true then alert user and clear the timer.
    */

// Event Listener
document.getElementById('submit-rounds-timer').addEventListener('click', formCheck);
document.getElementById('stop-rounds-timer').addEventListener('click', stopInterval);

// Form Check
function formCheck(){
    const roundInput = Number(document.getElementById('number-of-rounds').value);
    if(roundInput <= 0){
        alert("please check the number of rounds field for an error.");
    } else {
        main();
    };
};

// Start Round Functionality
function main(){

    // Immediately turn off the submit button and Countdown button since round timer has started.
    document.getElementById('submit-rounds-timer').disabled = true;
    document.getElementById('countdown').disabled = true;

    // Display Properties
    setDisplay();

    // String to Number conversion
    let lengthOfRounds = Number(document.getElementById('length-of-rounds').value);
    let numOfRounds = Number(document.getElementById('number-of-rounds').value);

    // Start intervals and pass the length of each round and the number of each round
    roundTimerInterval(lengthOfRounds, numOfRounds);
};

function setDisplay(){
    // show the displays
    document.getElementById('round-display').style.display = 'block';
    document.getElementById('timer-display').style.display = 'block';
    // make the display blank
    document.getElementById('finished-display').innerHTML = '';
    document.getElementById('round-display').innerHTML = '';
    document.getElementById('timer-display').innerHTML = '';
}

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
            document.getElementById('timer-display').innerHTML = `00:${length}`;
        } else {
            if(number != num){
                length = ln;
                number = number + 1;
            } else {
                console.log('Timer has finished!');
                stopInterval();
                finishedDisplay();
                endDisplay();
            };
        };
        document.getElementById('round-display').innerHTML = `Round: ${number} of ${num}`;
    },1000);
};

// Stop Round Timer and enable buttons
function stopInterval(){
    clearInterval(intervalVariable);
    document.getElementById('submit-rounds-timer').disabled = false;
    document.getElementById('countdown').disabled = false;
};

function finishedDisplay(){
    document.getElementById('finished-display').innerHTML = 'Timer has finished!';
}

function endDisplay(){
    document.getElementById('round-display').style.display = 'none';
    document.getElementById('timer-display').style.display = 'none';
    document.getElementById('finished-display').style.display = 'block';
}

///////////////////////////////////////
//    Countdown Timer Functions     //
/////////////////////////////////////

// Start, Stop, and Reset event listeners
document.getElementById('start-countdown').addEventListener('click',startCountdown);
document.getElementById('stop-countdown').addEventListener('click',stopCountdown);

function countdownFormCheck(m,s){
    if (m <= 0 || s <= 0){
        alert('Please enter a valid number.');
    } else {
        countdownTimerInterval(m,s);
    };
};

function startCountdown(){
    /* Algorithm:
        1. create a function that executes for every second using setInterval.
        2. Get the total number of minutes .
        3. convert that into seconds and store in a global variable.
        4. decrement the seconds by “1" for each second.
        5. check if the seconds reach 0 if true then alert user and clear the timer.
    */
    // turn off start button and rounds button
    setCountdownDisplay();

   const mins = Number(document.getElementById('minutes-input').value);
   const secs = Number(document.getElementById('seconds-input').value);
   
   countdownFormCheck(mins,secs);
}

function setCountdownDisplay(){
    document.getElementById('start-countdown').disabled = true;
    document.getElementById('rounds').disabled = true;
};

function countdownTimerInterval(m,s){
    let total = (m * 60) + (s);
    
    // executes every second
    countdownIntervalVariable = setInterval(() => {
        
         // Decrease total time and seconds by one
        total = total - 1;
        s = s - 1;

        // Check if seconds have run out
        if (s < 0){
            m = m - 1;
            s = 59;
        };

        // Check if seconds are in single digits
        if(s < 10){
            s = '0' + s;
        };

        // Update view
        document.getElementById('countdown-clock-display').innerHTML = `${m}:${s}`;

        // Check if countdown is finished
        if (total === 0){
            stopCountdown();
        };
        
    }, 1000);
};

function stopCountdown(){
    clearInterval(countdownIntervalVariable);
    endCountdownDisplay();
};

function endCountdownDisplay(){
    document.getElementById('start-countdown').disabled = false;
    document.getElementById('rounds').disabled = false;
};








