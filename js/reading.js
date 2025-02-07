document.addEventListener("DOMContentLoaded", function () {
    const lessons = {
        "1": {
            title: "Lesson 1: Salaat ul-Jumu'ah",
            images: ["../img/sarf/l1p1.png", "../img/sarf/l1p2.png"],
            audios: ["../audio/sarf/lesson1.m4a"]
        },
        "2": {
            title: "Lesson 2: Preparation for the trip",
            images: ["../img/sarf/l2p1.png", "../img/sarf/l2p2.png", "../img/sarf/l2p3.png"],
            audios: ["../audio/sarf/lesson2.m4a"]
        },
        "3": {
            title: "Lesson 3: At the Judge",
            images: ["../img/sarf/l3p1.png", "../img/sarf/l3p2.png"],
            audios: ["../audio/sarf/lesson3.m4a"]
        },
        "4": {
            title: "Lesson 4: The Day of EId",
            images: ["../img/sarf/l4p1.png", "../img/sarf/l4p2.png"],
            audios: ["../audio/sarf/lesson4.m4a"]
        }
    };

    // Get lesson number from URL parameters (e.g., reading.html?lesson=1)
    const urlParams = new URLSearchParams(window.location.search);
    const lessonNumber = urlParams.get("lesson");

    if (lessonNumber && lessons[lessonNumber]) {
        const lesson = lessons[lessonNumber];
        document.querySelector("h1").innerText = lesson.title;

        // Load images into the carousel
        const carouselInner = document.getElementById("carousel-images");
        lesson.images.forEach((img, index) => {
            const activeClass = index === 0 ? "active" : "";
            carouselInner.innerHTML += `
                <div class="carousel-item ${activeClass}">
                    <img src="images/${img}" class="d-block w-100" alt="${lesson.title}">
                </div>
            `;
        });

        // Load audio files
        const audioList = document.getElementById("audio-list");
        lesson.audios.forEach((audio, index) => {
            audioList.innerHTML += `
                <div class="mb-3">
                    <p>Audio ${index + 1}</p>
                    <audio controls>
                        <source src="audio/${audio}" type="audio/mpeg">
                        Your browser does not support the audio element.
                    </audio>
                </div>
            `;
        });

        // Manual Carousel Navigation
        const prevBtn = document.getElementById("prevSlide");
        const nextBtn = document.getElementById("nextSlide");
        let currentIndex = 0;

        prevBtn.addEventListener("click", function () {
            if (currentIndex > 0) {
                currentIndex--;
                document.querySelector(".carousel-item.active").classList.remove("active");
                document.querySelectorAll(".carousel-item")[currentIndex].classList.add("active");
            }
        });

        nextBtn.addEventListener("click", function () {
            if (currentIndex < lesson.images.length - 1) {
                currentIndex++;
                document.querySelector(".carousel-item.active").classList.remove("active");
                document.querySelectorAll(".carousel-item")[currentIndex].classList.add("active");
            }
        });
    } else {
        document.querySelector("h1").innerText = "Lesson Not Found";
    }
});
