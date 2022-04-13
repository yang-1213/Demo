<template>
    <div class="wrapper" :style="{ backgroundImage: `url(${imageBg})` }">
        <div class="content">
            <div
                class="item"
                v-for="route in routerList"
                :style="{
                    background: `linear-gradient(to right, ${randomColor()}, ${randomColor()})`,
                }"
                @click="handlePush(route.path)"
            >
                {{ route.meta.title }}
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
import useApp from "@hooks/common/useApp"
import { onMounted, ref } from "vue"
import { randomColor } from "@utils/index"

const { router } = useApp()
const routes = router.getRoutes()
const routerList = routes.filter(route => route.path.includes("/project-demo/"))

const imageBg = ref("")

/**获取背景图片 */
const getImg = async () => {
    let HomeBg = sessionStorage.getItem("HomeBg")
    imageBg.value = HomeBg ?? ""
    if (!HomeBg) {
        let ret = await fetch("https://mbsky-api.vercel.app/api/image/bing").then(res => res.json())
        imageBg.value = ret.data[0]["url"]
        sessionStorage.setItem("HomeBg", imageBg.value)
    }
}

const handlePush = (path: string) => {
    location.href = path
}

onMounted(async () => {
    getImg()
})
</script>

<style lang="less" scoped>
.wrapper {
    text-align: center;
    background-size: cover;
    background-attachment: fixed;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 20px;
    transition: filter 1s ease-in-out;
    .content {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .item {
            width: 500px;
            line-height: 100px;
            border-radius: 20px;
            text-align: center;
            margin: 10px;
            opacity: 0.8;
            color: #fff;
            text-decoration: none;
            cursor: pointer;
        }
    }
}

@media (max-width: 800px) {
    .wrapper .content .item {
        width: 80vw;
    }
}
</style>
