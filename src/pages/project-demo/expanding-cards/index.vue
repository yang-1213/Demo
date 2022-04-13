<route lang="yaml">
meta:
    title: Expanding Cards
</route>

<template>
    <div class="content">
        <div
            class="panel"
            v-for="(item, index) in imageList"
            :key="index"
            :class="{ active: current == index }"
            :style="{ backgroundImage: `url('${item}')` }"
            @click="handleCLick(index)"
        >
            <h3>Explore The World</h3>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue"

const current = ref(0)
const imageList = [
    "//cdn.jsdelivr.net/gh/mbsky1213/images/web/2021/08/24/4yig5z1bwpx.jpeg",
    "//cdn.jsdelivr.net/gh/mbsky1213/images/web/2021/08/24/e2ncpex1ths.jpeg",
    "//cdn.jsdelivr.net/gh/mbsky1213/images/web/2021/08/24/8ihjapsraol.jpeg",
    "//cdn.jsdelivr.net/gh/mbsky1213/images/web/2021/08/24/fxj3dmb9bu.jpeg",
    "//cdn.jsdelivr.net/gh/mbsky1213/images/web/2021/08/24/tyeaue6s6z.jpeg",
]

const handleCLick = (index: number) => {
    current.value = index
}
</script>

<style lang="less" scoped>
.content {
    display: flex;
    width: 90vw;
    height: 100vh;
    margin: 0 auto;
    overflow: hidden;
    align-items: center;
}

.panel {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 80vh;
    border-radius: 50px;
    color: #fff;
    cursor: pointer;
    flex: 1;
    margin: 10px;
    position: relative;
    transition: all 700ms ease-in;
    h3 {
        font-size: 24px;
        position: absolute;
        bottom: 20px;
        left: 20px;
        margin: 0;
        opacity: 0;
    }

    &.active {
        flex: 5;
        h3 {
            opacity: 1;
            transition: opacity 0.3s ease-in 0.4s;
        }
    }
}

@media (max-width: 480px) {
    .content {
        width: 100vw;
    }

    .panel:nth-of-type(4),
    .panel:nth-of-type(5) {
        display: none;
    }
}
</style>
