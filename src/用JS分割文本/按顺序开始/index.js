let landInTexts = document.querySelectorAll(".app");
landInTexts.forEach(landInText => {
    // textContent ==？ innerText
    let letters = landInText.textContent.split("");
    landInText.textContent = "";
    letters.forEach((letter, i) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.style.animationDelay = `${i * 0.1}s`;
        landInText.append(span);
    });
});
