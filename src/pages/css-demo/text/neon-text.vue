<route lang="yaml">
meta:
    title: 霓虹文本
    desc: text-shadow完成
</route>

<template>
    <div flex justify="center" h-full items-center text-center bg="#222" p-5>
        <div class="neon">fushigi no monogatari</div>
    </div>
</template>

<script lang="ts" setup>
import { useHead } from "@vueuse/head"

useHead({
    link: [
        {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css?family=Pacifico",
        },
    ],
})
</script>

<style lang="less" scoped>
.neon {
    color: #cce7f8;
    font-size: 2.5em;
    font-family: "Pacifico", cursive;
    text-transform: uppercase;
    animation: shining 0.1s alternate infinite;
}

@keyframes shining {
    from {
        text-shadow: 0 0 6px rgba(182, 211, 207, 0.9), 0 0 30px rgba(182, 211, 207, 0.3), 0 0 12px rgba(15, 115, 223, 0.5),
            0 0 21px rgba(15, 115, 223, 0.9), 0 0 34px rgba(15, 115, 223, 0.8), 0 0 54px rgba(15, 115, 223, 0.9);
    }
    to {
        text-shadow: 0 0 6px rgba(182, 211, 207, 1), 0 0 30px rgba(182, 211, 207, 0.4), 0 0 12px rgba(15, 115, 223, 0.6),
            0 0 22px rgba(15, 115, 223, 0.8), 0 0 38px rgba(15, 115, 223, 0.9), 0 0 60px rgba(15, 115, 223, 1);
    }
}
</style>
