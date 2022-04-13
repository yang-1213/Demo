<route lang="yaml">
meta:
    title: Hidden Search
</route>

<template>
    <div class="wrap">
        <div class="search" :class="{ active: Switch }">
            <input type="text" class="input" placeholder="Search..." />
            <button class="btn" @click="Switch = !Switch">
                <i class="fas fa-search"></i>
            </button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"
const Switch = ref(false)
</script>

<style lang="less" scoped>
.wrap {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-image: linear-gradient(90deg, #7d5fff, #7158e2);
}

.search {
    display: flex;
    font-size: 20px;
    background-color: #fff;
    border-radius: 30px;
    overflow: hidden;

    &.active {
        .input {
            width: 300px;
            padding: 20px;
        }
    }

    .input {
        width: 0;
        outline: none;
        border: none;
        height: 60px;
        transition: width 0.5s ease, padding 0.5s ease-out;
        background-color: #fff;
    }
    .btn {
        width: 60px;
        outline: none;
        border: none;
        height: 60px;
        border-radius: 30px;
        background-color: #fff;
        font-size: 20px;
    }
}
</style>
