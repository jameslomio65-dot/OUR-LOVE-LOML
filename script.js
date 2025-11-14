document.addEventListener('DOMContentLoaded', () => {
    // Password screen elements
    const magicWordInput = document.getElementById('magicWordInput');
    const enterButton = document.getElementById('enterButton');
    const errorMessage = document.getElementById('errorMessage');
    const passwordScreen = document.getElementById('password-screen');

    // Content screens
    const welcomeScreen = document.getElementById('welcome-screen');
    const galleryScreen = document.getElementById('gallery-screen');
    const storyScreen = document.getElementById('story-screen');
    const momentsScreen = document.getElementById('moments-screen');
    const playlistScreen = document.getElementById('playlist-screen');

    // Navigation elements
    const welcomeNav = document.getElementById('welcomeNav');
    const galleryNav = document.getElementById('galleryNav');
    const storyNav = document.getElementById('storyNav');
    const momentsNav = document.getElementById('momentsNav');
    const playlistNav = document.getElementById('playlistNav');

    // Buttons within screens
    const exploreMemoriesButton = document.getElementById('exploreMemoriesButton');

    const correctMagicWord = 'ourlove'; // CHOOSE YOUR MAGIC WORD HERE!
    let isAuthenticated = false;

    // --- Utility Functions ---
    function hideAllScreens() {
        document.querySelectorAll('.screen').forEach(screen => {
            screen.classList.add('hidden');
        });
    }

    function removeActiveClassFromNav() {
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });
    }

    function showScreen(screenElement, navItem = null) {
        hideAllScreens();
        screenElement.classList.remove('hidden');
        removeActiveClassFromNav(); // Clear active state
        if (navItem) {
            navItem.classList.add('active'); // Set active state for current nav item
        }
    }

    // --- Password Screen Logic ---
    enterButton.addEventListener('click', () => {
        if (magicWordInput.value.toLowerCase() === correctMagicWord) {
            isAuthenticated = true;
            showScreen(welcomeScreen, welcomeNav); // Show welcome screen, highlight home nav
            errorMessage.classList.remove('show');
            startHeartAnimations();
        } else {
            errorMessage.textContent = 'Oops! That\'s not our special word. Try again!';
            errorMessage.classList.add('show');
            magicWordInput.value = '';
        }
    });

    magicWordInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            enterButton.click();
        }
    });

    // --- Welcome Screen Logic ---
    exploreMemoriesButton.addEventListener('click', () => {
        showScreen(galleryScreen, galleryNav); // Guide to gallery
    });


    // --- Navigation Logic ---
    welcomeNav.addEventListener('click', (e) => {
        e.preventDefault();
        if (isAuthenticated) {
            showScreen(welcomeScreen, welcomeNav);
        } else {
            alert('Please enter the magic word first!');
        }
    });

    galleryNav.addEventListener('click', (e) => {
        e.preventDefault();
        if (isAuthenticated) {
            showScreen(galleryScreen, galleryNav);
        } else {
            alert('Please enter the magic word first!');
        }
    });

    storyNav.addEventListener('click', (e) => {
        e.preventDefault();
        if (isAuthenticated) {
            showScreen(storyScreen, storyNav);
        } else {
            alert('Please enter the magic word first!');
        }
    });

    momentsNav.addEventListener('click', (e) => {
        e.preventDefault();
        if (isAuthenticated) {
            showScreen(momentsScreen, momentsNav);
        } else {
            alert('Please enter the magic word first!');
        }
    });

    playlistNav.addEventListener('click', (e) => {
        e.preventDefault();
        if (isAuthenticated) {
            showScreen(playlistScreen, playlistNav);
        } else {
            alert('Please enter the magic word first!');
        }
    });

    // --- Heart Animation Logic (remains the same) ---
    function startHeartAnimations() {
        const hearts = document.querySelectorAll('.heart-animation');
        hearts.forEach(heart => {
            const randomX = Math.random() * 0.8 + 0.1;
            heart.style.left = `${randomX * 100}%`;
            heart.style.setProperty('--rand-x', (Math.random() - 0.5) * 2);
        });
    }

    // Initially show the password screen
    showScreen(passwordScreen);
});