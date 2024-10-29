// Theme Trader
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = sessionStorage.getItem('theme') || 'light'; 

    document.documentElement.setAttribute('data-theme', currentTheme);

    themeToggle.addEventListener('click', () => {
        let theme = document.documentElement.getAttribute('data-theme');
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'light');
            sessionStorage.setItem('theme', 'light'); 
            themeToggle.textContent = '🌙';
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            sessionStorage.setItem('theme', 'dark');
            themeToggle.textContent = '🌞';
        }
    });
});

// Fade in (Theme-Button)
document.getElementById('theme-toggle').addEventListener('click', function() {
    this.classList.remove('fade-in');
    void this.offsetWidth; 
    this.classList.add('fade-in');
});
