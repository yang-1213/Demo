<route lang="yaml">
meta:
    title: hover动画效果演示1
    desc: 利用伪元素实现
</route>

<template>
    <div class="content">
        <div class="btn" data-text="Start">
            <!-- 边框 -->
            <div class="border">
                <div class="border-top"></div>
                <div class="border-right"></div>
                <div class="border-bottom"></div>
                <div class="border-left"></div>
            </div>
            <span class="btn-text">Start</span>
        </div>
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
@color: #00a4ff;
@active-color: #006eff;
@ease-in-duration: 0.25s;
@ease-in-exponential: cubic-bezier(0.95, 0.05, 0.795, 0.035);
@ease-out-duration: 0.65s;
@ease-out-delay: @ease-in-duration;
@ease-out-exponential: cubic-bezier(0.19, 1, 0.22, 1);

.content {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #1a1e23;
    height: 100%;
    overflow: hidden;

    .btn {
        position: relative;
        width: 200px;
        height: 100px;
        top: 0;
        left: 0;
        cursor: pointer;
        outline: 1px solid @color;
        outline-offset: -1px;
        font-size: 1.5rem;
        color: @color;
        font-weight: bold;
        text-transform: uppercase;
        overflow: hidden;

        .border {
            position: absolute;
            width: 200px;
            height: 100px;

            .border-top {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 1px;
                background-color: @color;
                transform-origin: left;
                transform: scale(0);
                transition: @ease-in-duration @ease-in-exponential;
            }
            .border-right {
                position: absolute;
                right: 0;
                bottom: 0;
                width: 1px;
                height: 100%;
                background-color: @color;
                transform-origin: bottom;
                transform: scale(0);
                transition: @ease-in-duration @ease-in-exponential;
            }
            .border-bottom {
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 1px;
                background-color: @color;
                transform-origin: left;
                transform: scale(0);
                transition: @ease-out-duration @ease-out-delay @ease-in-exponential;
            }
            .border-left {
                position: absolute;
                bottom: 0;
                left: 0;
                width: 1px;
                height: 100%;
                background-color: @color;
                transform-origin: bottom;
                transform: scale(0);
                transition: @ease-out-duration @ease-out-delay @ease-in-exponential;
            }
        }

        .btn-text {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            transition: @ease-out-duration @ease-out-delay @ease-in-exponential;
        }

        &::after {
            position: absolute;
            content: attr(data-text);
            top: 50%;
            left: 50%;
            transform: translate(-50%, 50%);
            opacity: 0;
            transition: @ease-out-duration @ease-out-delay @ease-in-exponential;
        }

        &:hover {
            outline-color: @active-color;
            .border-top,
            .border-right,
            .border-bottom,
            .border-left {
                transform: scale(1);
            }

            .border-top,
            .border-right {
                transition: @ease-out-duration @ease-out-delay @ease-out-exponential;
            }
            .border-bottom,
            .border-left {
                transition: @ease-in-duration @ease-in-exponential;
            }

            .btn-text {
                opacity: 0;
                transform: translate(-50%, -100%);
                transition: all @ease-out-duration @ease-out-delay @ease-out-exponential;
            }

            &::after {
                opacity: 1;
                transform: translate(-50%, -50%);
                transition: all @ease-out-duration @ease-out-delay @ease-out-exponential;
            }
        }
    }
}
</style>
