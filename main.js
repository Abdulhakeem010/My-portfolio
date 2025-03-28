document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    const offset = 100; // Adjust this based on your header height

    if (target) {
      const targetPosition = target.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: targetPosition - offset,
        behavior: "smooth"
      });
    }
  });
});


