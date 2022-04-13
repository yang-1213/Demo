<route lang="yaml">
meta:
    title: 倒计时
</route>

<template>
    <div class="content">
        <transition name="l-fade" mode="out-in">
            <div class="start" v-if="state.ready">
                <div>GO</div>
                <div class="btn" @click="state.ready = !state.ready">READY</div>
            </div>
            <div class="ready" v-else>
                <div class="num-wrapper">
                    <div class="num" :class="{ active: item.active }" v-for="item in state.list" :key="item.value" @animationend="animationend">
                        {{ item.value }}
                    </div>
                </div>
                <div style="margin-top: 10px">GET READY</div>
            </div>
        </transition>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
const state = reactive({
    ready: true,
    list: [
        { value: 3, active: true },
        { value: 2, active: false },
        { value: 1, active: false },
        { value: 0, active: false },
    ],
});

const animationend = () => {
    let index = state.list.findIndex(v => v.active);
    state.list[index]["active"] = false;
    if (index >= state.list.length - 1) {
        state.ready = true;
        state.list[0]["active"] = true;
        return;
    }
    state.list[index + 1]["active"] = true;
};
</script>

<style lang="less" scoped>
.content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: linear-gradient(to bottom right, rgba(255, 0, 106, 0.555), pink);
    .start {
        text-align: center;
        .btn {
            padding: 2px 10px;
            border: 1px solid #00a4ff;
            border-radius: 6px;
            cursor: pointer;
            margin-top: 10px;
            user-select: none;
            &:hover {
                background-color: #00a4ff;
                color: #fff;
            }
        }
    }
    .ready {
        text-align: center;
        .num-wrapper {
            position: relative;
            height: 40px;
            overflow: hidden;
            font-size: 30px;
            .num {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%) rotate(120deg);
                transform-origin: bottom center;
                &.active {
                    transform: translate(-50%, -50%) rotate(0deg);
                    animation: goIn 1s ease-in-out alternate both;
                }
            }
        }
    }
}

.l-fade-enter-active {
    transition: all 0.3s ease-out;
}

.l-fade-leave-active {
    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.l-fade-enter-from,
.l-fade-leave-to {
    opacity: 0;
    transform: scale(0.98);
}

@keyframes goIn {
    0% {
        transform: translate(-50%, -50%) rotate(120deg);
    }

    15% {
        transform: translate(-50%, -50%) rotate(-20deg);
    }

    30% {
        transform: translate(-50%, -50%) rotate(10deg);
    }

    50% {
        transform: translate(-50%, -50%) rotate(0deg);
    }
    80% {
        transform: translate(-50%, -50%) rotate(20deg);
    }
    100% {
        transform: translate(-50%, -50%) rotate(-120deg);
    }
}
</style>
