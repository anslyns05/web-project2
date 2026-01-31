document.addEventListener("DOMContentLoaded", function () {

    /* ===============================
       Typing Effect (HOME page)
    =============================== */
    var welcomeText = document.querySelector(".welcome");
    if (welcomeText) {
        var message = welcomeText.textContent;
        welcomeText.textContent = "";

        var index = 0;
        var typingSpeed = 70;

        var typeEffect = setInterval(function () {
            if (index < message.length) {
                welcomeText.textContent += message.charAt(index);
                index++;
            } else {
                clearInterval(typeEffect);
            }
        }, typingSpeed);
    }

    /* ===============================
       Floating Image (HOME page)
    =============================== */
    var image = document.querySelector(".home-img img");
    if (image) {
        var imgPosition = 0;
        var movementDirection = 1;

        setInterval(function () {
            imgPosition += movementDirection * 0.5;
            if (imgPosition > 5 || imgPosition < -5) {
                movementDirection *= -1;
            }
            image.style.transform = "translateY(" + imgPosition + "px)";
        }, 30);
    }

    /* ===============================
       Digital Clock
    =============================== */
    var clock = document.getElementById("clock");
    if (clock) {
        function updateClock() {
            var now = new Date();
            var h = now.getHours();
            var m = now.getMinutes();
            var s = now.getSeconds();

            h = h < 10 ? "0" + h : h;
            m = m < 10 ? "0" + m : m;
            s = s < 10 ? "0" + s : s;

            clock.textContent = h + ":" + m + ":" + s;
        }

        setInterval(updateClock, 1000);
        updateClock();
    }
});


/* ===============================
   About Me Typing Effect
=============================== */

document.addEventListener("DOMContentLoaded", function () {

    const aboutMeList = [
        "My name is Nur Anis Syazlin Binti Abdul Razak, a 20-year-old from Changlun, Kedah, born in Kota Bharu, Kelantan.",
        "Currently, pursuing a Diploma in Information Management at UiTM Kedah.",
        "Enjoy reading novels, especially romance, listening to sad songs, and watching movies or dramas.",
        "During free time, I love spending time with family and friends, capturing beautiful moments, and exploring new places.",
        "A friendly person who values kindness, honesty, and teamwork.",
        "My dream is to build a stable career while making my loved ones proud."
    ];

    const container = document.getElementById("aboutMeText");
    const ul = document.createElement("ul");
    container.appendChild(ul);

    let itemIndex = 0;
    let charIndex = 0;
    let li;

    function typeWriterList() {

        // bila start item baru
        if (charIndex === 0) {
            li = document.createElement("li");
            ul.appendChild(li);
        }

        if (charIndex < aboutMeList[itemIndex].length) {
            li.textContent += aboutMeList[itemIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeWriterList, 20);
        } else {
            // siap satu ayat → pergi next bullet
            itemIndex++;
            charIndex = 0;

            if (itemIndex < aboutMeList.length) {
                setTimeout(typeWriterList, 300);
            }
        }
    }

    typeWriterList();

});






/* ===============================
   Education Box Hover Effect
=============================== */
document.addEventListener("DOMContentLoaded", function () {

    var boxes = document.querySelectorAll(".education-box");
    boxes.forEach(function (box) {
        box.style.transition = "transform 0.2s";

        box.addEventListener("mouseenter", function () {
            box.style.transform = "scale(1.02)";
        });

        box.addEventListener("mouseleave", function () {
            box.style.transform = "scale(1)";
        });
    });
});


/* ===============================
   Gallery Image Slider
=============================== */
document.addEventListener("DOMContentLoaded", function () {

    var currentIndex = 0;
    var images = document.querySelectorAll(".gallery-item");

    function changeImage(direction) {
        images[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + direction + images.length) % images.length;
        images[currentIndex].classList.add("active");
    }

    // expose function supaya onclick boleh guna
    window.changeImage = changeImage;

});


/* ===============================
   Gallery Card Effects
=============================== */
document.addEventListener("DOMContentLoaded", function () {

    var cards = document.querySelectorAll(".gallery-card img");
    cards.forEach(function (card) {
        card.style.transition = "transform 0.3s ease-in-out";

        card.addEventListener("mouseenter", function () {
            card.style.transform = "scale(1.05)";
        });

        card.addEventListener("mouseleave", function () {
            card.style.transform = "scale(1)";
        });
    });

    var galleryCards = document.querySelectorAll(".gallery-card");
    galleryCards.forEach(function (card, index) {
        card.style.opacity = 0;
        card.style.transform = "translateY(20px)";
        card.style.transition = "opacity 0.5s ease, transform 0.5s ease";

        setTimeout(function () {
            card.style.opacity = 1;
            card.style.transform = "translateY(0)";
        }, index * 200);
    });
});
