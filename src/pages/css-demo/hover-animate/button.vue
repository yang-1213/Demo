<route lang="yaml">
meta:
    title: hover动画效果演示2
    desc: overflow障眼法
</route>

<template>
    <div class="content">
        <button class="btn">hover me</button>
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
    ],
})
</script>

<style lang="less" scoped>
.content {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1a1e23;
    height: 100%;
    overflow: hidden;

    .btn {
        position: relative;
        padding: 1rem 3rem;
        font-size: 1rem;
        line-height: 1.5;
        text-decoration: none;
        color: white;
        background: transparent;
        border: 1px solid hsl(190, 100%, 41%);
        outline: transparent;
        overflow: hidden;
        cursor: pointer;
        user-select: none;
        white-space: nowrap;
        transition: 0.6s;
        text-transform: uppercase;

        &::before {
            position: absolute;
            content: "";
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(120deg, transparent, hsla(190, 100%, 41%, 0.5), transparent);
            transform: translateX(-100%);
            transition: 0.6s;
        }

        &:hover {
            box-shadow: 0 0 20px 10px hsla(187, 100%, 41%, 0.5);
            &::before {
                transform: translateX(100%);
            }
        }
    }
}
</style>
