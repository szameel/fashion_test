const image = document.getElementById('productImage');
const colorName = document.getElementById('colorName');
const swatches = document.querySelectorAll('.swatch');
const thumbs = document.querySelectorAll('.thumb');
const sizes = document.querySelectorAll('.sizes button');
const addBtn = document.getElementById('addBtn');
const toast = document.getElementById('toast');
const bagCount = document.getElementById('bagCount');
let bag = 0;

function setProduct(color, src, button) {
  image.style.opacity = 0;
  setTimeout(() => {
    image.src = src;
    image.alt = `Core graphic tee in ${color.toLowerCase()}`;
    image.style.opacity = 1;
  }, 120);
  colorName.textContent = color;
  swatches.forEach(s => s.classList.remove('selected'));
  if (button) button.classList.add('selected');
  thumbs.forEach(t => t.classList.remove('active'));
}

swatches.forEach(s => s.addEventListener('click', () => {
  setProduct(s.dataset.color, s.dataset.img, s);
}));

thumbs.forEach((t, i) => t.addEventListener('click', () => {
  const variants = ['assets/tee-black.png','assets/tee-gray.png','assets/tee-white.png'];
  const names = ['BLACK','GREY','WHITE'];
  setProduct(names[i], variants[i], swatches[i]);
  t.classList.add('active');
}));

sizes.forEach(s => s.addEventListener('click', () => {
  sizes.forEach(x => x.classList.remove('selected'));
  s.classList.add('selected');
}));

addBtn.addEventListener('click', () => {
  bag++;
  bagCount.textContent = bag;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 1800);
});

document.getElementById('searchBtn').addEventListener('click', () => {
  const q = prompt('SEARCH ANYWEAR');
  if (q) alert(`Demo search: ${q}`);
});

document.getElementById('bagBtn').addEventListener('click', () => {
  alert(bag ? `Your demo bag has ${bag} item${bag > 1 ? 's' : ''}.` : 'Your demo bag is empty.');
});

document.getElementById('menuBtn').addEventListener('click', () => {
  document.querySelector('.desktop-nav').style.display =
    document.querySelector('.desktop-nav').style.display === 'flex' ? 'none' : 'flex';
});
