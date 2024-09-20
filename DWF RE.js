// Check for dark mode and apply it to the redeem page
const body = document.body;

if (localStorage.getItem('darkMode') === 'enabled') {
    body.classList.add('dark-mode');
}

// Toggling the menu
const menuIcon = document.getElementById('menu-icon');
const popupMenu = document.getElementById('popup-menu');

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

// Pagination for Redeem Content
const itemsPerPage = 21; // 7 rows of 3 items
const totalItems = 90; // Example total number of items
const redeemContent = document.getElementById('redeem-content');
const prevPageBtn = document.getElementById('prev-page');
const nextPageBtn = document.getElementById('next-page');
let currentPage = 1;

function generateItems() {
    redeemContent.innerHTML = ''; // Clear existing items
    const start = (currentPage - 1) * itemsPerPage;
    const end = Math.min(start + itemsPerPage, totalItems);

    for (let i = start; i < end; i++) {
        const item = document.createElement('div');
        item.className = 'redeem-item';

        // Create image element
        const img = document.createElement('img');
        img.src = `path/to/image${i + 1}.jpg`; // Replace with actual image path
        img.alt = `Item ${i + 1}`;
        item.appendChild(img);

        // Create description element
        const description = document.createElement('div');
        description.className = 'description';
        description.textContent = `Description for Item ${i + 1}`; // Replace with actual description
        item.appendChild(description);

        redeemContent.appendChild(item);
    }

    updatePagination();
}

function updatePagination() {
    prevPageBtn.disabled = currentPage === 1;
    nextPageBtn.disabled = currentPage * itemsPerPage >= totalItems;
}

prevPageBtn.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        generateItems();
    }
});

nextPageBtn.addEventListener('click', () => {
    if (currentPage * itemsPerPage < totalItems) {
        currentPage++;
        generateItems();
    }
});

// Initial generation of items
generateItems();
