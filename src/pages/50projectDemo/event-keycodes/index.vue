<route lang="yaml">
meta:
    title: Event Keycodes
</route>

<template>
    <div class="content">
        <template v-if="state.keyCode">
            <div class="key">
                <small>event.key</small>
                {{ state.keyCode.key }}
            </div>
            <div class="key">
                <small>event.keyCode</small>
                {{ state.keyCode.keyCode }}
            </div>
            <div class="key">
                <small>event.code</small>
                {{ state.keyCode.code }}
            </div>
        </template>
        <div class="key" v-else>请按下任意键获取keyCode</div>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue"
import { useEventListener } from "@vueuse/core"

interface State {
    keyCode: {
        key: string
        keyCode: number
        code: string
    } | null
}

const state = reactive<State>({
    keyCode: null,
})

useEventListener("keyup", event => {
    state.keyCode = {
        key: event.key == " " ? "Space(' ')" : event.key,
        keyCode: event.keyCode,
        code: event.code,
    }
})
</script>

<style lang="less" scoped>
.content {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 100vh;
    background-image: url("//cdn.jsdelivr.net/gh/mbsky1213/images/web/2021/08/27/2nacmnk0srn.jpeg");
    background-size: cover;
}

.key {
    border: 1px solid #999;
    background-color: #eee;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
    display: inline-flex;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    padding: 20px;
    flex-direction: column;
    margin: 10px;
    min-width: 120px;
    position: relative;
    border-radius: 6px;

    small {
        position: absolute;
        top: -24px;
        left: 0;
        text-align: center;
        width: 100%;
        color: #555;
        font-size: 14px;
    }
}

@media (max-width: 768px) {
    .key {
        margin: 10px 0px;
    }
}
</style>
