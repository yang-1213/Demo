<route lang="yaml">
meta:
    title: 常见问题解答
</route>

<template>
    <div class="wrapper">
        <div class="content">
            <h1>常见问题解答</h1>
            <div class="faq" :class="{ active: item.active }" v-for="(item, index) of state.list" :key="index">
                <h3 class="faq-title">{{ item.title }}</h3>

                <p class="faq-text" v-if="item.active">{{ item.answer }}</p>

                <button class="faq-toggle">
                    <i class="fas fa-times" v-if="item.active" @click="item.active = false"></i>
                    <i class="fas fa-chevron-down" v-else @click="item.active = true"></i>
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
const state = reactive({
    list: [
        { title: "谁把九尾封印在鸣人体内的?", answer: "四代火影", active: false },
        { title: "凯是用哪一招击败了鬼蛟30%实力的分身?", answer: "朝孔雀", active: false },
        { title: "再不斩的武器叫什么?", answer: "斩首大刀", active: false },
        { title: "鸣人学会的第一个禁术是什么?", answer: "多重影分身", active: false },
        { title: "写轮眼不能复制什么术?", answer: "秘术或血继才能使用的术", active: false },
    ],
});
</script>

<style lang="less" scoped>
.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-image: url("//cdn.jsdelivr.net/gh/mbsky1213/images/web/2021/08/27/6lhr107m48o.jpeg");
    background-size: cover;
}

.content {
    width: 800px;
    background-color: aliceblue;
    padding: 40px;
    border-radius: 10px;
    min-height: 80vh;
    opacity: 0.9;
    h1 {
        text-align: center;
    }

    .faq {
        position: relative;
        width: 80%;
        margin: 20px auto 0;
        border: 1px solid #ccc;
        border-radius: 10px;
        padding: 20px;
        transition: box-shadow 0.3s ease;

        &.active {
            background-color: #fff;
            box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.1);
        }

        .faq-title {
            width: calc(100% - 40px);
        }

        .faq-toggle {
            position: absolute;
            right: 20px;
            top: 20px;
            outline: none;
            border: 0;
            border-radius: 50%;
            background-color: transparent;
            font-size: 24px;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            &:hover {
                background-color: #ccc;
            }
        }
    }
}
</style>
