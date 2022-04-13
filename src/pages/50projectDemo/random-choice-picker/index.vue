<route lang="yaml">
meta:
    title: 随机选择器
</route>

<template>
    <div class="container">
        <div class="content">
            <h1>输入以逗号 (',') 分隔的所有选项。完成后按回车键</h1>
            <textarea v-model.trim="state.value" placeholder="在这里输入选项" @keyup.enter="handleEnter" @input="handleInput"></textarea>
            <div class="result">
                <div v-for="(item, i) of list" :class="{ active: i == state.current }" :key="i">{{ item }}</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, computed } from "vue";
const state = reactive({
    current: -1,
    loading: false,

    value: "",
    copyValue: "",
});

const list = computed(() => {
    if (state.copyValue) {
        return state.copyValue.split(",").filter(v => !!v);
    } else {
        if (state.value == "") return [];
        return state.value.split(",").filter(v => !!v)
    }
});

const handleInput = () => {
    if (state.loading) return;
    state.copyValue = "";
    state.current = -1;
};

const handleEnter = () => {
    if (state.loading) return;

    state.copyValue = state.value;
    state.value = "";

    state.loading = true;

    let num = 0;
    let timeId = setInterval(() => {
        num++;
        state.current = ~~(Math.random() * list.value.length);
        
        if (num > 30) {
            clearInterval(timeId);
            state.loading = false;
        }
    }, 100);
};
</script>

<style lang="less" scoped>
.container {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-image: url("//cdn.jsdelivr.net/gh/mbsky1213/images/web/2021/08/27/4oadg7n399r.jpeg");
    background-size: cover;
    background-attachment: fixed;
    padding: 100px 0;
}

.content {
    width: 800px;
    background-color: aliceblue;
    padding: 40px;
    border-radius: 10px;
    min-height: 50vh;
    opacity: 0.9;
    h1 {
        text-align: center;
    }

    textarea {
        width: 100%;
        height: 200px;
        resize: none;
        outline: none;
        padding: 20px;
        border: 1px dashed #00a4ff;
        border-radius: 6px;
        color: #333;
        font-size: 20px;
    }

    .result {
        display: flex;
        flex-wrap: wrap;
        > div {
            font-size: 20px;
            color: #fff;
            margin: 5px 5px 0 0;
            padding: 6px 10px;
            border-radius: 20px;
            background-color: #00a4ff;
            &.active {
                background-color: red;
            }
        }
    }
}
</style>
