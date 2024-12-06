// Fonction pour l'horloge digitale
function updateDigitalClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

// Fonction pour l'horloge analogique
function initAnalogClock() {
    const date = new Date();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();

    // Calcul des angles des aiguilles
    const hands = [
        { hand: 'hours', angle: (hours % 12) * 30 + (minutes / 2) },
        { hand: 'minutes', angle: minutes * 6 },
        { hand: 'seconds', angle: seconds * 6 }
    ];

    // Appliquer les angles aux aiguilles
    hands.forEach(function(hand) {
        const elements = document.querySelectorAll(`.${hand.hand}`);
        elements.forEach(function(element) {
            element.style.transform = `rotateZ(${hand.angle}deg)`;
        });
    });
}

// Fonction pour initialiser les horloges
function initializeClocks() {
    initAnalogClock();
    setInterval(initAnalogClock, 1000); // Mettre à jour l'horloge analogique toutes les secondes
    setInterval(updateDigitalClock, 1000); // Mettre à jour l'horloge digitale toutes les secondes
}

// Initialisation
initializeClocks();
