/* ==========================================
   ELEMENTS
========================================== */

const particleContainer = document.getElementById("particles");

const topIcon = document.querySelector(".top-icon");

const heartBtn = document.querySelector(".heart-btn");

const dots = document.querySelectorAll(".dots span");


/* ==========================================
   FLOATING PURPLE DOTS
========================================== */

function createDot() {

    const dot = document.createElement("div");

    dot.className = "dot";

    const size = Math.random() * 10 + 6;

    dot.style.width = size + "px";
    dot.style.height = size + "px";

    // Anywhere on screen
    dot.style.left = Math.random() * window.innerWidth + "px";
    dot.style.top = Math.random() * window.innerHeight + "px";

    dot.style.animationDuration =
        (Math.random() * 8 + 8) + "s";

    particleContainer.appendChild(dot);

    setTimeout(() => {

        dot.remove();

    }, 17000);

}

/* Initial Dots */

for (let i = 0; i < 18; i++) {

    createDot();

}

/* Keep Creating */

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
   BOTTOM DOTS ANIMATION
========================================== */

let activeDot = 0;

setInterval(() => {

    dots.forEach(dot => {

        dot.style.transform = "scale(1)";
        dot.style.opacity = "0.5";

    });

    dots[activeDot].style.transform = "scale(1.6)";
    dots[activeDot].style.opacity = "1";

    activeDot++;

    if (activeDot >= dots.length) {

        activeDot = 0;

    }

}, 350);


/* ==========================================
   PAGE FADE IN
========================================== */

window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    requestAnimationFrame(() => {

        document.body.style.transition = "opacity 1s ease";

        document.body.style.opacity = "1";

    });

});