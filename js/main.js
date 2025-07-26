const aboutText1 = `Feral Ecology is a project exploring foraging | fermentation | food as portals for human + ecological expression, healing, and connectivity. 
It is an unfolding story of curious and whimsical humans with a twinkle in their eye 
for finding joy and meaning where the dandelions break through the concrete.`;

const aboutText2 = `The gift: feral fruit! Wild mushrooms! Invasive wild boar! Acorn! Seaweeds, clams and mussels!`;
const aboutText3 = `The salvation: your smile and the unexplainable glee in the mystery of creation 
that brings people to discover fermentation, fire, song, togetherness and a reverence for the earth which we are made of and belong to.`;

const aboutText4 = `Our offerings include wine, as well as a mix of events that revolve around the seasons. Community urban fruit harvests, educational hands on workshops, foraging outings, guerilla fruit tree planting, and more.`;
const aboutText5 = `Daniel Goldberg has been finding expression through cooking and foraging since he was a wee lad. 
He grew up in NYC, in a family of Soviet jewish immigrants, 
hearing stories of his parents picking mushrooms in the woods. 

He has been exploring the rich bay area landscape for 12 years: 
foraging, fermenting, surfing, rock climbing, 
and playing saxophone in various bands`;

const events = [
  {
    title: "Community Wild Plum Harvest & Processing",
    date: "July 17-19, 2025",
    description:
      "OPEN TO ALL!! Join us for a couple days of harvesting and processing East Bay Plums into wine. We have been diligently mapping public trees and getting permission from folks with backyard trees and now is the time to harvest. Pick a couple plums and call it a day or stay for the whole process! You'll be sure to learn tons, get dirty, and have fun :)",
    location: "Join us in the WhatsApp group for more details",
    signupUrl: "https://chat.whatsapp.com/FGkpB53p0xB9qylUDgiyQf",
  },
  {
    title: "Feral Winemaking: a seasonal practicum of wild fermentation",
    date: "July 20, 27th and Sept 7, 2025 (SERIES)",
    description:
      "A course cohosted with Learning By Hand, where we guide you through the entire winemaking process, from harvesting wild yeast to foraging hundreds of pounds of feral fruit, to bottling. A thorough educational opportunity to connect with the seasons, the abundance that is around us, and age old harvesting & food preservation techniques. ",
    location: "Full details and registration coming soon",
    signupUrl: "https://lu.ma/xmk8k5pc",
    location: "SIGN UP HERE",
  },
];

// Initialize gallery images
const galleryImages = [
  { src: "images/elderberry.png", alt: "elderberry" },
  { src: "images/bottles.png", alt: "bottles" },
  { src: "images/me-pouring.png", alt: "pouring" },
  { src: "images/prickly_pears_fermenting.png", alt: "fermentation" },
  { src: "images/loquats.png", alt: "loquats" },
  { src: "images/stomp.png", alt: "mashing plums" },
  { src: "images/cellar.png", alt: "mary fairy cellar" },
  { src: "images/stomp2.png", alt: "stomp" },
];

// Smooth scroll function
function smoothScroll(target, duration) {
  const targetElement = document.querySelector(target);
  const targetPosition =
    targetElement.getBoundingClientRect().top + window.pageYOffset;
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
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

// Intersection Observer for sections
function initializeIntersectionObserver() {
  const sections = document.querySelectorAll(".section");
  const options = {
    root: null,
    threshold: 0.15,
    rootMargin: "0px",
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, options);

  sections.forEach((section) => {
    observer.observe(section);
  });
}

// Populate events with fade-in animation
function populateEvents() {
  const eventsGrid = document.querySelector(".events-grid");
  events.forEach((event, index) => {
    const eventCard = document.createElement("div");
    eventCard.className = "event-card";
    eventCard.style.opacity = "0";
    eventCard.style.marginBottom = "20px";
    eventCard.style.transform = "translateY(20px)";

    const locationText = event.location.toUpperCase();

    eventCard.innerHTML = `
      <h3>${event.title}</h3>
      <p><strong>Date:</strong> ${event.date}</p>
      <p>${event.description}</p>
      <p><em>${`<a href="${event.signupUrl}" target="_blank" class="event-link">${locationText}</a>`}</em></p>
    `;
    eventsGrid.appendChild(eventCard);

    // Trigger fade-in animation
    setTimeout(() => {
      eventCard.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      eventCard.style.opacity = "1";
      eventCard.style.transform = "translateY(0)";
    }, index * 200);
  });
}

// Populate gallery with hover effect
function populateGallery() {
  const galleryGrid = document.querySelector(".gallery-grid");
  galleryImages.forEach((image) => {
    const galleryItem = document.createElement("div");
    galleryItem.className = "gallery-item";
    galleryItem.innerHTML = `
            <img src="${image.src}" alt="${image.alt}" loading="lazy">
        `;
    galleryGrid.appendChild(galleryItem);
  });
}

// Handle navigation clicks
function initializeNavigation() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      smoothScroll(this.getAttribute("href"), 1000);
    });
  });
}

// Add WhatsApp section after mailing list
function addWhatsAppSection() {
  const mailingListSection = document.querySelector("#mailing-list");
  const whatsAppDiv = document.createElement("div");
  whatsAppDiv.className = "whatsapp-section";
  whatsAppDiv.innerHTML = `
    <h3>Join Our WhatsApp Group</h3>
    <p>Connect with fellow foragers & fermenters and stay up to date on minutiae in our WhatsApp group!</p>
    <a href="https://chat.whatsapp.com/FGkpB53p0xB9qylUDgiyQf" target="_blank" class="whatsapp-link">
      Join WhatsApp Group
    </a>
  `;
  mailingListSection.appendChild(whatsAppDiv);
}

// Initialize everything when the DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Inject about text
  const aboutTextElement = document.getElementById("about-text");
  aboutTextElement.innerHTML = `<p>${aboutText1}</p><br /><p>${aboutText2}</p><br /><p>${aboutText3}</p><br /><p>${aboutText4}</p><br /><p>${aboutText5}</p><br /><p><a href="https://www.berkeleyside.org/2025/07/11/feral-ecology-fruit-wine-loquat-harvest-foraging" target="_blank" class="news-link">Read our recent article in Berkeleyside here</a></p>`;

  initializeIntersectionObserver();
  populateEvents();
  populateGallery();
  initializeNavigation();
  addWhatsAppSection();
});
