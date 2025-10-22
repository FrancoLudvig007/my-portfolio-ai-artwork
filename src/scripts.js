const fotoGrid = document.getElementById('fotoGrid');
const videoGrid = document.getElementById('videoGrid');
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modalContent');
const closeModal = document.getElementById('closeModal');

// Carregar imagens
for (let i = 1; i <= 30; i++) {
    const card = document.createElement('div');
    card.className = 'card';
    const img = document.createElement('img');
    img.src = `images/${i}.png`;
    card.appendChild(img);
    card.onclick = () => openModal(`images/${i}.png`);
    fotoGrid.appendChild(card);
}

// Carregar vídeos
for (let i = 1; i <= 30; i++) {
    const card = document.createElement('div');
    card.className = 'card';
    const video = document.createElement('video');
    video.src = `videos/${i}.mp4`;
    video.muted = true;
    video.loop = true;
    video.autoplay = true;
    card.appendChild(video);
    card.onclick = () => openModal(`<video src="videos/${i}.mp4" controls autoplay></video>`);

}

function openModal(content) {
    modalContent.innerHTML = content;
    modal.classList.add('active');
}

closeModal.onclick = () => {
    modal.classList.remove('active');
    modalContent.innerHTML = '';
};
