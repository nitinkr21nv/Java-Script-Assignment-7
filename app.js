let index = 0;
let slides = document.getElementsByClassName("slide");

function showSlide(i) {
    for (let j = 0; j < slides.length; j++) {
        slides[j].style.display = "none";
    }
    slides[i].style.display = "block";
}

function nextSlide() {
    index++;
    if (index >= slides.length) {
        index = 0;
    }
    showSlide(index);
}

function prevSlide() {
    index--;
    if (index < 0) {
        index = slides.length - 1;
    }
    showSlide(index);
}

setInterval(nextSlide, 3000);

showSlide(index);
