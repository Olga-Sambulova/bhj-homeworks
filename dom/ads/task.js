const rotators = document.querySelectorAll('.rotator');

rotators.forEach(rotator => {
    const cases = rotator.querySelectorAll('.rotator__case');
    let currentIndex = 0;
    
    function rotate() {
        cases[currentIndex].classList.remove('rotator__case_active');
        currentIndex = (currentIndex + 1) % cases.length;
        
        const currentCase = cases[currentIndex];
        currentCase.classList.add('rotator__case_active');
        
        const color = currentCase.dataset.color;
        if (color) {
            rotator.style.color = color;
        }
        
        const speed = parseInt(currentCase.dataset.speed) || 1000;
        clearInterval(intervalId);
        intervalId = setInterval(rotate, speed);
    }
    
    const firstCase = cases[0];
    const firstColor = firstCase.dataset.color;
    if (firstColor) {
        rotator.style.color = firstColor;
    }
    
    const initialSpeed = parseInt(cases[0].dataset.speed) || 1000;
    let intervalId = setInterval(rotate, initialSpeed);
});