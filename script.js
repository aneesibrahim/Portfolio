// Theme Toggle Logic
const toggleBtn = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  toggleBtn.textContent = currentTheme === 'light' ? '☀️' : '🌙';
}

toggleBtn.addEventListener('click', () => {
  let theme = document.documentElement.getAttribute('data-theme');
  if (theme === 'light') {
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem('theme', 'dark');
    toggleBtn.textContent = '🌙';
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
    toggleBtn.textContent = '☀️';
  }
});