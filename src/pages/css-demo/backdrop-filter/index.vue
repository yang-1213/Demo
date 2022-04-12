<route lang="yaml">
meta:
    title: 毛玻璃效果
    desc: backdrop-filter
</route>

<template>
    <div class="content">
        <div class="box">
            {{ state.output }}
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, watch } from "vue"
const state = reactive({ text: "", output: "" })

watch(
    () => state.text,
    value => {
        let content = value.split("")
        for (let index = 0; index < content.length; index++) {
            setTimeout(() => {
                state.output += content[index]
            }, 100 * index)
        }
    }
)

const data = await fetch("https://v1.hitokoto.cn/").then(res => res.json())
state.text = data.hitokoto
</script>

<style lang="less" scoped>
.content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    background-color: #eceffc;
    height: 100%;
    background-image: url(https://cdn.jsdelivr.net/gh/mbsky1213/images/web/2021/08/27/esy60faxtfm.jpeg);
    background-size: cover;
    padding: 0 20px;
    .box {
        position: relative;
        border-radius: 10px;
        box-shadow: 0 10px 20px #0000001a, 0 6px 6px #0000001a;
        padding: 50px 100px;
        text-align: center;
        max-width: 100%;
        width: 1000px;
        color: #fff;
        hyphens: auto;
        backdrop-filter: blur(10px);

        font-size: 30px;
        letter-spacing: 1px;
    }
}

@media (max-width: 768px) {
    .content .box {
        padding: 50px 14px;
    }
}
</style>
