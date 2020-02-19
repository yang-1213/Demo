let duration = 0.8;
let delay = 0.3;
let revealText = document.querySelector(".app");
let letters = revealText.textContent.split("");
revealText.textContent = "";
let middle = letters.filter(e => e !== " ").length / 2; //去掉字符空格
// let middle = letters.length / 2; //没有去掉空格
letters.forEach((letter, i) => {
    let span = document.createElement("span");
    span.textContent = letter;
    // 中间的字符显示的快一点
    span.style.animationDelay = `${delay + Math.abs(i - middle) * 0.1}s`;
    revealText.append(span);
});
