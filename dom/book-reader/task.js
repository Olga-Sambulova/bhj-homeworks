const book = document.getElementById('book');
const fontSizeControls = document.querySelectorAll('.book__control_font-size .font-size');

fontSizeControls.forEach(control => {
    control.addEventListener('click', function(event) {
        event.preventDefault();
        
        fontSizeControls.forEach(btn => btn.classList.remove('font-size_active'));
        
        this.classList.add('font-size_active');
        
        book.classList.remove('book_fs-big', 'book_fs-small');
        
        const size = this.dataset.size;
        if (size === 'small') {
            book.classList.add('book_fs-small');
        } else if (size === 'big') {
            book.classList.add('book_fs-big');
        }
    });
});