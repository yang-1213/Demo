<route lang="yaml">
meta:
    title: 今天你喝了多少水?
</route>

<template>
    <div class="content">
        <h1>Drink Water</h1>
        <h3>目标: 2 L</h3>

        <div class="cup">
            <div class="remained" :style="{ height: remained == 0 ? 0 : 'auto' }">
                <span>{{ remained }}L</span>
                <small>剩余</small>
            </div>

            <div class="percentage" :style="{ height: `${percentage}%` }">{{ percentage }}%</div>
        </div>

        <p class="text">选择您喝了多少杯水</p>

        <div class="cups">
            <div
                class="cup cup-small"
                :class="{ full: num <= state.current }"
                v-for="num in 8"
                :key="num"
                @click="highlightCups(num)"
            >
                250 ml
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, computed } from "vue"
const state = reactive({
    current: 0,
    target: 2, //2L
})

const remained = computed(() => state.target - state.current * 0.25)
const percentage = computed(() => ((state.target - remained.value) / state.target) * 100)

const highlightCups = (index: number) => {
    if (state.current == index) {
        state.current = index - 1
    } else {
        state.current = index
    }
}
</script>

<style lang="less" scoped>
@border-color: #144fc6;
@fill-color: #6ab3f8;
.content {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #3494e4;
    min-height: 100vh;
    color: #fff;

    h1 {
        margin: 10px 0 0;
    }

    h3 {
        font-weight: 400;
        margin: 10px 0;
    }

    .cup {
        background-color: #fff;
        border: 4px solid @border-color;
        color: @border-color;
        border-radius: 0 0 40px 40px;
        height: 330px;
        width: 150px;
        margin: 30px 0;
        display: flex;
        flex-direction: column;
        overflow: hidden;
        user-select: none;
    }

    .cup.cup-small {
        height: 95px;
        width: 50px;
        border-radius: 0 0 15px 15px;
        background-color: rgba(255, 255, 255, 0.9);
        cursor: pointer;
        font-size: 14px;
        align-items: center;
        justify-content: center;
        text-align: center;
        margin: 5px;
        transition: 0.3s ease;
    }

    .cup.cup-small.full {
        background-color: @fill-color;
        color: #fff;
    }

    .cups {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        width: 280px;
    }

    .remained {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        flex: 1;
        transition: 0.3s ease;
        overflow: hidden;
    }

    .remained span {
        font-size: 20px;
        font-weight: bold;
    }

    .remained small {
        font-size: 12px;
    }

    .percentage {
        background-color: @fill-color;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 30px;
        height: 0;
        transition: 0.3s ease;
        overflow: hidden;
    }

    .text {
        text-align: center;
        margin: 0 0 5px;
    }
}
</style>
