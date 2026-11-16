const container = document.getElementById('scrollContainer');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const scrollAmount = 320;

prevBtn.addEventListener('click', () => {
  container.scrollBy({
    left: -scrollAmount,
    behavior: 'smooth'
  });
});

nextBtn.addEventListener('click', () => {
  container.scrollBy({
    left: scrollAmount,
    behavior: 'smooth'
  });
});


function toggleReview(button) {
  const reviewBody = button.parentElement;
  const dots = reviewBody.querySelector(".dots");
  const moreText = reviewBody.querySelector(".more-text");

  if (moreText.style.display === "inline") {
    moreText.style.display = "none";
    dots.style.display = "inline";
    button.textContent = "Read more";
  } else {
    moreText.style.display = "inline";
    dots.style.display = "none";
    button.textContent = "Read less";
  }
}




