<script lang="ts" setup>
import useWebDark from "@/hooks/common/useWebDark"
const props = defineProps({
    msg: {
        type: String,
        default: "Hello World",
    },
})

const { isDark, toggleDark } = useWebDark()
</script>

<template>
    <div>
        {{ props.msg }}
        <button @click="toggleDark()">切换黑暗模式</button>
    </div>
</template>

<style lang="less" scoped></style>
