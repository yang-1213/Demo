<route lang="yaml">
meta:
    title: loading效果
    desc: 交错动画：通过设置不同的延迟时间，达到动画交错播放的效果。
</route>

<template>
    <div class="loading">
        <div class="dot" v-for="num in 5"></div>
    </div>
</template>

<style lang="less" scoped>
@colors: #00f2fe, #00aeff, #008cff, #0066ff, #0000ff; // 颜色
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

        &::before {
            content: "";
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: inherit;
            background-color: inherit;
            animation: wave 2s infinite ease-out both;
        }

        // 循环
        .loop(@counter) when (@counter > 0) {
            &:nth-child(@{counter}) {
                // extract => less函数 返回集合中指定索引的值
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
