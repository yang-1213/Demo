<route lang="yaml">
meta:
    title: Progress Steps
</route>

<template>
    <div class="container">
        <div class="progress-container">
            <div class="progress" :style="{ width: progressWidth }"></div>
            <div
                class="circle"
                :class="{ active: state.currentActive >= index }"
                v-for="(item, index) in state.circles"
                :key="index"
            >
                {{ index + 1 }}
            </div>
        </div>
        <div>
            <button class="btn" :disabled="state.currentActive <= 0" @click="handlePrev">
                上一步
            </button>
            <button
                class="btn"
                :disabled="state.currentActive >= state.circles.length - 1"
                @click="handleNext"
            >
                下一步
            </button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, computed } from "vue"
const state = reactive({
    currentActive: 0,
    circles: [
        /** name=> 步骤值 active=>激活 */
        { name: "第一步" },
        { name: "第二步" },
        { name: "第三步" },
        { name: "第四步" },
    ],
})

const progressWidth = computed(() => {
    return (state.currentActive / (state.circles.length - 1)) * 100 + "%"
})

const handlePrev = () => {
    state.currentActive--
    if (state.currentActive < 0) {
        state.currentActive = 0
    }
}

const handleNext = () => {
    state.currentActive++
    if (state.currentActive > state.circles.length - 1) {
        state.currentActive = state.circles.length
    }
}
</script>

<style lang="less" scoped>
@line-border-fill: #00a4ff;
@line-border-empty: #e0e0e0;

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100vh;
    .progress-container {
        position: relative;
        display: flex;
        justify-content: space-between;
        width: 350px;
        margin-bottom: 30px;
        &::before {
            content: "";
            background-color: @line-border-empty;
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
            height: 4px;
            width: 100%;
            z-index: -1;
        }

        .progress {
            background-color: @line-border-fill;
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
            height: 4px;
            width: 0%;
            z-index: -1;
            transition: 0.4s ease;
        }
        .circle {
            background-color: #fff;
            color: #999;
            border-radius: 50%;
            height: 30px;
            width: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 3px solid @line-border-empty;
            transition: 0.4s ease;
            &.active {
                border-color: @line-border-fill;
            }
        }
    }

    .btn {
        background-color: @line-border-fill;
        color: #fff;
        border: 0;
        border-radius: 6px;
        cursor: pointer;
        padding: 8px 30px;
        margin: 5px;
        font-size: 14px;
        &:active {
            transform: scale(0.98);
        }
        &:focus {
            outline: 0;
        }
        &:disabled {
            background-color: @line-border-empty;
            cursor: not-allowed;
        }
    }
}
</style>
