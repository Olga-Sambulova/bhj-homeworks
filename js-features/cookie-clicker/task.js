let cookie = document.getElementById('cookie');
let clickerCounter = document.getElementById('clicker__counter');

let isSmall = false;
let originalWidth = 200;
let originalHeight = 200;

function handleClick() {
    let currentCount = parseInt(clickerCounter.textContent);
    clickerCounter.textContent = currentCount + 1;
    
    if (isSmall) {
        cookie.width = originalWidth;
        cookie.height = originalHeight;
        isSmall = false;
    } else {
        cookie.width = originalWidth - 20;
        cookie.height = originalHeight - 20;
        isSmall = true;
    }
}
cookie.onclick = handleClick;