<route lang="yaml">
meta:
    title: 发光文本
    desc: text-shadow完成
</route>

<template>
    <div flex justify="center" h-full items-center text-center bg="#222" p-5>
        <p class="glowIn">
            <span v-for="(text, i) in state.msg" :style="{ animationDelay: `${0.1 * i}s` }">{{ text }}</span>
        </p>
    </div>
</template>

<script lang="ts" setup>
import { useHead } from "@vueuse/head"
import { reactive } from "vue"

useHead({
    link: [
        {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css?family=Lora:400,400i,700",
        },
    ],
})

const state = reactive({
    msg: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mattis
            pellentesque id nibh tortor. Suspendisse ultrices gravida dictum fusce ut placerat orci nulla. A lacus vestibulum sed arcu.`,
})
</script>

<style lang="less" scoped>
.glowIn {
    font-family: "Lora", serif;
    font-size: 20px;
    color: #fff;
    text-align: left;
    span {
        animation: glow-in 1s ease-in-out both;
    }
}

@keyframes glow-in {
    from {
        opacity: 0;
    }
    65% {
        opacity: 1;
        text-shadow: 0 0 25px white;
    }
    75% {
        opacity: 1;
    }
    to {
        opacity: 0.7;
    }
}
</style>
