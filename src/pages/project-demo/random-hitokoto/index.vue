<route lang="yaml">
meta:
    title: 随机一言
</route>

<template>
    <div class="wrapper">
        <transition name="l-fade">
            <div class="content" v-if="state.message.hitokoto">
                <h3>随机一言</h3>
                <n-spin :show="state.loading" stroke="rgb(255, 0, 191)">
                    <div class="msg">{{ state.output }}</div>
                </n-spin>
                <button class="btn" @click="getHitokoto">再来一条</button>
            </div>
        </transition>
    </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive } from "vue"

const state = reactive<{ loading: boolean; message: any; output: string }>({
    loading: false,
    message: {},
    output: "",
})

const getHitokoto = async () => {
    if (state.output === (state.message.hitokoto ?? "")) {
        state.loading = true

        const res = await fetch("https://v1.hitokoto.cn/").then(res => res.json())
        state.message = res

        let content = res.hitokoto as string
        state.loading = false
        state.output = ""

        // 添加打字机效果
        for (let index = 0; index < content.length; index++) {
            setTimeout(() => {
                state.output += content[index]
            }, 100 * index)
        }
    }
}

onMounted(getHitokoto)
</script>

<style lang="less" scoped>
.wrapper {
    background-color: #686de0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    padding: 20px;
    background-image: url("//cdn.jsdelivr.net/gh/mbsky1213/images/web/2021/08/27/esy60faxtfm.jpeg");
    background-size: cover;
}

.content {
    position: relative;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
    padding: 50px 20px;
    text-align: center;
    max-width: 100%;
    width: 800px;

    hyphens: auto; //连字符
    background: hsla(0, 0%, 100%, 0.5);

    &::before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        filter: blur(40px);
        margin: -30px;
        background-image: url("//cdn.jsdelivr.net/gh/mbsky1213/images/web/2021/08/27/esy60faxtfm.jpeg");
        background-size: cover;
    }

    h3 {
        margin: 0;
        opacity: 0.5;
        letter-spacing: 2px;
    }

    .msg {
        font-size: 30px;
        letter-spacing: 1px;
        line-height: 40px;
        min-height: 80px;
        margin: 50px auto;
        max-width: 600px;
    }

    .btn {
        position: relative;
        background-color: #00a4ff;
        color: #fff;
        border: 0;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
        padding: 14px 40px;
        font-size: 16px;
        cursor: pointer;
        outline: 0;
        &:active {
            transform: scale(0.98);
        }
        &:hover {
            background-color: rgb(255, 0, 191);
        }
    }
}
</style>
