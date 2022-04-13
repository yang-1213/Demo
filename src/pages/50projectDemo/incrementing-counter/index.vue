<route lang="yaml">
meta:
    title: 递增的计数器
</route>

<template>
    <div class="wrapper">
        <div class="counter-container">
            <i class="fab fa-twitter fa-3x"></i>
            <div class="counter">{{ numList[0].num }}</div>
            <span>Twitter Followers</span>
        </div>

        <div class="counter-container">
            <i class="fab fa-youtube fa-3x"></i>
            <div class="counter">{{ numList[1].num }}</div>
            <span>YouTube Subscribers</span>
        </div>

        <div class="counter-container">
            <i class="fab fa-facebook fa-3x"></i>
            <div class="counter">{{ numList[2].num }}</div>
            <span>Facebook Fans</span>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, onMounted, toRefs } from "vue";
const state = reactive({
    numList: [
        { target: 1200, num: 100 },
        { target: 5000, num: 0 },
        { target: 7500, num: 500 },
    ],
});


onMounted(() => {
    state.numList.forEach(item => {
        let updateCounter = () => {
            const increment = item.target / 200;
            if (item.num < item.target) {
                item.num = ~~(item.num + increment);
                setTimeout(updateCounter, 5);
            } else {
                item.num = item.target;
            }
        };
        updateCounter();
    });
});

const { numList } = toRefs(state);
</script>

<style lang="less" scoped>
.wrapper {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #b300ff;
    color: #fff;

    height: 100vh;
    .counter-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        margin: 30px 50px;
    }

    .counter {
        font-size: 60px;
        margin-top: 10px;
    }
}
@media (max-width: 580px) {
    .wrapper {
        flex-direction: column;
    }
}
</style>
