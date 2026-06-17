// Loader

window.addEventListener("load", () => {
    document.querySelector(".loader").style.display = "none";
});

// Typing Effect

const words = [
    "Frontend Developer",
    "React Developer",
    "Web Designer",
    "Problem Solver"
];

let wordIndex = 0;
let charIndex = 0;

const typing = document.getElementById("typing");

function typeEffect() {

    if (charIndex < words[wordIndex].length) {

        typing.textContent +=
            words[wordIndex].charAt(charIndex);

        charIndex++;

        setTimeout(typeEffect, 100);

    } else {

        setTimeout(eraseEffect, 1500);
    }
}

function eraseEffect() {

    if (charIndex > 0) {

        typing.textContent =
            words[wordIndex].substring(
                0,
                charIndex - 1
            );

        charIndex--;

        setTimeout(eraseEffect, 50);

    } else {

        wordIndex =
            (wordIndex + 1) % words.length;

        setTimeout(typeEffect, 300);
    }
}

typeEffect();

// Dark Light Mode

const themeBtn =
document.getElementById("themeToggle");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    themeBtn.classList.toggle("fa-sun");
});

// Scroll Reveal

const reveals =
document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

    reveals.forEach((el) => {

        const top =
            el.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {

            el.classList.add("active");
        }

    });

});

// Active Navigation

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            .includes(current)
        ) {

            link.classList.add("active");
        }
    });
});