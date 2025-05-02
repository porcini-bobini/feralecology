// Sample data - Replace with real data later
const events = [
    {
        title: "Spring Foraging Walk",
        date: "April 15, 2024",
        time: "10:00 AM - 1:00 PM",
        description: "Join us for a guided walk through local parks to identify edible spring plants and learn about sustainable foraging practices.",
        location: "Meeting point provided upon registration"
    },
    {
        title: "Natural Wine Making Workshop",
        date: "May 20, 2024",
        time: "2:00 PM - 5:00 PM",
        description: "Learn the basics of natural wine making, from fruit selection to fermentation techniques.",
        location: "Workshop location provided upon registration"
    }
];

// Initialize gallery images
const galleryImages = [
    { src: "images/wine1.jpg", alt: "Natural Wine Making Process" },
    { src: "images/foraging1.jpg", alt: "Foraging Adventure" },
    { src: "images/workshop1.jpg", alt: "Workshop Session" }
];

// Smooth scroll function
function smoothScroll(target, duration) {
    const targetElement = document.querySelector(target);
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

// Intersection Observer for sections
function initializeIntersectionObserver() {
    const sections = document.querySelectorAll('.section');
    const options = {
        root: null,
        threshold: 0.15,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
}

// Populate events with fade-in animation
function populateEvents() {
    const eventsGrid = document.querySelector('.events-grid');
    events.forEach((event, index) => {
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card';
        eventCard.style.opacity = '0';
        eventCard.style.transform = 'translateY(20px)';
        eventCard.innerHTML = `
            <h3>${event.title}</h3>
            <p><strong>Date:</strong> ${event.date}</p>
            <p><strong>Time:</strong> ${event.time}</p>
            <p>${event.description}</p>
            <p><em>${event.location}</em></p>
        `;
        eventsGrid.appendChild(eventCard);

        // Trigger fade-in animation
        setTimeout(() => {
            eventCard.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            eventCard.style.opacity = '1';
            eventCard.style.transform = 'translateY(0)';
        }, index * 200);
    });
}

// Populate gallery with hover effect
function populateGallery() {
    const galleryGrid = document.querySelector('.gallery-grid');
    galleryImages.forEach(image => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
            <img src="${image.src}" alt="${image.alt}" loading="lazy">
        `;
        galleryGrid.appendChild(galleryItem);
    });
}

// Handle navigation clicks
function initializeNavigation() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            smoothScroll(this.getAttribute('href'), 1000);
        });
    });
}

// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initializeIntersectionObserver();
    populateEvents();
    populateGallery();
    initializeNavigation();
});
