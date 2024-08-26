"use strict";

// Add shadow to navigation bar when scrolling
window.addEventListener("scroll", (e) => {
    const navPane = document.querySelector(".navbar");
    if (window.pageYOffset > 0) {
        navPane.classList.add("navbarShadow");
    } else {
        navPane.classList.remove("navbarShadow");
    }
});

// Toggle visibility of navigation menu on mobile
const navOptions2 = document.querySelector(".navOptions2");
function toggleNavOptions2() {
    navOptions2.classList.toggle("navOptions2Visible");
}

// Toogle speaker list
var toShow = 9;
const speakerList = document.getElementsByClassName("card speaker");
const showAllCard = document.querySelector("#showAll");
const showLessCard = document.querySelector("#showLess");
var scrollToSpeaker = speakerList[toShow - 2];
function setToShow() {
    if (screen.width < 390) toShow = 4;
    else if (screen.width < 830) toShow = 5;
    else if (screen.width < 1010) toShow = 7;
    else if (screen.width < 1365) toShow = 9;
    else if (screen.width < 1540) toShow = 11;
    else if (screen.width < 1700)toShow = 13;
    else toShow = 15;
    scrollToSpeaker = speakerList[toShow - 2];
}
function hideSpeakers() {
    for (let speaker = toShow; speaker < speakerList.length; speaker++) {
        speakerList[speaker].classList.add("hide");
    }
}
function toggleSpeakerList() {
    for (let speaker = toShow; speaker < speakerList.length; speaker++) {
        speakerList[speaker].classList.toggle("hide");
    }
    showAllCard.classList.toggle("hide");
    showLessCard.classList.toggle("hide");
}
showAllCard.addEventListener("click", toggleSpeakerList);
showLessCard.addEventListener("click", () => {
    toggleSpeakerList();
    scrollToSpeaker.scrollIntoView();
});

setToShow();
hideSpeakers();
