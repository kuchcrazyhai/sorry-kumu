/* ==========================================
   PARTICLE CONTAINER
========================================== */

const particleContainer = document.getElementById("particles");

/* ==========================================
   FLOATING HEARTS
========================================== */

function createHeart() {

    const heart = document.createElement("img");

    heart.src = "assets/heart.png";
    heart.className = "heart";

    const size = Math.random() * 10 + 12;

    heart.style.width = size + "px";
    heart.style.height = size + "px";

    // Left or Right side only
    if (Math.random() < 0.5) {

        heart.style.left =
            Math.random() * (window.innerWidth * 0.22) + "px";

    } else {

        heart.style.left =
            (window.innerWidth * 0.78) +
            Math.random() * (window.innerWidth * 0.22) + "px";

    }

    // Random vertical position
    heart.style.top =
        Math.random() * window.innerHeight + "px";

    heart.style.animationDuration =
        (Math.random() * 8 + 8) + "s";

    particleContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 17000);
}

// Initial Hearts
for (let i = 0; i < 18; i++) {
    createHeart();
}

// Keep creating hearts
setInterval(createHeart, 1200);

/* ==========================================
   BUTTONS
========================================== */

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

/* YES BUTTON */

yesBtn.addEventListener("click", () => {

    yesBtn.innerHTML = "Loading...";
    yesBtn.style.pointerEvents = "none";

    setTimeout(() => {

        // Later:
        // window.location.href = "page2.html";

        window.location.href = "page2.html";

        yesBtn.innerHTML = "Okay, go ahead...";
        yesBtn.style.pointerEvents = "auto";

    }, 800);

});

/* NO BUTTON */

const popup = document.getElementById("popup");
const popupYes = document.getElementById("popupYes");

noBtn.addEventListener("click", () => {
    popup.classList.add("active");
});

popupYes.addEventListener("click", () => {
    popup.classList.remove("active");
});
/* ==========================================
   TOP RIGHT BUTTON
========================================== */

const topIcon = document.querySelector(".top-icon");

let dark = true;

topIcon.addEventListener("click", () => {

    if (dark) {

        document.body.style.background = "#efe8ff";
        document.body.style.color = "#222";

        topIcon.innerHTML =
            '<i class="fa-solid fa-moon"></i>';

    } else {

        document.body.style.background = "#13081f";
        document.body.style.color = "#ffffff";

        topIcon.innerHTML =
            '<i class="fa-solid fa-circle-half-stroke"></i>';

    }

    dark = !dark;

});

/* ==========================================
   BOTTOM HEART BUTTON
========================================== */

const heartBtn = document.querySelector(".music-btn");

heartBtn.addEventListener("click", () => {

    heartBtn.style.transform = "scale(1.2)";

    setTimeout(() => {

        heartBtn.style.transform = "scale(1)";

    }, 180);

});

/* ==========================================
   PAGE FADE IN
========================================== */

window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    requestAnimationFrame(() => {

        document.body.style.transition = "opacity .8s ease";
        document.body.style.opacity = "1";

    });

});

/* ==========================================
   PREVENT IMAGE DRAG
========================================== */

document.querySelectorAll("img").forEach(img => {

    img.setAttribute("draggable", "false");

});

/* ==========================================
   ENTER KEY
========================================== */

document.addEventListener("keydown", (e) => {

    if (e.key === "Enter") {

        yesBtn.click();

    }

});

/* ==========================================
   RESIZE
========================================== */

window.addEventListener("resize", () => {

    if (window.innerWidth <= 768) {

        noBtn.style.position = "static";

    }

});



document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        popup.classList.remove("active");

    }

});