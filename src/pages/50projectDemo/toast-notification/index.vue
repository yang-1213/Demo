<route lang="yaml">
meta:
    title: 弹窗通知
</route>

<template>
    <div class="content">
        <div id="toasts">
            <div
                class="toast"
                v-for="(item, key) in state.list"
                :key="key"
                :class="{ [item.class]: true }"
            >
                {{ item.message }}
            </div>
        </div>
        <button class="btn" @click="showToast">显示通知</button>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue"
const state = reactive<{ types: string[]; messages: string[]; list: any }>({
    types: ["info", "success", "error"],
    messages: ["Message One", "Message Two", "Message Three", "Message Four"],
    list: [],
})

const showToast = () => {
    state.list.push({
        class: state.types[~~(Math.random() * state.types.length)],
        message: state.messages[~~(Math.random() * state.messages.length)],
    })
    setTimeout(() => {
        state.list.shift()
    }, 3000)
}
</script>

<style lang="less" scoped>
.content {
    position: relative;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
    background: #00a4ff;

    .btn {
        background-color: #ffffff;
        color: rebeccapurple;
        font-family: inherit;
        font-weight: bold;
        padding: 1rem;
        border-radius: 5px;
        cursor: pointer;
        border: none;
        outline: none;
        &:active {
            transform: scale(0.98);
        }
    }

    #toasts {
        position: fixed;
        bottom: 10px;
        right: 10px;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }

    .toast {
        background-color: #fff;
        border-radius: 5px;
        padding: 1rem 2rem;
        margin: 0.5rem;
        &.info {
            color: rebeccapurple;
        }
        &.success {
            color: green;
        }
        &.error {
            color: red;
        }
    }
}
</style>
