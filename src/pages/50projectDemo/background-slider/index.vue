<route lang="yaml">
meta:
    title: Background Slider
</route>

<template>
    <div class="slider-container" :style="{ backgroundImage: `url(${state.list[state.current]})` }">
        <div
            class="slide"
            v-for="(image, index) in state.list"
            :key="index"
            :class="{ active: index == state.current }"
            :style="{ backgroundImage: `url(${image})` }"
        ></div>

        <button class="arrow left-arrow" @click="handleClickLeft">
            <i class="fas fa-arrow-left"></i>
        </button>

        <button class="arrow right-arrow" @click="handleClickRight">
            <i class="fas fa-arrow-right"></i>
        </button>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
const state = reactive({
    current: 0,
    list: [
        "//cdn.jsdelivr.net/gh/mbsky1213/images/web/2021/09/02/5w733f4kz6w.png",
        "//cdn.jsdelivr.net/gh/mbsky1213/images/web/2021/09/02/1269v5ln9nm.png",
        "//cdn.jsdelivr.net/gh/mbsky1213/images/web/2021/09/02/uouqzjxqlyd.png",
    ],
});

const handleClickLeft = () => {
    state.current--;
    if (state.current < 0) {
        state.current = state.list.length - 1;
    }
};

const handleClickRight = () => {
    state.current++;
    if (state.current >= state.list.length) {
        state.current = 0;
    }
};
</script>

<style lang="less" scoped>
.slider-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    height: 100vh;
    background-size: cover;
    background-position: center center;
    transition:  0.3s ease;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.7);
    }

    .slide {
        opacity: 0;
        width: 70vw;
        height: 70vh;
        background-position: center center;
        background-size: cover;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: 0.4s ease;
        z-index: 1;

        &.active {
            opacity: 1;
        }
    }

    .arrow {
        position: fixed;
        background-color: transparent;
        color: #fff;
        padding: 20px;
        font-size: 30px;
        border: 1px solid orange;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
        outline: 0;
        z-index: 2;

        &:active {
            opacity: 1;
        }

        &.left-arrow {
            left: calc(10vw - 65px);
        }

        &.right-arrow {
            right: calc(10vw - 65px);
        }
    }
}
</style>
