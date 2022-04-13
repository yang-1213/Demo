<route lang="yaml">
meta:
    title: Auto Text Effect
</route>

<template>
    <div class="content">
        <h1>{{ state.text }}</h1>

        <div>
            <label for="speed">速度:</label>
            <input type="number" name="speed" v-model="state.count" min="1" max="10" step="1" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, computed } from "vue";

const text = "We Love Programming!";
const state = reactive({
    count: 1,
    idx: 1,
    text: "Starting...",
});
const speed = computed(() => 300 / state.count);

const writeText = () => {
    state.text = text.slice(0, state.idx);
    state.idx++;
    if (state.idx > text.length) state.idx = 1;
    setTimeout(writeText, speed.value);
};

writeText();
</script>

<style lang="less" scoped>
.content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #e9967a;

    user-select: none;
    min-height: 100vh;

    div {
        position: absolute;
        bottom: 20px;
        background: rgba(0, 0, 0, 0.1);
        padding: 10px 20px;
        font-size: 18px;
    }

    input {
        width: 50px;
        padding: 5px;
        font-size: 18px;
        background-color: darksalmon;
        border: none;
        text-align: center;
        outline: none;
    }
}
</style>
