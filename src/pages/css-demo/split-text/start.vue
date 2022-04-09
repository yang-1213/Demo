<route lang="yaml">
meta:
    title: 文字动画效果-2
    desc: 用js分割文本-开始位置交错
</route>

<template>
    <div h-full flex justify="center" items="center" text-center bg="gray-500">
        <div class="content">
            <span v-for="(text, i) in state.msg" :key="text" :style="{ animationDelay: `${i * 0.1}s` }">
                {{ text }}
            </span>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useHead } from "@vueuse/head"
import { reactive } from "vue"

useHead({
    link: [
        {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css?family=Raleway:400,400i,700",
        },
    ],
})

/** 获取一言 */
const getHitokoto = async () => {
    const res = await fetch("https://v1.hitokoto.cn/")
    const data = await res.json()
    return data.hitokoto
}

// 一言
const state = reactive({
    msg: "",
})

state.msg = await getHitokoto()
</script>

<style lang="less" scoped>
.content {
    user-select: none;
    font-size: 1.5em;
    padding: 20px;
    font-weight: 600;
    display: flex;
    flex-wrap: wrap;
    line-height: 1.8;
    color: white;
    font-family: Raleway, sans-serif;
    white-space: pre;
    // normal	默认。空白会被浏览器忽略。
    // pre	空白会被浏览器保留。其行为方式类似 HTML 中的 <pre> 标签。
    // nowrap	文本不会换行，文本会在在同一行上继续，直到遇到 <br> 标签为止。
    // pre-wrap	保留空白符序列，但是正常地进行换行。
    // pre-line	合并空白符序列，但是保留换行符。
    // inherit	规定应该从父元素继承 white-space 属性的值。
    span {
        animation: landIn 0.8s ease-out both;
    }
}

@keyframes landIn {
    from {
        opacity: 0;
        transform: translateY(-30%);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
