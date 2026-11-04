const cards = Array.from(document.querySelectorAll('.card'));
const dialog = document.querySelector('dialog');
const photo = document.querySelector('#full');
let current = 0;

function show(index) {
  current = (index + cards.length) % cards.length;
  const card = cards[current];
  photo.src = card.href;
  photo.alt = card.querySelector('img').alt;
  document.querySelector('#caption').textContent =
    (current + 1) + ' / ' + cards.length + ' · ' + card.querySelector('strong').textContent;
}

cards.forEach((card, index) => card.addEventListener('click', event => {
  if (!dialog.showModal || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  event.preventDefault();
  show(index);
  dialog.showModal();
}));
document.querySelector('#close').onclick = () => dialog.close();
document.querySelector('#prev').onclick = () => show(current - 1);
document.querySelector('#next').onclick = () => show(current + 1);
dialog.addEventListener('keydown', event => {
  if (event.key === 'ArrowRight') show(current + 1);
  if (event.key === 'ArrowLeft') show(current - 1);
});
