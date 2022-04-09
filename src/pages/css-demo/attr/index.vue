<route lang="yaml">
meta:
    title: 导航栏效果
    desc: attr()生成文本内容
</route>

<template>
    <div flex justify="center" items="center" h-full bg="black">
        <ul class="float-text-menu">
            <li v-for="item in state.textList" :key="item">
                <span v-for="(text, i) in item" :key="text" :data-text="text" :style="{ transitionDelay: `${i / 20}s` }">
                    {{ text }}
                </span>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import { useHead } from "@vueuse/head"
import { reactive } from "vue"

useHead({
    link: [
        {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css?family=Lato",
        },
    ],
})

const state = reactive({
    textList: ["Home", "Archives", "Tags", "Categories", "About"],
})
</script>

<style lang="less" scoped>
.float-text-menu {
    display: flex;
    flex-direction: column;
    list-style-type: none;

    li {
        display: flex;
        padding: 6px;
        color: white;
        font-family: Lato, sans-serif;
        text-decoration: none;
        overflow: hidden;

        span {
            position: relative;
            transition: 0.3s;

            &::before {
                position: absolute;
                color: #00a4ff;
                content: attr(data-text);
                transform: translateY(130%);
            }
        }

        &:hover {
            span {
                transform: translateY(-130%);
            }
        }
    }
}
</style>
