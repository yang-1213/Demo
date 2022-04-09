<route lang="yaml">
meta:
    title: loading动画
    desc: 交错动画
</route>

<template>
    <div class="loading">
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
        <div class="dot"></div>
    </div>
</template>

<style lang="less" scoped>
@colors: #7ef9ff, #89cff0, #4682b4, #0f52ba, #000080; // 颜色
.loading {
    display: flex;
    height: 100%;
    justify-content: center;
    align-items: center;
    background-color: #222;
    .dot {
        position: relative;
        margin: 0.8em;
        width: 2em;
        height: 2em;
        border-radius: 50%;
        animation: move 2s infinite ease-in-out;

        &::before {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: inherit;
            background-color: inherit;
            animation: wave 2s infinite ease-out;
        }

        // 循环
        .loop(@counter) when (@counter > 0) {
            &:nth-child(@{counter}) {
                // extract => less函数
                background: extract(@colors, @counter);
                animation-delay: @counter * 0.2s;
                &::before {
                    animation-delay: @counter * 0.2s;
                }
            }
            .loop((@counter - 1)); // 递归调用自身
        }

        .loop(5); // 调用循环
    }
}

// 移动
@keyframes move {
    0%,
    50%,
    100% {
        transform: translateY(0);
    }
    20% {
        transform: translateY(-2em);
    }
    80% {
        transform: translateY(2em);
    }
}

@keyframes wave {
    50%,
    75% {
        transform: scale(2.5);
    }

    80%,
    100% {
        opacity: 0;
    }
}
</style>
