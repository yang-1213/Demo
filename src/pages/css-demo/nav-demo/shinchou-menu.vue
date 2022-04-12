<route lang="yaml">
meta:
    title: 导航栏效果3
    desc: 将交错动画和伪类伪元素结合起来写出来的菜单
</route>

<template>
    <div flex justify="center" items="center" h-full bg="#fafafa">
        <ul>
            <li v-for="item in state.textList">
                <span
                    :class="{ highlight: index < 2 }"
                    :style="{ transitionDelay: `${index * 0.1}s` }"
                    v-for="(text, index) in item"
                >
                    {{ text }}
                </span>
            </li>
        </ul>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue"

const state = reactive({
    /** 使用方块字 让span变为正方形 */
    textList: ["ニュース", "ストーリー", "スターフ＆キャスト", "キャラクター", "放送·配信情報"],
})
</script>

<style lang="less" scoped>
@light-color: #00acf0;
ul {
    display: flex;
    flex-direction: column;
    list-style-type: none;
    font-weight: 600;
    font-size: 3rem;

    li {
        position: relative;
        display: flex;
        align-self: flex-start;
        line-height: 1; // ensure span is a square
        margin: 6px;
        padding: 6px 2px;
        overflow: hidden;
        cursor: pointer;
        background-color: black;

        &::before {
            position: absolute;
            content: "";
            top: 0;
            left: 0;
            z-index: -2;
            width: 100%;
            height: 100%;
            background: black;
        }

        &:hover {
            span {
                color: white !important;
                text-shadow: 0 0 10px @light-color;
            }
        }

        span {
            position: relative;
            color: @light-color;
            margin: 0 5px 0 4px;
            padding: 5px;
            transition: 0.3s;

            &.highlight {
                color: black;
                background-color: @light-color;
                &::before {
                    position: absolute;
                    content: "";
                    top: -3px;
                    left: -3px;
                    bottom: -3px;
                    right: -3px;
                    z-index: -1;
                    background: @light-color;
                }
            }
        }
    }
}

//媒体查询
@media screen and (max-width: 768px) {
    ul {
        font-size: 1.2rem;
    }
}
</style>
