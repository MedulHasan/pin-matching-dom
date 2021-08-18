const generetPinInput = document.getElementById('pin-input');
const generetPinBtn = document.getElementById('generet-pin-btn');
const keyInput = document.getElementById('key-input');
let count = 1;

generetPinBtn.addEventListener('click', function rand() {
    let randomNumber = Math.round(Math.random() * 10000);
    if ((randomNumber + '').length == 4) {
        generetPinInput.value = randomNumber;
    } else {
        rand();
    }
})

document.getElementById('key-number').addEventListener('click', function (event) {
    const number = event.target.innerText;
    if (isNaN(number)) {
        if (number == 'C') {
            keyInput.value = '';
        }
        if (number == '<') {
            let lastNumber = keyInput.value.length - 1;
            keyInput.value = keyInput.value.substr(0, lastNumber);
        }
    } else {
        const previousNumber = keyInput.value;
        const newNumber = previousNumber + number;
        keyInput.value = newNumber;
    }
})

function mitchMatch(match, dontMatch) {
    document.getElementById('match').style.display = match;
    document.getElementById('dont-match').style.display = dontMatch;
    // generetPinInput.value = '';
    // keyInput.value = '';
}

document.getElementById('submit-btn').addEventListener('click', function () {

    if (generetPinInput.value == keyInput.value) {
        mitchMatch('block', 'none');
        generetPinInput.value = '';
        keyInput.value = '';
    } else {
        if (count < 4) {
            mitchMatch('none', 'block');
            let tryLeft = document.getElementById('try');
            let tryLeft1 = parseInt(tryLeft.innerText) - 1;
            tryLeft.innerText = tryLeft1;
            keyInput.value = '';
            count++;
        }
        // else {
        //     document.getElementById('dont-match').innerText = "❌ Session out, Please try again after some time";
        //     keyInput.value = '';
        //     generetPinInput.value = '';
        // }
    }
})

document.getElementById('clearAll').addEventListener('click', function () {
    location.reload();
})