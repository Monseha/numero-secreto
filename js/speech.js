const elemShoot = document.getElementById('chute');

window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br';
recognition.start();

recognition.addEventListener('result', onSpeak);

function onSpeak(event) {
    shoot = event.results[0][0].transcript;
    viewShoot(shoot);
    shootCheck(shoot);
}

function viewShoot(shoot) {
    elemShoot.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${shoot}</span>
    `
}

recognition.addEventListener('end', () => recognition.start());
