// Data prevista para o nascimento do Ethan
const birthDate = new Date('2024-11-01T14:00:00');

// Mensagens e imagens para os diferentes dias
const messages = [
    "A espera está quase acabando!",
    "Estamos mais perto de segurar o Ethan nos braços!",
    "O Ethan já sente todo o amor que o espera!",
    "Preparamos tudo para a chegada do nosso pequeno!",
    "Só faltam alguns dias para o grande encontro!"
];

const images = [
    "imagens/foto1.jpeg",
    "imagens/foto2.jpeg",
    "imagens/foto3.jpeg",
    "imagens/foto4.jpeg",
];

// Função para escolher uma imagem aleatória
function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
}

// Função para escolher uma mensagem aleatória
function getRandomMessage() {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
}

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
}

// Atualizar a contagem a cada segundo
setInterval(updateCountdown, 1000);

// Quando a página carregar, defina a imagem e mensagem aleatória
window.onload = function() {
    const photoEl = document.getElementById('photo');
    const messageEl = document.getElementById('message');

    // Define a imagem e mensagem aleatória ao carregar a página
    photoEl.src = getRandomImage();
    messageEl.textContent = getRandomMessage();

    // Exibir a mensagem e a imagem com a transição
    messageEl.classList.add('visible');
    photoEl.classList.add('visible');
};
