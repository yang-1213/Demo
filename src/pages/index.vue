<template>
    <div flex="col" class="color" @click="handlePush">
        <div>{{ store.count }}</div>
    </div>
</template>

<script lang="ts" setup>
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import useApp from "@hooks/common/useApp"

const { dayjs, store } = useApp()

const handlePush = () => {
    store.count = dayjs().format("YYYY-MM-DD HH:mm:ss")
}
</script>

<style lang="less" scoped>
.color {
    color: @default-color;
    background-color: @primary-color;
}
</style>
