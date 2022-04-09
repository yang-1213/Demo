<route lang="yaml">
meta:
    title: 文字动画效果-2
    desc: 用js分割文本-开始位置
</route>

<template>
    <div h-full flex justify="center" items="center" text-center :class="$style.contentBg">
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

const state = reactive({
    msg: "sword art online Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, animi. Quaerat dolorem sed et veniam nostrum,commodi tempora placeat facere aliquam magni quod non deserunt aliquid, enim architecto ratione culpa.",
})
</script>

<style lang="less" scoped module>
.contentBg {
    background-image: linear-gradient(rgba(16, 16, 16, 0.8), rgba(16, 16, 16, 0.8)), url(https://i.loli.net/2019/10/18/buDT4YS6zUMfHst.jpg);
    background-size: cover;
}
</style>

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
        transform: translateY(-20%);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
