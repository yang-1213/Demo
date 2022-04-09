<route lang="yaml">
meta:
    title: 渐变效果
    desc: 利用伪元素
</route>

<template>
    <div flex justify="center" items="center" h-full bg="#222">
        <header>
            <h1 class="title">I'm Mbsky.</h1>
            <p class="subtitle">A CSS Wizard</p>
        </header>
    </div>
</template>

<script lang="ts" setup>
import { useHead } from "@vueuse/head"

useHead({
    link: [
        {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css?family=Lato",
        },
        {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css?family=Lora:400,400i,700",
        },
    ],
})
</script>

<style lang="less" scoped>
// 颜色配色网站: https://www.materialpalette.com/light-blue/pink

header {
    .title,
    .subtitle {
        position: relative;
        width: 250px;
        height: 30px;
        color: transparent;
        animation: fadeIn 2s 1.6s forwards;

        &::before {
            position: absolute;
            content: "";
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            transform: scaleX(0);
            transform-origin: left;
            animation: slideRight 2s cubic-bezier(0.75, 0, 0, 1) forwards;
        }
    }

    .title {
        margin: 0;
        font-family: Lora, serif;
        font-size: 32px;
        line-height: 30px;

        &::before {
            background: #ff4081;
        }
    }

    .subtitle {
        margin: 10px 0 0 0;
        font-family: Lato, sans-serif;
        font-size: 12px;
        line-height: 30px;
        letter-spacing: 5px;
        text-transform: uppercase;
        animation-delay: 3.2s;

        &::before {
            background: #03a9f4;
            animation-delay: 2s;
        }
    }
}

@keyframes fadeIn {
    to {
        color: white;
    }
}

@keyframes slideRight {
    50% {
        transform: scaleX(1);
        // 改变中心变换位置
        transform-origin: left;
    }

    50.1% {
        transform-origin: right;
    }

    to {
        transform-origin: right;
    }
}
</style>
