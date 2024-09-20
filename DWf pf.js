document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menu-icon');
    const menuPopup = document.getElementById('menu-popup');
    const settingsIcon = document.getElementById('settings-icon');
    const settingsPopup = document.getElementById('settings-popup');
    const closeSettings = document.getElementById('close-settings');
    const themeToggleIcon = document.getElementById('theme-toggle-icon');
    const body = document.body;

    // Apply dark mode from localStorage
    if (localStorage.getItem('darkMode') === 'enabled') {
        body.classList.add('dark-mode');
        themeToggleIcon.textContent = '🌞'; // Day mode icon when dark mode is enabled
    } else {
        themeToggleIcon.textContent = '🌙'; // Night mode icon when dark mode is disabled
    }

    // Menu icon event
    menuIcon.addEventListener('click', () => {
        menuPopup.style.display = 'flex';
    });

    menuPopup.addEventListener('click', (e) => {
        // Close the menu when clicking outside or selecting a menu item
        if (e.target === menuPopup || e.target.classList.contains('menu-item')) {
            menuPopup.style.display = 'none';
        }
    });

    // Settings icon event
    settingsIcon.addEventListener('click', () => {
        settingsPopup.style.display = 'flex';
    });

    closeSettings.addEventListener('click', () => {
        settingsPopup.style.display = 'none';
    });

    // Theme toggle event
    themeToggleIcon.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            themeToggleIcon.textContent = '🌙'; // Night mode icon
            localStorage.setItem('darkMode', 'disabled'); // Save as day mode
        } else {
            body.classList.add('dark-mode');
            themeToggleIcon.textContent = '🌞'; // Day mode icon
            localStorage.setItem('darkMode', 'enabled'); // Save as night mode
        }
    });

    // Navigation function for menu items
    function navigateTo(page) {
        window.location.href = page;
    }

    // Assuming your menu items are set up
    document.querySelectorAll('.popup-content li').forEach(item => {
        item.addEventListener('click', () => {
            navigateTo(item.getAttribute('data-page'));
        });
    });
});
