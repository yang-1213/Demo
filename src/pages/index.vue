<template>
    <div flex="col" class="color">
        <div>你好</div>
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
    height: 90vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: @default-color;
    // background-color: @primary-color;
}
</style>
