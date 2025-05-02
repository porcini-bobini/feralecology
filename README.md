# Feral Ecology

A website for Feral Ecology, showcasing natural wine making, foraging events, and educational resources.

## Project Structure

```
feralecology/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
└── images/
    ├── feral-ecology-text.png
    ├── worms-pattern.png
    ├── pouring.jpg
    └── ... (other images)
```

## Setup Instructions

1. Clone this repository
2. Place the following images in the `images/` directory:
   - `feral-ecology-text.png` - The main logo
   - `worms-pattern.png` - The animated background pattern
   - `pouring.jpg` - The profile/intro image
   - Additional images for the gallery section

## Customization

### Adding Events
Edit the `events` array in `js/main.js` to add or modify upcoming events:

```javascript
const events = [
    {
        title: "Event Title",
        date: "Event Date",
        time: "Event Time",
        description: "Event Description",
        location: "Event Location"
    }
];
```

### Adding Gallery Images
Add new images to the `galleryImages` array in `js/main.js`:

```javascript
const galleryImages = [
    { src: "images/your-image.jpg", alt: "Image Description" }
];
```


## Features

- Responsive design that works on all devices
- Animated worms background
- Dynamic content loading
- Smooth scroll animations
- Google Forms integration for mailing list
- Image gallery with hover effects
- Organized sections for events, resources, and more

## Browser Support

The website is compatible with modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

All rights reserved © 2024 Feral Ecology 