<route lang="yaml">
meta:
    title: box-shadow实现loading效果
    desc: box-shadow inset 属性
</route>

<template>
    <div relative flex justify="center" items="center" h-full bg="black">
        <div class="loading"></div>
    </div>
</template>

<style lang="less" scoped>
.loading {
    position: relative;
    width: 8em;
    height: 8em;
    background: black;
    border-radius: 50%;
    box-shadow: inset 0.5em -0.5em rgb(254, 3, 53);
    animation: spin 2s linear infinite;
    
    &::before,
    &::after {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        background: inherit;
        border-radius: inherit;
        box-shadow: inherit;
    }

    &::before {
        filter: blur(5px);
    }

    &::after {
        filter: blur(10px);
    }
}

@keyframes spin {
    to {
        transform: rotate(1turn);
    }
}
</style>
