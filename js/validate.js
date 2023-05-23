function shootCheck(shoot) {
    const number = +shoot;

    if (validShoot(number)) {
        elemShoot.innerHTML += '<div>Valor inválido</div>'
        return
    }

    if (validNumber(number)) {
        elemShoot.innerHTML += `<div>Valor inválido: Diga um número entre ${minorValue} e ${majorValue}</div>`
        return
    }

    if (number === secretNum) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto é ${secretNum}</h3>
            <button id="btn-jogar" class="btn">Jogar Novamente</button>
        `
    } else if (number < secretNum) {
        elemShoot.innerHTML += `<div>O número secreto é maior <i class="fas fa-arrow-circle-up"></i></div>`
    } else {
        elemShoot.innerHTML += `<div>O número secreto é menor <i class="fas fa-arrow-circle-down"></i></div>`
    }
}

function validNumber(number) {
    return number > majorValue || number < minorValue
}

function validShoot(number) {
    return Number.isNaN(number)
}

document.body.addEventListener('click', event => {
    if (event.target.id === 'btn-jogar') {
        window.location.reload();
    }
})
