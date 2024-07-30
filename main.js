const anchors = document.querySelectorAll('a[href^="#"]');

anchors.forEach((anchor) => {
  anchor.addEventListener('click', (evt) => {
    evt.preventDefault();
    const targetId = anchor.getAttribute('href');
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  });
});