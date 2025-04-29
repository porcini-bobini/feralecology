document.addEventListener('DOMContentLoaded', () => {
    // Initialize gallery placeholders
    initGallery();
    
    // Add scroll animations
    initScrollAnimations();
    
    // Enhanced worm background interactions
    initWormBackgroundEffects();
});

// Create gallery placeholders (to be replaced with real images later)
function initGallery() {
    const galleryContainer = document.getElementById('gallery-container');
    
    // Create 6 placeholder items
    for (let i = 0; i < 6; i++) {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        
        const placeholder = document.createElement('div');
        placeholder.className = 'placeholder';
        placeholder.textContent = `Gallery Image ${i + 1}`;
        
        galleryItem.appendChild(placeholder);
        galleryContainer.appendChild(galleryItem);
    }
    
    // Add click handler for future functionality
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', () => {
            // This can be expanded later to show image in lightbox
            console.log('Gallery item clicked');
        });
    });
}

// Add fade-in animations when scrolling
function initScrollAnimations() {
    const contentPanels = document.querySelectorAll('.content-panel');
    
    // Set initial state
    contentPanels.forEach(panel => {
        panel.style.opacity = '0';
        panel.style.transform = 'translateY(30px)';
        panel.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    });
    
    // Check if element is in viewport
    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
            rect.bottom >= 0
        );
    };
    
    // Function to handle scroll animation
    const handleScroll = () => {
        contentPanels.forEach(panel => {
            if (isInViewport(panel)) {
                panel.style.opacity = '1';
                panel.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();
}

// Add interactive effects to worm background
function initWormBackgroundEffects() {
    const wormsBackground = document.querySelector('.worms-background');
    
    // Subtle parallax effect on mouse movement
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        requestAnimationFrame(() => {
            wormsBackground.style.backgroundPosition = `${x * 50}px ${y * 50}px`;
        });
    });
    
    // Reset position when mouse leaves the window
    document.addEventListener('mouseleave', () => {
        wormsBackground.style.backgroundPosition = '0 0';
    });
}
