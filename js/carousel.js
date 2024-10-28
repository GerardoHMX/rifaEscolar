document.addEventListener('DOMContentLoaded', function() {
   
    const carousel = document.querySelector('.carousel');
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.carousel-indicator');
    let currentSlide = 0;
    const totalSlides = slides.length;

    function goToSlide(n) {
        carousel.style.transform = `translateX(-${n * 100}%)`;
        currentSlide = n;
        updateIndicators();
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        goToSlide(currentSlide);
    }

    function updateIndicators() {
        indicators.forEach((indicator, index) => {
            if (index === currentSlide) {
                indicator.classList.add('active');
                indicator.setAttribute('aria-current', 'true');
            } else {
                indicator.classList.remove('active');
                indicator.removeAttribute('aria-current');
            }
        });
    }

    // Set up click events for indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => goToSlide(index));
    });

    // Set up automatic scrolling
    setInterval(nextSlide, 6000);

    // Initialize
    updateIndicators();
    
});