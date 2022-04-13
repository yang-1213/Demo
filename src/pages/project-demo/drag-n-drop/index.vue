<route lang="yaml">
meta:
    title: 拖放
</route>

<template>
    <div class="content">
        <div
            class="empty"
            :class="{ hovered: item.active }"
            v-for="(item, num) in state.hoveredList"
            :key="num"
            @dragover.prevent="() => {}"
            @dragenter.prevent="item.active = true"
            @dragleave="item.active = false"
            @drop="dragDrop(item, num)"
        >
            <div
                draggable="true"
                @dragstart="dragStart"
                @dragend="dragEnd"
                :class="{ hold: state.dragstart, fill: state.dragEnd }"
                v-if="num == 0"
            ></div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue"

interface State {
    current: number
    hoveredList: {
        active: boolean
    }[]
    dragstart: boolean
    dragEnd: boolean
}

const state: State = reactive({
    current: 0,
    dragstart: false,
    dragEnd: true,

    hoveredList: [
        { active: false },
        { active: false },
        { active: false },
        { active: false },
        { active: false },
    ],
})

function dragStart() {
    state.dragstart = true
}

function dragEnd() {
    state.dragEnd = true
    state.dragstart = false
}

function dragDrop(item: any, num: number) {
    let emptyEl = document.querySelectorAll(".empty")[num]
    let emptyItem = document.querySelector(".empty div")

    state.current = num
    item.active = false
    emptyEl.appendChild(emptyItem as HTMLElement)
}
</script>

<style lang="less" scoped>
.content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background-image: linear-gradient(to bottom, #00a4ff, pink);

    height: 100vh;
    transition: all 0.5s ease-in;

    .empty {
        height: 150px;
        width: 150px;
        margin: 10px;
        border: solid 3px black;
        background: white;

        &.hovered {
            background-color: #333;
            border-color: white;
            border-style: dashed;
        }

        .fill {
            background-image: url("//cdn.jsdelivr.net/gh/mbsky1213/images/web/2021/09/09/xg60wn59xy.jpeg");
            height: 145px;
            width: 145px;
            cursor: pointer;
            &.hold {
                border: solid 5px #ccc;
            }
        }
    }
}

@media (max-width: 800px) {
    .content {
        flex-direction: column;
    }
}
</style>
