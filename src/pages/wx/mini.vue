<route lang="yaml">
meta:
    title: 小程序
</route>

<template>
    <div class="content">
        <button @click="openMiniprogram">打开小程序</button>
    </div>
</template>

<script lang="ts" setup>
import { reactive, computed, onMounted } from "vue"
import useApp from "@hooks/common/useApp"
import { useMessage } from "naive-ui"

const message = useMessage()
const { route } = useApp()

const state = reactive({
    appid: "", // 通过明文 URL Scheme 打开小程序的 appid
    path: "", // 通过明文 URL Scheme 打开小程序的页面 path ，必须是已经发布的小程序存在的页面，不可携带 query；
    query: "", // 通过明文 URL Scheme 打开小程序的 query ，最大512个字符，只支持数字，大小写英文以及部分特殊字符：!#$&'()*+,/:;=?@-._~%`，需要url_encode；
    env_version: "release", // 要打开的小程序版本,正式版为release，体验版为trial，开发版为develop，仅在微信外打开时生效。注意：若不填写，则默认打开正式版小程序。
})

const scheme_URL = computed(() => {
    const { appid, path, query, env_version } = state
    return `weixin://dl/business/?appid=${appid}&path=${path}&query=${query}&env_version=${env_version}`
})

/** 打开小程序 */
const openMiniprogram = () => {
    if (!state.appid) {
        return message.error("appid 不能为空")
    }

    if (!state.path) {
        return message.error("path 不能为空")
    }

    location.href = scheme_URL.value
}

onMounted(() => {
    state.appid = route.query.appid ?? ""
    state.path = route.query.path ?? ""
    state.query = route.query.query ?? ""
    state.env_version = route.env_version ?? "release"

    openMiniprogram()
})
</script>

<style lang="less" scoped>
.content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: linear-gradient(to bottom right, #fff, rgb(253, 241, 243));

    button {
        padding: 10px 20px;
        border-radius: 10px;
        background-color: #07c160;
        color: #fff;
        cursor: pointer;
        &:active {
            transform: scale(0.98);
        }
    }
}
</style>
