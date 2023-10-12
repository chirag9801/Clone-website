
const checkbox = document.getElementById('click');
const body = document.body;

checkbox.addEventListener('change', () => {
  if (checkbox.checked) {
    body.style.overflow = 'hidden'; // Prevent scrolling
  } else {
    body.style.overflow = 'auto'; // Enable scrolling
  }
});