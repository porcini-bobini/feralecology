const aboutText1 = `Feral Ecology is where humans, nature, and food meet.  Through foraging, fermentation, and community building, we aim to build a direct relationship with the land, celebrate diverse traditions, and cultivate wholeness for a more resilient future.`;
const aboutText2 = `We offer natural wines/ciders/meads, as well as revolving seasonal events -- community urban fruit harvests, workshops, guided forays, guerilla fruit tree planting, retreats, and more.`;

const aboutText3 = `The gift: feral fruit! Wild mushrooms! Acorns! Seaweed, clams and mussels! Invasive wild boar!`;
const aboutText4 = `The salvation: your smile and the unfolding mystery
that brings people to discover fermentation, fire, song, and reverence for the earth which we are made of and belong to.`;

const aboutText5 = `Daniel Goldberg has been exploring cooking and foraging since he was a wee lad. 
He grew up in NYC, in a family of Soviet Jewish immigrants, 
hearing stories of his parents picking mushrooms in the woods, but has called the Bay Area home for over 12 years. 
`;

const events = [
  {
    title: "FERAL FEST!",
    date: "January 18, 2026 2-8pm @ The Study Wine Bar, Richmond, CA",
    description:
      "What is our folk culture? Feral Fest! is one answer - or at least an earnest & unhinged attempt at exploring that question.\n\n A moment to fill our cups on the quest for belonging, connection and participation in the most fundamental aspects of living. A raucous celebration of the folk ways!\n\n East bay chanterelles on hot fresh pizza piesss, wines n ciders from foraged fruits, circle dancing to hot Balkan brass bands til you get dizzy, wild mushroom display table. And funky crafts from the homies - bags from upcycled sails, bay nut chocolates, bioregional arts n crafts!?! The art of living well in deep connection with nature and one another. A daily practice, an act of resistance, a yearning, a privilege and a gift.\n\n This is our quirky slice of life in the bay. A pop-up village of wanderers and dreamers, where when the fog pulls in and the people go home, the ancestors will smile and see themselves in our reenactment.",
    location: "RSVP HERE!",
    signupUrl: "https://partiful.com/e/otmXMC1ZZ94gSUlQTREf",
  },
];

// Initialize gallery images
const galleryImages = [
  { src: "images/elderberry.png", alt: "elderberry" },
  { src: "images/bottles.png", alt: "bottles" },
  { src: "images/me-pouring.png", alt: "pouring" },
  { src: "images/prickly_pears_fermenting.png", alt: "fermentation" },
  { src: "images/porcini.png", alt: "loquats" },
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
  const preorderTextElement = `<a
              href="https://docs.google.com/forms/d/e/1FAIpQLScAY7OrXkxcG9Puip8YrSsnT75xE1_Kb3yynlg_TvIfSVQqyA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              class="preorder-link"
            >
              >>> PREORDER WINES HERE <<<
            </a>`;
  aboutTextElement.innerHTML = `<p>${aboutText1}</p><br /><p>${aboutText2}</p> <p>${preorderTextElement}</p><br /><p>${aboutText3}</p><br /><p>${aboutText4}</p><br /><p>${aboutText5}</p><br /><p><a href="https://www.berkeleyside.org/2025/07/11/feral-ecology-fruit-wine-loquat-harvest-foraging" target="_blank" class="news-link">Read our recent article in Berkeleyside here</a></p>`;

  initializeIntersectionObserver();
  populateEvents();
  populateGallery();
  initializeNavigation();
  addWhatsAppSection();
});
