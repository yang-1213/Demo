<route lang="yaml">
meta:
    title: 导航栏效果2
    desc: background-clip:text
</route>

<template>
    <div flex justify="center" items="center" h-full bg="#1A1E23">
        <ul>
            <li v-for="item in state.textList">{{ item }}</li>
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
            href: "https://fonts.googleapis.com/css?family=Raleway:400,400i,700",
        },
    ],
})

const state = reactive({
    textList: ["Home", "Archives", "Tags", "Categories", "About"],
})
</script>

<style lang="less" scoped>
ul {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    align-items: start;

    li {
        position: relative;
        display: block;
        padding: 6px 0;
        color: white;
        font: 700 3rem Raleway, sans-serif;
        text-decoration: none;
        text-transform: uppercase;
        cursor: pointer;

        background: linear-gradient(#198ce6 0 100%) no-repeat right / 0;
        -webkit-text-stroke: 2px #198ce6;
        color: transparent;
        background-clip: text;
        transition: background-size 0.3s linear;

        &:hover {
            background-position: left;
            background-size: 100%;
        }
    }
}
</style>
