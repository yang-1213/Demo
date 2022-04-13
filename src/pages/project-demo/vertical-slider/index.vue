<route lang="yaml">
meta:
    title: 垂直轮播图
</route>

<template>
    <div class="content">
        <div class="left">
            <div
                class="left-content"
                v-for="(item, index) in state.list"
                :key="item.name"
                :style="{
                    marginTop: index == 0 ? leftTop : '0',
                    backgroundColor: item.backgroundColor,
                }"
            >
                <div>{{ item.name }}</div>
                <div>{{ item.desc }}</div>
            </div>
        </div>
        <div class="right">
            <img
                class="img"
                :src="item.url"
                v-for="(item, index) in imgList"
                :key="item.name"
                :style="{
                    marginTop: index == 0 ? rightTop : '0',
                    backgroundColor: item.backgroundColor,
                }"
            />
        </div>

        <div class="action-buttons">
            <button class="down-button" @click="handleDown">
                <i class="fas fa-arrow-down"></i>
            </button>
            <button class="up-button" @click="handleUp">
                <i class="fas fa-arrow-up"></i>
            </button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, computed } from "vue"
const state = reactive({
    current: 0,
    list: [
        {
            name: "小狗",
            desc: "可爱的小狗",
            backgroundColor: "#a7977e",
            url: "//cdn.jsdelivr.net/gh/mbsky1213/images/web/2021/08/24/37l29brrshy.jpeg",
        },
        {
            name: "雪山",
            desc: "不知道哪里的雪山",
            backgroundColor: "#84b5df",
            url: "//cdn.jsdelivr.net/gh/mbsky1213/images/web/2021/08/24/4yig5z1bwpx.jpeg",
        },
        {
            name: "山脚下",
            desc: "乡村风光",
            backgroundColor: "#65653f",
            url: "//cdn.jsdelivr.net/gh/mbsky1213/images/web/2021/08/24/8ihjapsraol.jpeg",
        },
        {
            name: "漩涡鸣人",
            desc: "火影忍者主角",
            backgroundColor: "#212121",
            url: "//cdn.jsdelivr.net/gh/mbsky1213/images/web/2021/08/24/8rm0mmufdg.jpeg",
        },
    ],
})

const leftTop = computed(() => {
    return `-${100 * state.current}vh`
})
const rightTop = computed(() => {
    return `calc(-${(state.list.length - 1) * 100}vh + ${100 * state.current}vh)`
})

const imgList = computed(() => {
    return [...state.list].reverse()
})

const handleDown = () => {
    state.current++
    if (state.current >= state.list.length) {
        state.current = 0
    }
}
const handleUp = () => {
    state.current--
    if (state.current < 0) {
        state.current = state.list.length - 1
    }
}
</script>

<style lang="less" scoped>
.content {
    position: relative;
    min-height: 100vh;
    display: flex;
    user-select: none;

    .left {
        width: 40%;
        height: 100vh;
        overflow: hidden;
        background-color: #00a4ff;

        .left-content {
            height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            color: #fff;
            font-size: 30px;
            transition: 0.5s linear;

            div:nth-of-type(2) {
                font-size: 20px;
            }
        }
    }

    .right {
        width: 60%;
        height: 100vh;
        overflow: hidden;
        background-color: red;
        .img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
            pointer-events: none;
            transition: all 0.5s linear;
        }
    }

    .action-buttons {
        button {
            background-color: #fff;
            border: none;
            color: #aaa;
            cursor: pointer;
            font-size: 16px;
            padding: 15px;
            outline: none;
            &:hover {
                color: #222;
            }

            position: absolute;
            left: 40%;
            top: 50%;
            z-index: 100;
        }

        .down-button {
            transform: translateX(-100%);
            border-top-left-radius: 5px;
            border-bottom-left-radius: 5px;
        }
        .up-button {
            transform: translateY(-100%);
            border-top-right-radius: 5px;
            border-bottom-right-radius: 5px;
        }
    }
}
</style>
