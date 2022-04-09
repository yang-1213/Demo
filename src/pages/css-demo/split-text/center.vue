<route lang="yaml">
meta:
    title: 文字动画效果-1
    desc: 用js分割文本-中间位置交错
</route>

<template>
    <div flex justify="center" h-full items-center text-center bg="#222">
        <div class="content">
            <span v-for="(text, i) in state.msg" :key="text" :style="{ animationDelay: `${state.delay + Math.abs(i - state.middle) * 0.1}s` }">
                {{ text }}
            </span>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useHead } from "@vueuse/head"
import { onBeforeMount, reactive } from "vue"

useHead({
    link: [
        {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css?family=Raleway:400,400i,700",
        },
    ],
})

const state = reactive({
    msg: "sword art online",
    delay: 0.3,
    middle: 0,
})

onBeforeMount(() => {
    let letters = state.msg.split("")
    state.middle = letters.filter(e => e !== " ").length / 2 //去掉字符空格
})
</script>

<style lang="less" scoped>
.content {
    user-select: none;
    position: relative;
    display: flex;
    flex-wrap: wrap;
    color: #00d9ff;
    font-size: 1.5em;
    font-family: Raleway, sans-serif;
    letter-spacing: 3px;
    text-transform: uppercase;
    white-space: pre;

    span {
        opacity: 0;
        transform: scale(0);
        animation: fadeIn 2.4s forwards;
    }
    
    &::before,
    &::after {
        position: absolute;
        content: "";
        top: 0;
        bottom: 0;
        width: 2px;
        height: 100%;
        background: white;
        opacity: 0;
        transform: scale(0);
    }

    &::before {
        left: 50%;
        animation: slideLeft 1.5s cubic-bezier(0.7, -0.6, 0.3, 1.5) forwards;
    }

    &::after {
        right: 50%;
        animation: slideRight 1.5s cubic-bezier(0.7, -0.6, 0.3, 1.5) forwards;
    }
}

@keyframes fadeIn {
    to {
        opacity: 1;
        transform: scale(1);
    }
}

@keyframes slideLeft {
    to {
        left: -6%;
        opacity: 1;
        transform: scale(0.9);
    }
}

@keyframes slideRight {
    to {
        right: -6%;
        opacity: 1;
        transform: scale(0.9);
    }
}
</style>
