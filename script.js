// script.js
// Dark mode toggle
const darkModeToggle = document.querySelector('.dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    // Store dark mode preference in localStorage
    const isDarkMode = document.body.classList.contains('dark-mode');
    localStorage.setItem('dark-mode', isDarkMode);
});

// Load dark mode preference from localStorage
const savedDarkMode = localStorage.getItem('dark-mode') === 'true';
if (savedDarkMode) {
    document.body.classList.add('dark-mode');
}

