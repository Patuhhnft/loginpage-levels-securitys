const imagesContainer = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const indicatorsContainer = document.querySelector('.indicators');

let index = 0;
let interval = setInterval(nextImage, 5000); // Troca automática a cada 5 segundos

images.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.classList.add('indicator');
    if (i === 0) dot.classList.add('active');
    dot.addEventListener('click', () => goToImage(i));
    indicatorsContainer.appendChild(dot);
});

const indicators = document.querySelectorAll('.indicator');

function updateCarousel() {
    imagesContainer.style.transform = `translateX(${-index * 100}%)`;
    indicators.forEach(dot => dot.classList.remove('active'));
    indicators[index].classList.add('active');
}

function nextImage() {
    index = (index + 1) % images.length;
    updateCarousel();
}

function prevImage() {
    index = (index - 1 + images.length) % images.length;
    updateCarousel();
}

function goToImage(i) {
    index = i;
    updateCarousel();
    resetInterval();
}

function resetInterval() {
    clearInterval(interval);
    interval = setInterval(nextImage, 5000); // Reinicia o intervalo para a próxima troca automática
}

nextBtn.addEventListener('click', () => { nextImage(); resetInterval(); });
prevBtn.addEventListener('click', () => { prevImage(); resetInterval(); });