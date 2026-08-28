// random numbers from 1 to 10 are given in an array

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var stopped = true;

// for keeping on changing the numbers

function change() {

    var random = Math.floor(Math.random() * 10);

    number.innerHTML = numbers[random];

}

function stopStart() {

    if (stopped) {

        stopped = false;

        t = setInterval(change, 100);

    } else {

        clearInterval(t);

        stopped = true;

    }

}

// invoking the function

window.onload = function() {

    number = document.getElementById("number");

    stopStart();

}