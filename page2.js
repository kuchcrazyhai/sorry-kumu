/* ==========================================
   PAGE 2
========================================== */

const nextBtn = document.getElementById("nextBtn");

const popup = document.getElementById("promisePopup");
const promiseBtn = document.getElementById("promiseBtn");

nextBtn.addEventListener("click", () => {

    popup.classList.add("active");

});

promiseBtn.addEventListener("click", () => {

    window.location.href = "page3.html";

});


/* ==========================================
   TOP BUTTON
========================================== */

const topIcon = document.querySelector(".top-icon");

if (topIcon) {

    topIcon.addEventListener("click", () => {

        topIcon.style.transform = "rotate(180deg)";

        setTimeout(() => {

            topIcon.style.transform = "rotate(0deg)";

        }, 300);

    });

}


/* ==========================================
   BOTTOM HEART BUTTON
========================================== */

const heartBtn = document.querySelector(".heart-btn");

if (heartBtn) {

    heartBtn.addEventListener("click", () => {

        heartBtn.style.transform = "scale(1.15)";

        setTimeout(() => {

            heartBtn.style.transform = "scale(1)";

        }, 180);

    });

}

popup.addEventListener("click", (e) => {

    if (e.target === popup) {

        popup.classList.remove("active");

    }

});

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        popup.classList.remove("active");

    }

});