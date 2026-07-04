/* ==========================================
   ELEMENTS
========================================== */

const particleContainer = document.getElementById("particles");

const specialBtn = document.getElementById("specialBtn");

const topIcon = document.querySelector(".top-icon");

const heartBtn = document.querySelector(".heart-btn");


/* ==========================================
   FLOATING PURPLE DOTS
========================================== */

function createDot() {

    const dot = document.createElement("div");

    dot.className = "dot";

    const size = Math.random() * 9 + 6;

    dot.style.width = size + "px";
    dot.style.height = size + "px";

    // Anywhere on screen
    dot.style.left = Math.random() * window.innerWidth + "px";

    // Start from random position
    dot.style.top = Math.random() * window.innerHeight + "px";

    // Different speeds
    dot.style.animationDuration =
        (Math.random() * 8 + 8) + "s";

    particleContainer.appendChild(dot);

    setTimeout(() => {

        dot.remove();

    }, 17000);

}

/* Initial Dots */

for (let i = 0; i < 20; i++) {

    createDot();

}

/* Continue Creating */

setInterval(createDot, 900);


/* ==========================================
   TOP BUTTON
========================================== */

topIcon.addEventListener("click", () => {

    topIcon.style.transform = "rotate(180deg)";

    setTimeout(() => {

        topIcon.style.transform = "rotate(0deg)";

    }, 300);

});


/* ==========================================
   HEART BUTTON
========================================== */

heartBtn.addEventListener("click", () => {

    heartBtn.style.transform = "scale(1.2)";

    setTimeout(() => {

        heartBtn.style.transform = "scale(1)";

    }, 200);

});


/* ==========================================
   FINAL BUTTON
========================================== */

specialBtn.addEventListener("click", () => {

    window.location.href = "page6.html";

});