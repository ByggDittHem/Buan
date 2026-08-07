/*
=====================================
 BUAN - script.js
 Version 1.0
=====================================
*/

document.addEventListener("DOMContentLoaded", () => {

    // Mjuk scroll för interna länkar
    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", e => {

            const target = document.querySelector(link.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        });

    });

    // Scroll-animationer
    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    }, {
        threshold: 0.15
    });

    document.querySelectorAll("section, .card").forEach(element => {

        element.classList.add("fade-in");

        observer.observe(element);

    });

});
