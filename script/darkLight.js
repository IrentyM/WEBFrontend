const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

if (!localStorage.getItem('theme')) {
    localStorage.setItem('theme', 'light');
}
body.classList.add(localStorage.getItem('theme') + '-theme');

themeToggleButton.addEventListener('click', () => {
    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
        localStorage.setItem('theme', 'light');
    }
});