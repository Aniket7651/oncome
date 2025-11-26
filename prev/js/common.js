document.getElementById('hamburger').addEventListener('click', function () {
    this.classList.toggle('active');
    document.getElementById('nav-menu').classList.toggle('active');
});

document.querySelectorAll('#nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('hamburger').classList.remove('active');
        document.getElementById('nav-menu').classList.remove('active');
    });
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Section Fade In
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});







// slide show for partners

let currentSlide = 0;

const track = document.getElementById("partnerTrack");
const slides = document.querySelectorAll(".partner-slide-group");
const dotsContainer = document.getElementById("dotsContainer");

const totalSlides = slides.length;

// Create dots
for (let i = 0; i < totalSlides; i++) {
    let dot = document.createElement("span");
    dot.onclick = () => goToSlide(i);
    dotsContainer.appendChild(dot);
}

updateSlide();

function changeSlide(n) {
    currentSlide = (currentSlide + n + totalSlides) % totalSlides;
    updateSlide();
}

function goToSlide(index) {
    currentSlide = index;
    updateSlide();
}

function updateSlide() {
    track.style.transform = `translateX(-${currentSlide * 100}%)`;

    // update dots
    dotsContainer.querySelectorAll("span")
        .forEach((dot, idx) => dot.classList.toggle("active", idx === currentSlide));
}