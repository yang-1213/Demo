<route lang="yaml">
meta:
    title: 按钮波纹效果
</route>

<template>
    <div class="content">
        <button class="ripple" @click="handleRipple($event)">
            Click Me
            <span class="circle" v-show="state.show" :style="state.style"></span>
        </button>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue"

interface State {
    show: boolean
    style: {
        top: string | number
        left: string | number
    }
}

const state: State = reactive({
    show: false,
    style: {
        top: 0,
        left: 0,
    },
})

const handleRipple = (e: MouseEvent) => {
    const x = e.clientX
    const y = e.clientY

    const buttonTop = (e.target as HTMLElement).offsetTop
    const buttonLeft = (e.target as HTMLElement).offsetLeft

    const xInside = x - buttonLeft
    const yInside = y - buttonTop

    state.style.top = yInside + "px"
    state.style.left = xInside + "px"

    state.show = true

    setTimeout(() => (state.show = false), 500)
}
</script>

<style lang="less" scoped>
.content {
    background-color: #686de0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 20px;

    button {
        color: #fff;
        border: 1px purple solid;
        font-size: 14px;
        text-transform: uppercase;
        letter-spacing: 2px;
        padding: 20px 30px;
        overflow: hidden;
        margin: 10px 0;
        position: relative;
        border-radius: 6px;
        outline: none;
        background-color: purple;

        .circle {
            position: absolute;
            background-color: #fff;
            width: 60px;
            height: 60px;
            border-radius: 50%;
            transform: translate(-50%, -50%) scale(0);
            animation: scale 0.5s ease-out;
        }
    }

    @keyframes scale {
        to {
            transform: translate(-50%, -50%) scale(3);
            opacity: 0;
        }
    }
}
</style>
