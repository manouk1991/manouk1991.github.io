// hamburger menu
document.querySelector('.hamburger')?.addEventListener('click', () => {
  document.querySelector('.menu').classList.toggle('show');
});

// accordion
document.querySelectorAll('.lab-header').forEach(header => {
  header.addEventListener('click', () => {
    const content = header.nextElementSibling;
    const arrow = header.querySelector('span');
    const open = content.style.display === 'block';
    content.style.display = open ? 'none' : 'block';
    arrow.textContent = open ? '▸' : '▾';
  });
});
