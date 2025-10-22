const photoGallery = document.getElementById('photoGallery');
const videoGallery = document.getElementById('videoGallery');
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modalContent');
const closeModal = document.getElementById('closeModal');
const scrollTopBtn = document.getElementById('scrollTopBtn');

// Carregar imagens
for (let i = 1; i <= 30; i++) {
  const imgCard = document.createElement('div');
  imgCard.className = 'card';
  imgCard.innerHTML = `<img src="Images/${i}.png" alt="Imagem IA ${i}" loading="lazy" />`;
  imgCard.onclick = () => openModal(`<img src="Images/${i}.png" alt="Imagem IA ${i}" />`);
  photoGallery.appendChild(imgCard);

  const videoCard = document.createElement('div');
  videoCard.className = 'card';
  videoCard.innerHTML = `<video src="Videos/${i}.mp4" muted preload="metadata"></video>`;
  videoCard.onclick = () => openModal(`<video src="Videos/${i}.mp4" autoplay controls></video>`);
  videoGallery.appendChild(videoCard);
}

// Modal
function openModal(content) {
  modalContent.innerHTML = content;
  modal.classList.remove('hidden');
}

closeModal.onclick = () => {
  modal.classList.add('hidden');
  modalContent.innerHTML = '';
};

window.onclick = (e) => {
  if (e.target === modal) {
    modal.classList.add('hidden');
    modalContent.innerHTML = '';
  }
};

// Scroll para o topo
window.onscroll = () => {
  scrollTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
};

scrollTopBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
