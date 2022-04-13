<route lang="yaml">
meta:
    title: 绘图画板
</route>

<template>
    <div class="content">
        <canvas ref="canvas" width="800" height="700" @mousemove="Mousemove"></canvas>
        <div class="toolbox">
            <button @click="Reduce">-</button>
            <span>{{ state.size }}</span>
            <button @click="Add">+</button>
            <input type="color" v-model="state.color" />
            <button @click="Clear">❌</button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useEventListener } from "@vueuse/core"
import { ref, reactive, onMounted } from "vue"

interface State {
    isPressed: boolean
    size: number
    color: string
    x: number
    y: number
}

let ctx: CanvasRenderingContext2D
const canvas = ref<HTMLCanvasElement | null>(null)
const state: State = reactive({
    isPressed: false, // 是否按下

    size: 10,
    color: "black",

    x: 0,
    y: 0,
})

const Reduce = () => {
    state.size -= 5
    if (state.size <= 5) {
        state.size = 5
    }
}
const Add = () => {
    state.size += 5
    if (state.size >= 50) {
        state.size = 50
    }
}
const Clear = () => {
    ctx.clearRect(
        0,
        0,
        (canvas.value as HTMLCanvasElement).width,
        (canvas.value as HTMLCanvasElement).height
    )
}

const Mousedown = (e: MouseEvent) => {
    state.isPressed = true
    state.x = e.offsetX
    state.y = e.offsetY
}
const Mouseup = (e: MouseEvent) => {
    state.isPressed = false
    state.x = 0
    state.y = 0
}
const Mousemove = (e: MouseEvent) => {
    const drawCircle = (x: number, y: number) => {
        ctx.beginPath()
        ctx.arc(x, y, state.size, 0, Math.PI * 2)
        ctx.fillStyle = state.color
        ctx.fill()
    }

    const drawLine = (x1: number, y1: number, x2: number, y2: number) => {
        ctx.beginPath()
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
        ctx.strokeStyle = state.color
        ctx.lineWidth = state.size * 2
        ctx.stroke()
    }

    if (state.isPressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY

        drawCircle(x2, y2)
        drawLine(state.x, state.y, x2, y2)

        state.x = x2
        state.y = y2
    }
}

onMounted(() => {
    ctx = (canvas.value as HTMLCanvasElement).getContext("2d") as CanvasRenderingContext2D
    useEventListener("mousedown", Mousedown)
    useEventListener("mouseup", Mouseup)
})
</script>

<style lang="less" scoped>
.content {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    height: 100vh;
    transition: all 0.5s ease-in;

    canvas {
        border: 2px solid #00a4ff;
    }

    .toolbox {
        background-color: #00a4ff;
        display: flex;
        width: 804px;
        padding: 1rem;

        > * {
            background-color: #fff;
            border: none;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            height: 50px;
            width: 50px;
            margin: 0.25rem;
            padding: 0.25rem;
            cursor: pointer;
            border-radius: 10px;

            &:last-child {
                margin-left: auto;
            }
        }
    }
}
</style>
