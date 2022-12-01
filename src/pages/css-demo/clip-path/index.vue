<route lang="yaml">
meta:
    title: 裁剪效果
    desc: clip-path
</route>

<template>
    <div class="content">
        <div class="box"></div>
    </div>
</template>

<style lang="less" scoped>
.content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    background-color: #eceffc;
    height: 100%;

    .box {
        background-image: url(https://raw.githubusercontents.com/mbsky1213/images/master/web/2021/08/27/esy60faxtfm.jpeg);
        background-size: cover;
        transition: 0.3s;
        width: 50%;
        height: 50%;
        clip-path: inset(0 0 0 0);

        &:hover {
            transform: scale(2);
            clip-path: inset(20% 20% 20% 20%);
        }
    }
}
</style>
