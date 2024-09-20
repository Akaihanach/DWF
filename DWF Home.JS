// Toggling the menu
const menuIcon = document.getElementById('menu-icon');
const popupMenu = document.getElementById('popup-menu');
const body = document.body;

// To remember the dark mode setting across pages
if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
}

menuIcon.addEventListener('click', () => {
    popupMenu.style.display = 'flex';
});

popupMenu.addEventListener('click', (e) => {
    if (e.target === popupMenu || e.target.tagName === 'LI') {
        popupMenu.style.display = 'none';
    }
});

// Navigate to different pages
function navigateTo(page) {
    window.location.href = page;
}

// Theme Toggle
const settingsIcon = document.getElementById('settings-icon');
const settingsPopup = document.getElementById('settings-popup');
const closeSettings = document.getElementById('close-settings');
const themeToggle = document.getElementById('theme-toggle');

settingsIcon.addEventListener('click', () => {
    settingsPopup.style.display = 'flex';
});

closeSettings.addEventListener('click', () => {
    settingsPopup.style.display = 'none';
});

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Save dark mode setting
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.removeItem('darkMode');
    }
});
