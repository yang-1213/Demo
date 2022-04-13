<route lang="yaml">
meta:
    title: Scroll Animation
</route>

<template>
    <div class="wrap">
        <h1>滚动页面查看动画效果</h1>
        <div class="box" v-for="num in listNum" :key="num">
            <h2>{{ num }}</h2>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useEventListener } from "@vueuse/core"
import { onMounted } from "vue"

const listNum = 20
const handleScroll: any = (e: Event) => {
    const boxEls = document.querySelectorAll(".wrap .box")
    const triggerBottom = window.innerHeight * (4 / 5)
    for (let i = 0; i < listNum; i++) {
        let el = boxEls[i]
        let boxTop = el.getBoundingClientRect().top

        if (boxTop < triggerBottom) {
            el.classList.add("show")
        } else {
            el.classList.remove("show")
        }
    }
}
// 默认监听window
useEventListener("scroll", handleScroll)

onMounted(handleScroll)
</script>

<style lang="less" scoped>
.wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #00a4ff;
    overflow-x: hidden;
    padding-bottom: 20px;
}

h1 {
    margin: 10px;
}

.box {
    background-color: steelblue;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 200px;
    margin: 10px;
    border-radius: 10px;
    box-shadow: 2px 4px 5px rgba(0, 0, 0, 0.3);
    transform: translateX(400%) rotateX(0);
    transition: transform 0.4s ease;
    transform-style: preserve-3d;
    transform-origin: center;
    &:nth-of-type(even) {
        transform: translateX(-400%) rotateX(0);
        &.show {
            transform: translateX(0) rotateX(-20deg) rotateY(20deg);
        }
    }
    &.show {
        transform: translateX(0) rotateX(20deg) rotateY(20deg);
    }
    h2 {
        font-size: 45px;
    }
}
</style>
