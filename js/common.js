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



const xtrack = document.getElementById('xtrack');
    const xdotsContainer = document.getElementById('xdots');
    let xindex = 0;
    const xtotal = xtrack.children.length;

    // Dots create karo
    for (let i = 0; i < xtotal; i++) {
      const dot = document.createElement('span');
      dot.className = 'xdot';
      if (i === 0) dot.classList.add('active');
      dot.onclick = () => goToX(i);
      xdotsContainer.appendChild(dot);
    }

    const xdots = document.querySelectorAll('.xdot');

    function moveX(n) {
      xindex += n;
      if (xindex >= xtotal) xindex = 0;
      if (xindex < 0) xindex = xtotal - 1;
      updateX();
    }

    function goToX(n) {
      xindex = n;
      updateX();
    }

    function updateX() {
      xtrack.style.transform = `translateX(-${xindex * 100}%)`;
      xdots.forEach(d => d.classList.remove('active'));
      xdots[xindex].classList.add('active');
    }

    // Auto play
    setInterval(() => moveX(1), 4500);