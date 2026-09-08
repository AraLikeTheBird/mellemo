console.log("JS LOADED");

const burger = document.querySelector(".burgertoggle");
const nav = document.querySelector(".navlink");
burger.addEventListener("click", () => {
    nav.classList.toggle("active");
});


//Slider-Courosel
function createCarousel(slider) {
    console.log("createCarousel");

    const slides = slider.querySelectorAll(".poster-photo");

    if (slides.length === 0) return;

    let currentIndex = 0;

    // Create previous button
    const prevButton = document.createElement("button");
    prevButton.classList.add("carousel-prev");
    prevButton.type = "button";
    prevButton.innerHTML = "&#10094;";

    // Create next button
    const nextButton = document.createElement("button");
    nextButton.classList.add("carousel-next");
    nextButton.type = "button";
    nextButton.innerHTML = "&#10095;";

    // Create dots container
    const dotsContainer = document.createElement("div");
    dotsContainer.classList.add("carousel-dots");

    // Create dots
    slides.forEach((slide, index) => {
        const dot = document.createElement("button");

        dot.classList.add("carousel-dot");
        dot.type = "button";

        if (index === 0) {
            dot.classList.add("active");
        }

        dot.addEventListener("click", () => {
            currentIndex = index;
            updateCarousel();
        });

        dotsContainer.appendChild(dot);
    });

    // Add controls to slider
    slider.appendChild(prevButton);
    slider.appendChild(nextButton);
    slider.appendChild(dotsContainer);

    function updateCarousel() {
        console.log("updateCarousel");

        slides.forEach((slide, index) => {
            slide.classList.toggle(
                "active",
                index === currentIndex
            );
        });

        const dots = dotsContainer.querySelectorAll(".carousel-dot");

        dots.forEach((dot, index) => {
            dot.classList.toggle(
                "active",
                index === currentIndex
            );
        });
    }

    // Previous
    prevButton.addEventListener("click", () => {
        currentIndex--;

        if (currentIndex < 0) {
            currentIndex = slides.length - 1;
        }

        updateCarousel();
    });

    // Next
    nextButton.addEventListener("click", () => {
        currentIndex++;

        if (currentIndex >= slides.length) {
            currentIndex = 0;
        }

        updateCarousel();
    });

    // Show first slide
    updateCarousel();
}

// Find ALL sliders
document.querySelectorAll(".slider").forEach(slider => {
    createCarousel(slider);
});


