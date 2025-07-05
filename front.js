const searchBox = document.getElementById('searchBox');
const cards = document.querySelectorAll('.movie-box');

searchBox.addEventListener('input', () => {
  const value = searchBox.value.toLowerCase();
  cards.forEach(card => {
    const title = card.dataset.name.toLowerCase();
    card.style.display = title.includes(value) ? 'block' : 'none';
  });
});