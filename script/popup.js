document.addEventListener('DOMContentLoaded', function() {
    const openPopupBtn = document.getElementById('open-popup');
    const popup = document.getElementById('popup-form');
    const closePopupBtn = document.querySelector('.close');

    openPopupBtn.addEventListener('click', function() {
        popup.style.display = 'flex';
    });

    closePopupBtn.addEventListener('click', function() {
        popup.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === popup) {
            popup.style.display = 'none';
        }
    });
});


