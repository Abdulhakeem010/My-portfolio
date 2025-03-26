console.log("JavaScript is working!");

// Wait for the page to fully load before initializing Lenis
window.onload = () => {
    if (typeof Lenis !== "undefined") {
        console.log("Lenis is loaded!");

        // Initialize Lenis
        const lenis = new Lenis({
            duration: 1.5, // Controls the scroll speed. Higher = slower.
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth easing
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    } else {
        console.error("Lenis failed to load.");
    }

    // Cursor following effect
    const circle = document.querySelector(".circle");

    document.addEventListener("mousemove", (e) => {
        circle.style.left = `${e.clientX}px`;
        circle.style.top = `${e.clientY}px`;
    });
};

