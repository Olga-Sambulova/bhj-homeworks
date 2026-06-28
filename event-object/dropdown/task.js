const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const valueElement = dropdown.querySelector('.dropdown__value');
    const listElement = dropdown.querySelector('.dropdown__list');
    const items = dropdown.querySelectorAll('.dropdown__item');
    
    valueElement.addEventListener('click', function(e) {
        e.stopPropagation(); // Останавливаем всплытие, чтобы не закрыть сразу
        listElement.classList.toggle('dropdown__list_active');
    });
    
    items.forEach(item => {
        const link = item.querySelector('.dropdown__link');
        
        link.addEventListener('click', function(e) {
            e.preventDefault(); 
            
            const selectedText = this.textContent.trim();
            
            valueElement.textContent = selectedText;
            
            listElement.classList.remove('dropdown__list_active');
        });
    });
});

document.addEventListener('click', function(e) {
    dropdowns.forEach(dropdown => {
        const listElement = dropdown.querySelector('.dropdown__list');
        const valueElement = dropdown.querySelector('.dropdown__value');
        
        if (!dropdown.contains(e.target) && listElement.classList.contains('dropdown__list_active')) {
            listElement.classList.remove('dropdown__list_active');
        }
    });
});