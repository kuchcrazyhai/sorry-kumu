/* ==========================================
   ELEMENTS
========================================== */

const video = document.getElementById("video");
const progressFill = document.getElementById("progressFill");

const currentTime = document.getElementById("currentTime");
const duration = document.getElementById("duration");

const smileBtn = document.getElementById("smileBtn");

const topIcon = document.querySelector(".top-icon");
const heartBtn = document.querySelector(".heart-btn");


/* ==========================================
   FORMAT TIME
========================================== */

function formatTime(seconds){

    const mins = Math.floor(seconds / 60);

    const secs = Math.floor(seconds % 60);

    return (
        String(mins).padStart(2,"0")
        + ":" +
        String(secs).padStart(2,"0")
    );

}


/* ==========================================
   VIDEO DURATION
========================================== */

video.addEventListener("loadedmetadata",()=>{

    duration.textContent = formatTime(video.duration);

});


/* ==========================================
   VIDEO PLAY
========================================== */

video.addEventListener("click",()=>{

    if(video.paused){

        video.play();

    }else{

        video.pause();

    }

});


/* ==========================================
   PROGRESS BAR
========================================== */

video.addEventListener("timeupdate",()=>{

    const percent =
        (video.currentTime / video.duration) * 100;

    progressFill.style.width = percent + "%";

    currentTime.textContent =
        formatTime(video.currentTime);

});


/* ==========================================
   VIDEO END
========================================== */

video.addEventListener("ended",()=>{

    smileBtn.classList.add("show");

});


/* ==========================================
   BUTTON
========================================== */

smileBtn.addEventListener("click",()=>{

    window.location.href="page4.html";

});


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
   AUTO PLAY
========================================== */

window.addEventListener("load",()=>{

    video.play().catch(()=>{

        console.log("Autoplay blocked by browser.");

    });

});