function showMessage() {

    const message = document.getElementById("message");
    const button = document.querySelector("button");

    message.classList.remove("hidden");

    button.innerHTML = "Thank You, Ma'am Mari! 💖";

    // Create floating hearts
    for (let i = 0; i < 15; i++) {

        const heart = document.createElement("div");

        heart.classList.add("heart");
        heart.innerHTML = "❤️";

        heart.style.left = Math.random() * 100 + "%";
        heart.style.animationDelay = Math.random() * 1.5 + "s";

        document.getElementById("hearts").appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 4000);
    }
}