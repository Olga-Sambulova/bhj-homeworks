let dead = 0;
let lost = 0;

let deadCounter = document.getElementById('dead');
let lostCounter = document.getElementById('lost');

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

function resetGame() {
    dead = 0;
    lost = 0;
    deadCounter.textContent = dead;
    lostCounter.textContent = lost;
}

function checkGameOver() {
    if (dead === 10) {
        alert('Победа! Вы убили 10 кротов!');
        resetGame();
        return true;
    }
    if (lost === 5) {
        alert('Поражение! Вы промахнулись 5 раз!');
        resetGame();
        return true;
    }
    return false;
}

for (let i = 1; i <= 9; i++) {
    let hole = getHole(i);
    
    hole.onclick = function() {
        if (hole.className.includes('hole_has-mole')) {
            dead++;
            deadCounter.textContent = dead;
        } else {
            lost++;
            lostCounter.textContent = lost;
        }
        
        checkGameOver();
    };
}