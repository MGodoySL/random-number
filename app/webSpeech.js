window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = "pt-Br";
recognition.start();

recognition.addEventListener("result", onSpeak);

function onSpeak(e) {
    const attempt = e.results[0][0].transcript;
    showAttemp(attempt);
}

function showAttemp(attempt) {
    const currentAttempt = document.querySelector("#chute");
    currentAttempt.innerHTML = validateAttemp(attempt);
}

function validateAttemp(attempt) {
    if (parseInt(attempt) === randomNumber) {
        document.body.innerHTML= `<h1>VOCÊ ACERTOU!!</h1><h3>O número secreto era <b>${attempt}</b></h3><button id="newGame" class="btnNewGame">Jogar Novamente</button>`
    } else if (parseInt(attempt) && parseInt(attempt) >= minValue && parseInt(attempt) <= maxValue) {
        return parseInt(attempt) < randomNumber 
        ? `<div>Você disse:</div><span class="box" id="numero-atual">${attempt}</span><div>O número é <b>maior</b></div>` 
        : `<div>Você disse:</div><span class="box" id="numero-atual">${attempt}</span><div>O número é <b>menor</b></div>`
    } else {
        return `<div class="invalido">Valor inválido</div><span class="box" id="numero-atual">${attempt}</span><div>Diga um número válido!</b></div>`;
    }
}

recognition.addEventListener("end", () => recognition.start());
document.body.addEventListener('click', e => {
    if (e.target.id == 'newGame') {
        window.location.reload()
    }
})