document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    const offset = 100; // Adjust for fixed headers
    const duration = 2000; // Longer duration = slower scrolling

    if (target) {
      const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
      smoothScrollTo(targetPosition, duration);
    }
  });
});

function smoothScrollTo(targetPosition, duration) {
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);

    window.scrollTo(0, startPosition + distance * easeOutExpo(progress));

    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function easeOutExpo(t) {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t); // Slows down towards the end
  }

  requestAnimationFrame(animation);
}

