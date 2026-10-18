
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const yesMessage = document.getElementById("yesMessage");

const modal = document.getElementById("sorryModal");
const closeModal = document.getElementById("closeModal");
const closeBtn = document.getElementById("closeBtn");
const tryAgainBtn = document.getElementById("tryAgainBtn");

// When she chooses YES
yesBtn.addEventListener("click", () => {
    yesMessage.hidden = false;
    yesBtn.textContent = "Thank you, babeee! 💖";
    yesBtn.disabled = true;

    noBtn.hidden = true;

    yesMessage.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });
});

// When she chooses NO
noBtn.addEventListener("click", () => {
    modal.hidden = false;
    document.body.style.overflow = "hidden";
});

// Close popup
function hidePopup() {
    modal.hidden = true;
    document.body.style.overflow = "";
}

closeModal.addEventListener("click", hidePopup);
closeBtn.addEventListener("click", hidePopup);

// Let her reconsider if she wants
tryAgainBtn.addEventListener("click", () => {
    hidePopup();
    yesBtn.focus();
});

// Close if she taps the dark area outside the popup
modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        hidePopup();
    }
});

// Close popup with Escape key
document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !modal.hidden) {
        hidePopup();
    }
});

// Floating hearts
const hearts = ["💗", "💕", "💖", "💞", "❤️"];

for (let i = 0; i < 12; i++) {
    const heart = document.createElement("div");

    heart.className = "floating-heart";
    heart.textContent = hearts[i % hearts.length];
    heart.style.left = Math.random() * 96 + "%";
    heart.style.animationDelay = Math.random() * 9 + "s";
    heart.style.animationDuration = (7 + Math.random() * 6) + "s";
    heart.style.fontSize = (16 + Math.random() * 15) + "px";

    document.body.appendChild(heart);
}

// Sparkles
for (let i = 0; i < 14; i++) {
    const sparkle = document.createElement("div");

    sparkle.className = "sparkle";
    sparkle.textContent = i % 2 === 0 ? "✦" : "✧";
    sparkle.style.left = Math.random() * 96 + "%";
    sparkle.style.top = Math.random() * 95 + "%";
    sparkle.style.animationDelay = Math.random() * 2 + "s";

    document.body.appendChild(sparkle);
}
