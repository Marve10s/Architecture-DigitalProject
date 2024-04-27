export function initializeSlider() {
  const slides = document.querySelectorAll(".hero-img");
  const totalSlides = slides.length;
  const prevButton = document.querySelector(".prevButton");
  const nextButton = document.querySelector(".nextButton");
  const counterCurrent = document.querySelector(".counter-current");
  const counterTotal = document.querySelector(".counter-total");
  let currentSlideIndex = 0;

  // Update counter
  function updateCounter() {
    counterCurrent.textContent = currentSlideIndex + 1 + "/2";
    counterTotal.textContent = totalSlides;
  }

  // Show current slide
  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.style.display = "block";
      } else {
        slide.style.display = "none";
      }
    });
    currentSlideIndex = index;
    updateCounter();
  }

  // Event listener for previous button
  prevButton.addEventListener("click", function () {
    currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentSlideIndex);
  });

  // Event listener for next button
  nextButton.addEventListener("click", function () {
    currentSlideIndex = (currentSlideIndex + 1) % totalSlides;
    showSlide(currentSlideIndex);
  });

  // Show the initial slide
  showSlide(currentSlideIndex);
  // Update counter after showing initial slide
  updateCounter();
}
