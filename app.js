let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("card");

  let width = screen.width;

  if (width >= 800) {
    if (n + 2 > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length - 2;
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slides[slideIndex + 1].style.display = "block";
    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex].style.display = "block";
  } else if (width < 768 && width >= 430) {
    if (n + 1 > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length - 1;
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
    slides[slideIndex].style.display = "block";
  } else {
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
  }
}

//
