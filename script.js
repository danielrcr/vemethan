// Data prevista para o nascimento do Ethan
const birthDate = new Date('2024-11-14T00:00:00');

// Mensagens e imagens para os diferentes dias
const messages = [
    "A espera está quase acabando!",
    "Estamos mais perto de segurar o Ethan nos braços!",
    "O Ethan já sente todo o amor que o espera!",
    "Preparamos tudo para a chegada do nosso pequeno!",
    "Só faltam alguns dias para o grande encontro!"
];

const images = [
    "/Users/drricarte/Documents/Dev/Contagem/imagens/foto1.jpeg",
    "/Users/drricarte/Documents/Dev/Contagem/imagens/foto2.jpeg",
    "/Users/drricarte/Documents/Dev/Contagem/imagens/foto3.jpeg",
    "/Users/drricarte/Documents/Dev/Contagem/imagens/foto4.jpeg",
];

// Função para atualizar a contagem regressiva
function updateCountdown() {
    const now = new Date();
    const timeLeft = birthDate - now;

    const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hoursLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = daysLeft;
    document.getElementById('hours').textContent = hoursLeft;
    document.getElementById('minutes').textContent = minutesLeft;
    document.getElementById('seconds').textContent = secondsLeft;

    const message = messages[Math.min(messages.length - 1, Math.floor(daysLeft / 10))];
    const image = images[Math.min(images.length - 1, Math.floor(daysLeft / 10))];

    const messageEl = document.getElementById('message');
    const photoEl = document.getElementById('photo');

    // Efeito de transição
    messageEl.classList.remove('visible');
    photoEl.classList.remove('visible');

    setTimeout(() => {
        messageEl.textContent = message;
        photoEl.src = image;
        messageEl.classList.add('visible');
        photoEl.classList.add('visible');
    }, 1000);
}

// Atualizar a contagem a cada segundo
setInterval(updateCountdown, 1000);
