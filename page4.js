/* ==========================================
   ELEMENTS
========================================== */

const particleContainer = document.getElementById("particles");

const forgiveBtn = document.getElementById("forgiveBtn");

const topIcon = document.querySelector(".top-icon");

const heartBtn = document.querySelector(".heart-btn");


/* ==========================================
   FLOATING PURPLE DOTS
========================================== */

function createDot(){

    const dot = document.createElement("div");

    dot.className = "dot";

    const size = Math.random() * 10 + 6;

    dot.style.width = size + "px";
    dot.style.height = size + "px";

    // Anywhere on the screen
    dot.style.left = Math.random() * window.innerWidth + "px";

    // Start from below the screen
    dot.style.top = (window.innerHeight + 30) + "px";

    // Different animation speeds
    dot.style.animationDuration =
        (Math.random() * 8 + 8) + "s";

    particleContainer.appendChild(dot);

    setTimeout(() => {

        dot.remove();

    },17000);

}

/* Initial Dots */

for(let i = 0; i < 18; i++){

    createDot();

}

/* Keep Creating */

setInterval(createDot,900);


/* ==========================================
   TOP BUTTON
========================================== */

topIcon.addEventListener("click",()=>{

    topIcon.style.transform="rotate(180deg)";

    setTimeout(()=>{

        topIcon.style.transform="rotate(0deg)";

    },300);

});


/* ==========================================
   HEART BUTTON
========================================== */

heartBtn.addEventListener("click",()=>{

    heartBtn.style.transform="scale(1.2)";

    setTimeout(()=>{

        heartBtn.style.transform="scale(1)";

    },200);

});


/* ==========================================
   FORGIVE BUTTON
========================================== */

forgiveBtn.addEventListener("click",()=>{

    // Change this later to your final page
    // window.location.href = "page5.html";

    window.location.href = "page5.html";

});