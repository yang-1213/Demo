<route lang="yaml">
meta:
    title: Blurry Loading
</route>

<template>
    <div style="height: 100vh">
        <section class="bg" :style="{ filter: `blur(${blurValue}px)` }"></section>
        <div class="loading-text" :style="{ opacity: opacityValue }">{{ count }}%</div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"

const count = ref(0)
const opacityValue = ref(1)
const blurValue = ref(100)

// 属于一定数量范围的数字转换为不同范围内的数字
// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num: number, in_min: number, in_max: number, out_min: number, out_max: number) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

const blurring = () => {
    count.value++
    if (count.value > 99) {
        clearInterval(timeId)
    }
    // 这里最大值和最小值调换代表反方向转换数字
    opacityValue.value = scale(count.value, 0, 100, 1, 0)
    blurValue.value = scale(count.value, 0, 100, 30, 0)
}

let timeId = setInterval(blurring, 30)
</script>

<style lang="less" scoped>
.bg {
    background: url("//cdn.jsdelivr.net/gh/mbsky1213/images/web/2021/08/11/ucj3mn4f9ec.png")
        no-repeat center center/cover;
    position: fixed;
    top: -30px;
    left: -30px;
    width: calc(100vw + 60px);
    height: calc(100vh + 60px);
    z-index: -1;
    filter: blur(0px);
}

.loading-text {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%);
    font-size: 50px;
    color: #fff;
}
</style>
