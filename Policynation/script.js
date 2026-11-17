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


function toggleReview(button){
  const reviewBody  = button.parentElement;

  reviewBody.classList.toggle('expanded');

  button.textContent = reviewBody.classList.contains('expanded') 
    ? 'Read less' 
    : 'Read more';
}
