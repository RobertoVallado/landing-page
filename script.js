const words = ["Software Developer", "Security Researcher"]; //"Hacker"];
const typed = document.getElementById("typed");
let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function type() {
    const currentWord = words[wordIndex];
    if (!deleting) {
        typed.textContent = currentWord.slice(0, charIndex + 1);
        charIndex++;
        if (charIndex === currentWord.length) {
            deleting = true;
            setTimeout(type, 900); // pause at full word
            return;
        }
    } else {
        typed.textContent = currentWord.slice(0, charIndex - 1);
        charIndex--;
        if (charIndex === 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }
    setTimeout(type, deleting ? 30 : 70);
}

window.addEventListener("DOMContentLoaded", () => {
    type();

    const yearSpan = document.getElementById("year");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
