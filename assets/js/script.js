// ================= HERO SLIDER =================
let slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dot");
let index = 0;

function showSlide(i) {
    if (slides.length === 0) return;

    slides.forEach((slide, idx) => {
        slide.classList.remove("active");
        if (dots[idx]) dots[idx].classList.remove("active");
    });

    slides[i].classList.add("active");
    if (dots[i]) dots[i].classList.add("active");
}

// Next button
let nextBtn = document.querySelector(".next");
if (nextBtn) {
    nextBtn.onclick = () => {
        index = (index + 1) % slides.length;
        showSlide(index);
    };
}

// Prev button
let prevBtn = document.querySelector(".prev");
if (prevBtn) {
    prevBtn.onclick = () => {
        index = (index - 1 + slides.length) % slides.length;
        showSlide(index);
    };
}

// Auto slide
if (slides.length > 0) {
    setInterval(() => {
        index = (index + 1) % slides.length;
        showSlide(index);
    }, 4000);
}


// ================= DROPDOWN =================
let dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(drop => {
    drop.addEventListener("click", function (e) {
        e.stopPropagation();

        let menu = this.querySelector(".dropdown-menu");
        if (menu) menu.classList.toggle("show");
    });
});

// Close dropdown when clicking outside
document.addEventListener("click", () => {
    document.querySelectorAll(".dropdown-menu").forEach(menu => {
        menu.classList.remove("show");
    });
});


// ================= MOBILE MENU =================
let menuToggle = document.getElementById("menu-toggle");
let navLinks = document.getElementById("nav-links");

if (menuToggle) {
    menuToggle.onclick = () => {
        navLinks.classList.toggle("active");
    };
}


// ================= COUNTER (ABOUT PAGE) =================
let counters = document.querySelectorAll(".counter");

if (counters.length > 0) {
    counters.forEach(counter => {
        let update = () => {
            let target = +counter.getAttribute("data-target");
            let count = +counter.innerText;

            let increment = target / 100;

            if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(update, 20);
            } else {
                counter.innerText = target;
            }
        };

        update();
    });
}


// ================= SMOOTH SCROLL =================
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        let target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});