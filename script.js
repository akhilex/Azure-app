document.addEventListener("DOMContentLoaded", () => {
    const animatedText = document.querySelector(".animated-text");

    animatedText.addEventListener("mouseover", () => {
        animatedText.style.transform = "scale(1.1)";
        animatedText.style.transition = "transform 0.3s ease-in-out";
    });

    animatedText.addEventListener("mouseout", () => {
        animatedText.style.transform = "scale(1)";
    });
});
