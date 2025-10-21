// Configurações
const IMAGE_COUNT = 30; // Número total de imagens

// Função para carregar as imagens na galeria
function loadGalleryImages() {
    const galleryGrid = document.getElementById('gallery-grid');
    
    for (let i = 1; i <= IMAGE_COUNT; i++) {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        
        // Verifica se a imagem existe
        const img = new Image();
        img.src = `images/${i}.png`;
        img.alt = `Imagem ${i} do portfólio CGI`;
        img.onerror = function() {
            // Se a imagem não existir, criar um placeholder
            this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMjUyNTI1Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iI2EwYTBhMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlbiB7aX0gbsOjbyBlbmNvbnRyYWRhPC90ZXh0Pjwvc3ZnPg==';
            this.alt = `Imagem ${i} não encontrada`;
        };
        
        const overlay = document.createElement('div');
        overlay.className = 'gallery-item-overlay';
        
        const title = document.createElement('h3');
        title.className = 'gallery-item-title';
        title.textContent = `Trabalho CGI ${i}`;
        
        const description = document.createElement('p');
        description.className = 'gallery-item-description';
        description.textContent = 'Renderização digital e efeitos visuais';
        
        overlay.appendChild(title);
        overlay.appendChild(description);
        
        galleryItem.appendChild(img);
        galleryItem.appendChild(overlay);
        
        // Adicionar evento de clique para abrir o modal
        galleryItem.addEventListener('click', () => openModal(i, `Trabalho CGI ${i}`, 'Renderização digital e efeitos visuais'));
        
        galleryGrid.appendChild(galleryItem);
    }
}

// Função para abrir o modal com a imagem
function openModal(imageNumber, title, description) {
    const modal = document.getElementById('image-modal');
    const modalImage = document.getElementById('modal-image');
    const imageTitle = document.getElementById('image-title');
    const imageDescription = document.getElementById('image-description');
    
    modalImage.src = `images/${imageNumber}.png`;
    modalImage.alt = title;
    imageTitle.textContent = title;
    imageDescription.textContent = description;
    
    modal.style.display = 'block';
    
    // Fechar modal ao clicar no X ou fora da imagem
    const closeBtn = document.querySelector('.close-btn');
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    };
    
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
}

// Menu mobile
function setupMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');
    
    mobileMenuBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
    });
}

// Smooth scroll para links de navegação
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Fechar menu mobile se estiver aberto
                const nav = document.querySelector('.nav');
                const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
                nav.classList.remove('active');
                mobileMenuBtn.classList.remove('active');
                
                // Calcular posição considerando o header fixo
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Formulário de contato
function setupContactForm() {
    const contactForm = document.querySelector('.contact-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Aqui você pode adicionar a lógica para enviar o formulário
        alert('Mensagem enviada com sucesso! Em breve entrarei em contato.');
        contactForm.reset();
    });
}

// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    loadGalleryImages();
    setupMobileMenu();
    setupSmoothScroll();
    setupContactForm();
    
    // Adicionar classe para animar elementos quando entram na viewport
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observar elementos para animação
    document.querySelectorAll('.gallery-item').forEach(el => {
        observer.observe(el);
    });
});
