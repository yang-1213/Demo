<route lang="yaml">
meta:
    title: CSS-DEMO
    desc: css演示动画效果 https://www.jianshu.com/p/9471b686ff07
</route>

<template>
    <div class="text-center content">
        <div v-for="page in CssDemoPages" :key="page.name" @click="$router.push(page.path)" class="item">
            {{ page.meta.title }}
        </div>
    </div>
</template>

<script lang="ts" setup>
import useApp from "@/hooks/common/useApp"

const { router } = useApp()
const routes = router.getRoutes()
const CssDemoPages = routes.filter(route => route.path.includes("/css-demo/"))
</script>

<style lang="less" scoped>
.content {
    .item {
        line-height: 2;
        padding: 10px 0;
        border-bottom: 1px solid #d0d0d0;
        &:hover {
            cursor: pointer;
            background-color: #00a4ff;
            color: #fff;
        }
    }
}
</style>
