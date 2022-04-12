<route lang="yaml">
meta:
    title: 3D效果
    desc: box-shadow 设置多个属性
</route>

<template>
    <div relative flex justify="center" items="center" h-full bg="#2980b9">
        <div class="loading">
            <span v-for="(text, i) in 'Loading'" :style="{ animationDelay: `${0.1 * i}s` }">
                {{ text }}
            </span>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useHead } from "@vueuse/head"

useHead({
    link: [
        {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css?family=Baloo+Bhaijaan&display=swap",
        },
    ],
})
</script>

<style lang="less" scoped>
.loading {
    display: flex;
    color: white;
    font-size: 5em;
    font-family: "Baloo Bhaijaan", cursive;
    text-transform: uppercase;

    span {
        text-shadow: 0 1px #bbb, 0 2px #bbb, 0 3px #bbb, 0 4px #bbb, 0 5px #bbb, 0 6px transparent, 0 7px transparent, 0 8px transparent,
            0 9px transparent, 0 10px 10px rgb(0 0 0 / 40%);
        transform: translateY(20px);
        animation: bounce 0.3s ease infinite alternate;
    }
}

@keyframes bounce {
    to {
        text-shadow: 0 1px #bbb, 0 2px #bbb, 0 3px #bbb, 0 4px #bbb, 0 5px #bbb, 0 6px #bbb, 0 7px #bbb, 0 8px #bbb, 0 9px #bbb,
            0 50px 25px rgb(0 0 0 / 20%);
        transform: translateY(-20px);
    }
}
</style>
