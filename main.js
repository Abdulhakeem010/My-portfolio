const circle = document.querySelector(".circle");

document.addEventListener("mousemove", (e) => {
    circle.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});

import Lenis from 'lenis'

const lenis = new Lenis({
  duration: 1.5, // Controls the scroll speed. Higher = slower.
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)