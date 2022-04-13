<route lang="yaml">
meta:
    title: Theme Clock
</route>

<template>
    <div class="content" :class="{ dark: isDark }">
        <button class="toggle" @click="isDark = !isDark">
            {{ isDark ? "Dark mode" : "Light mode" }}
        </button>

        <div class="clock-container">
            <div class="clock">
                <div class="needle hour" :style="{ transform: state.hour }"></div>
                <div class="needle minute" :style="{ transform: state.minute }"></div>
                <div class="needle second" :style="{ transform: state.second }"></div>
                <div class="center-point"></div>
            </div>

            <div class="time" v-html="state.time"></div>
            <div class="date" v-html="state.date"></div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue"

const isDark = ref(false)
const state = reactive({
    hour: "",
    minute: "",
    second: "",

    time: "",
    date: "",
})
const days = ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
const months = [
    "一月",
    "二月",
    "三月",
    "四月",
    "五月",
    "六月",
    "七月",
    "八月",
    "九月",
    "十月",
    "十一月",
    "十二月",
]

const setTime = () => {
    const time = new Date()
    const month = time.getMonth()
    const day = time.getDay()
    const date = time.getDate()
    const hours = time.getHours()
    const hoursForClock = hours >= 13 ? hours % 12 : hours
    const minutes = time.getMinutes()
    const seconds = time.getSeconds()
    const ampm = hours >= 12 ? "PM" : "AM"

    state.hour = `translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 12, 0, 360)}deg)`
    state.minute = `translate(-50%, -100%) rotate(${scale(minutes, 0, 60, 0, 360)}deg)`
    state.second = `translate(-50%, -100%) rotate(${scale(seconds, 0, 60, 0, 360)}deg)`

    state.time = `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`
    state.date = `${days[day]} ${months[month]} <span class="circle">${date}号</span>`
}

// StackOverflow https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num: number, in_min: number, in_max: number, out_min: number, out_max: number) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

setTime()
setInterval(setTime, 1000)
</script>

<style lang="less" scoped>
.content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    height: 100vh;
    transition: all 0.5s ease-in;

    --primary-color: #000;
    --secondary-color: #fff;

    &.dark {
        --primary-color: #fff;
        --secondary-color: #333;
        color: var(--primary-color);
        background-color: #111;
    }

    .toggle {
        cursor: pointer;
        background-color: var(--primary-color);
        color: var(--secondary-color);
        border: 0;
        border-radius: 4px;
        padding: 8px 12px;
        position: absolute;
        top: 100px;
        outline: none;
    }

    .clock-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        .clock {
            position: relative;
            width: 200px;
            height: 200px;
        }

        .needle {
            background-color: var(--primary-color);
            position: absolute;
            top: 50%;
            left: 50%;
            height: 65px;
            width: 3px;
            transform-origin: bottom center;
            transition: all 0.5s ease-in;
            &.hour {
                transform: translate(-50%, -100%) rotate(0deg);
                background-color: #0077ff;
            }

            &.minute {
                transform: translate(-50%, -100%) rotate(0deg);
                height: 80px;
                background-color: #f700ff;
            }

            &.second {
                transform: translate(-50%, -100%) rotate(0deg);
                height: 100px;
                background-color: #e74c3c;
            }
        }

        .center-point {
            background-color: #e74c3c;
            width: 10px;
            height: 10px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            border-radius: 50%;
            &::after {
                content: "";
                background-color: var(--primary-color);
                width: 5px;
                height: 5px;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                border-radius: 50%;
            }
        }

        .time {
            font-size: 60px;
        }

        .date {
            color: #aaa;
            font-size: 14px;
            letter-spacing: 0.3px;
            text-transform: uppercase;
            .circle {
                background-color: var(--primary-color);
                color: var(--secondary-color);
                border-radius: 50%;
                height: 18px;
                width: 18px;
                display: inline-flex;
                align-items: center;
                justify-content: center;
                line-height: 18px;
                transition: all 0.5s ease-in;
                font-size: 12px;
            }
        }
    }
}
</style>
