<route lang="yaml">
meta:
    title: 下雪了
    desc: 随机粒子动画
</route>

<template>
    <div class="h-full content">
        <div class="snow" v-for="(item, index) in snowList" :key="index" :style="item.style"></div>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, onBeforeUnmount, reactive, ref } from "vue"

interface SnowList {
    style: {
        opacity: string
        transform: string
        animation: string
    }
}

const snowList: Array<SnowList> = reactive([]) // 雪花列表
const snowStyleId = ref("") // 雪花样式id

/** 随机范围 */
const random_range = ($min: number, $max: number) => {
    let random = Math.random()
    let random_range = $min + Math.floor(random * ($max - $min + 1)) // 随机偏移
    return random_range
}

const main = () => {
    let keyFrameStr: string = "" // style 样式模板
    /** 创建 style 标签 */
    function createStyle(styleStr: string) {
        let id = `snow-${Date.now()}`
        snowStyleId.value = id
        // 添加style到head
        let styleEl = document.createElement("style")
        styleEl.id = id
        styleEl.textContent = styleStr
        document.head.appendChild(styleEl)
    }

    // 1.首先循环300个雪花
    for (let index = 0; index < 300; index++) {
        let i = index + 1
        // 单位  vw
        let randomX = Math.random() * 1000000 * 0.0001 //vw;
        let randomOffset = random_range(-100000, 100000) * 0.0001 //vw;

        let randomXEnd = randomX + randomOffset

        let randomXEndYoyo = randomX + randomOffset / 2
        let randomYoyoTime = random_range(30000, 80000) / 100000

        let randomYoyoY = randomYoyoTime * 100 // vh;
        let randomScale = Math.random() * 10000 * 0.0001
        let fallDuration = random_range(10, 30) * 1 //s ;
        let fallDelay = Math.random() * 30 * -1 // s

        // 2. 将随机生成的元素style样式加入到数据中
        snowList.push({
            style: {
                opacity: `${Math.random() * 10000 * 0.0001}`,
                transform: `translate(${randomX}vw, -10px) scale(${randomScale})`,
                animation: `fall-${i} ${fallDuration}s ${fallDelay}s linear infinite`,
            },
        })

        // 3. 每一个雪花的关键帧动画
        keyFrameStr += `
            @keyframes fall-${i} {
                ${randomYoyoTime * 100}% {
                    transform: translate(${randomXEnd}vw, ${randomYoyoY}vh) scale(${randomScale});
                }

                to {
                    transform: translate(${randomXEndYoyo}vw, 100vh) scale(${randomScale});
                }
            }
        `
    }

    createStyle(keyFrameStr)
}

onMounted(main)
onBeforeUnmount(() => {
    /** 移除雪花css样式 */
    let styleEl = document.getElementById(snowStyleId.value)
    document.head.removeChild(styleEl as HTMLElement)
})
</script>

<style lang="less" scoped>
.content {
    position: relative;
    filter: drop-shadow(0 0 10px white);
    background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
    overflow: hidden;

    .snow {
        position: absolute;
        width: 10px;
        height: 10px;
        background: white;
        border-radius: 50%;
        filter: blur(2px); // 雪花模糊效果
        &:nth-child(2n + 1) {
            filter: blur(3px); // 雪花模糊效果
        }

        // 作为函数的混合  less一般未启用这个功能
        // @rand: `Math.random() `;
    }
}
</style>
