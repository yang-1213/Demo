<route lang="yaml">
meta:
    title: 点击效果
    desc: radial-gradient
</route>

<template>
    <div class="content">
        <button class="btn">Click Me</button>
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
    background-color: #eceffc;
    height: 100%;

    .btn {
        @btn-color: #ff0080;
        position: relative;
        padding: 1rem 2rem;
        border-radius: 6px;
        background-color: @btn-color;
        color: #fff;
        outline: none;
        transition: transform ease-in 0.1s, background-color ease-in 0.1s, box-shadow ease-in 0.25s;
        box-shadow: 0 0.1px 0.7px rgba(233, 30, 99, 0.141), 0 0.1px 1.7px rgba(233, 30, 99, 0.202), 0 0.3px 3.1px rgba(233, 30, 99, 0.25),
            0 0.4px 5.6px rgba(233, 30, 99, 0.298), 0 0.8px 10.4px rgba(233, 30, 99, 0.359), 0 2px 25px rgba(233, 30, 99, 0.5);

        &::before {
            position: absolute;
            content: "";
            left: -2em;
            right: -2em;
            top: -2em;
            bottom: -2em;
            transition: ease-in-out 0.5s;
            background-repeat: no-repeat;
            background-image: radial-gradient(circle, @btn-color 20%, transparent 20%), radial-gradient(circle, @btn-color 20%, transparent 20%),
                radial-gradient(circle, transparent 20%, @btn-color 20%, transparent 30%), radial-gradient(circle, @btn-color 20%, transparent 20%),
                radial-gradient(circle, transparent 20%, @btn-color 20%, transparent 30%), radial-gradient(circle, @btn-color 20%, transparent 20%),
                radial-gradient(circle, @btn-color 20%, transparent 20%), radial-gradient(circle, transparent 20%, @btn-color 20%, transparent 30%),
                radial-gradient(circle, @btn-color 20%, transparent 20%), radial-gradient(circle, transparent 20%, @btn-color 20%, transparent 30%),
                radial-gradient(circle, @btn-color 20%, transparent 20%), radial-gradient(circle, transparent 20%, @btn-color 20%, transparent 30%),
                radial-gradient(circle, transparent 20%, @btn-color 20%, transparent 30%), radial-gradient(circle, @btn-color 20%, transparent 20%),
                radial-gradient(circle, @btn-color 20%, transparent 20%), radial-gradient(circle, @btn-color 20%, transparent 20%);
            background-size: 18% 10%, 14% 11%, 19% 16%, 17% 15%, 14% 20%, 18% 17%, 15% 12%, 16% 18%, 19% 20%, 12% 18%, 13% 17%, 17% 16%, 17% 19%,
                12% 17%, 16% 13%, 15% 13%;
            background-position: 18% 40%, 20% 31%, 30% 30%, 40% 30%, 50% 30%, 57% 30%, 65% 30%, 80% 32%, 15% 60%, 83% 60%, 18% 70%, 25% 70%, 41% 70%,
                50% 70%, 64% 70%, 80% 71%;
            animation: bubbles ease-in-out 0.75s forwards;
        }

        &:active {
            transform: scale(0.9);
            background: @btn-color;
            &::before {
                animation: none;
                background-size: 0;
            }
        }
    }

    @keyframes bubbles {
        0% {
            background-position: 18% 40%, 20% 31%, 30% 30%, 40% 30%, 50% 30%, 57% 30%, 65% 30%, 80% 32%, 15% 60%, 83% 60%, 18% 70%, 25% 70%, 41% 70%,
                50% 70%, 64% 70%, 80% 71%;
        }

        50% {
            background-position: 10% 44%, 0% 20%, 15% 5%, 30% 0%, 42% 0%, 62% -2%, 75% 0%, 95% -2%, 0% 80%, 95% 55%, 7% 100%, 24% 100%, 41% 100%,
                55% 95%, 68% 96%, 95% 100%;
        }

        100% {
            background-position: 5% 44%, -5% 20%, 7% 5%, 23% 0%, 37% 0, 58% -2%, 80% 0%, 100% -2%, -5% 80%, 100% 55%, 2% 100%, 23% 100%, 42% 100%,
                60% 95%, 70% 96%, 100% 100%;
            background-size: 0% 0%;
        }
    }
}
</style>
