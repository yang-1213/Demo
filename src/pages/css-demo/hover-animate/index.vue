<route lang="yaml">
meta:
    title: hover动画效果演示
    desc: hover动画
</route>

<template>
    <div class="content">
        <button class="btn" data-text="Start">
            <!-- 边框 -->
            <div class="border">
                <div class="border-top"></div>
                <div class="border-right"></div>
                <div class="border-bottom"></div>
                <div class="border-left"></div>
            </div>
            <span>Start</span>
        </button>
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
@active-color: #ff00f7;
@ease-in-duration: 0.25s;
@ease-in-exponential: cubic-bezier(0.95, 0.05, 0.795, 0.035);
@ease-out-duration: 0.65s;
@ease-out-delay: @ease-in-duration;
@ease-out-exponential: cubic-bezier(0.19, 1, 0.22, 1);
.content {
    display: flex;
    flex-wrap: wrap;
    height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: #1a1e23;
    font-family: Lato;
    overflow: hidden;
}
.btn {
    position: relative;
    padding: 1rem 3rem;
    font-size: 1rem;
    line-height: 1.5;
    color: @color;
    text-decoration: none;
    background-color: inherit;
    // border: 1px solid @color;
    outline: transparent;
    overflow: hidden;
    cursor: pointer;
    user-select: none;
    white-space: nowrap;
    transition: 0.25s;
    &::after {
        content: attr(data-text);
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 50%;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        transition: all 1s;
    }

    .border {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        div {
            position: absolute;
            background-color: @active-color;
            transform: scale(0);
        }
        .border-top {
            top: 0;
            left: 0;
            width: 100%;
            height: 1px;
            transform-origin: left;
            transition: all @ease-out-duration @ease-out-exponential;
        }
        .border-right {
            top: 0;
            right: 0;
            width: 1px;
            height: 100%;
            transform-origin: bottom;
            transition: all @ease-out-duration @ease-out-exponential;
        }
        .border-bottom {
            bottom: 0;
            left: 0;
            width: 100%;
            height: 1px;
            transform-origin: left;
            transition: all @ease-in-duration @ease-out-duration @ease-in-exponential;
        }
        .border-left {
            top: 0;
            left: 0;
            width: 1px;
            height: 100%;
            transform-origin: bottom;
            transition: all @ease-in-duration @ease-out-duration @ease-in-exponential;
        }
    }

    span {
        position: relative;
        top: 0;
        transition: all 1s;
    }
    &:hover {
        .border {
            div {
                transform: scale(1);
            }
            // 覆盖transition
            .border-top {
                transition: all @ease-out-duration @ease-out-delay @ease-out-exponential;
            }
            .border-right {
                transition: all @ease-out-duration @ease-out-delay @ease-out-exponential;
            }
            .border-bottom {
                transition: all @ease-in-duration @ease-in-exponential;
            }
            .border-left {
                transition: all @ease-in-duration @ease-in-exponential;
            }
        }
        span {
            top: -1rem;
            opacity: 0;
        }
        &::after {
            top: 0;
            opacity: 1;
        }
    }
}
</style>
