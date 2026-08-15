// dice image from value 1 to 6are given in a array, codes are from Die face in Emojipedia
var dices = ['&#9856;', '&#9857;', '&#9858;', '&#9859;', '&#9860;', '&#9861;'];
var stopped = true;

//for keep on changing the dice emojis
function change() {
    var random = Math.floor(Math.random() * 6);
    dice.innerHTML = dices[random];
}

function stopStart() {
    if (stopped) {
        stopped = false;
        t = setInterval(change, 100);
    }else{
        clearInterval(t);
        stopped = true;
    }
}

//invoking the function
window.onload = function() {
    dice = document.getElementById("dice");
    stopStart();
}
