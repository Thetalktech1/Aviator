const coefficients = [1.19, 1.91, 1.82, 5.02, 1.68, 3.84, 1.42, 4.19, 22.07, 1.29];
let currentRound = 0;
const plane = document.getElementById('plane');
const coefficientDisplay = document.getElementById('coefficient');
const nextRoundButton = document.getElementById('nextRound');
const loading = document.getElementById('loading');

function startNextRound() {
    if (currentRound >= coefficients.length) {
        currentRound = 0;
    }
    
    plane.style.transform = 'translateX(0)';
    coefficientDisplay.textContent = `${coefficients[currentRound]}x`;
    
    setTimeout(() => {
        plane.style.transform = 'translateX(250px)';
    }, 100);
    
    currentRound++;
}

nextRoundButton.addEventListener('click', () => {
    loading.classList.remove('hidden');
    nextRoundButton.disabled = true;


    setTimeout(() => {
        loading.classList.add('hidden');
        nextRoundButton.disabled = false;
        startNextRound();
    }, 3000);
});

// Start the first round immediately
startNextRound();