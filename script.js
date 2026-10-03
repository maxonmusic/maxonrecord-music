const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");
const header = document.getElementById("header");
const year = document.getElementById("year");
const toast = document.getElementById("toast");

year.textContent = new Date().getFullYear();

/* Mobile navigation */
menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

/* Close mobile menu after clicking a link */
document.querySelectorAll(".navbar a").forEach((link) => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active");
    });
});

/* Header background when scrolling */
window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

/* Media filter */
const filterButtons = document.querySelectorAll(".filter-btn");
const mediaCards = document.querySelectorAll(".media-card");

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.dataset.filter;

        mediaCards.forEach((card) => {
            const category = card.dataset.category;

            if (filter === "all" || category === filter) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
});

/* Display notification */
function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 3500);
}

/* Contact form */
document.getElementById("contactForm").addEventListener("submit", (event) => {
    event.preventDefault();

    showToast(
        "Thank you for contacting MAXONRECORD. We will get back to you soon."
    );

    event.target.reset();
});

/* Newsletter form */
document.getElementById("newsletterForm").addEventListener("submit", (event) => {
    event.preventDefault();

    showToast("You have successfully subscribed to our newsletter.");

    event.target.reset();
});