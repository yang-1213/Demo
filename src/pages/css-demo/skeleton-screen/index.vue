<route lang="yaml">
meta:
    title: 骨架屏演示
</route>

<template>
    <div class="loading-screen"></div>
</template>

<style lang="less" scoped>
@width: 50vw; //宽度
@height: 2vh; //高度
@interval: @height; //间隔
@background: rgb(222, 224, 226); // 背景颜色

// 循环生成背景颜色
.box-shadow(@n, @i: 1) when (@i =< @n) {
    box-shadow+: mod(@i, 3) * @height (@i* (@height+ @interval)) 0 0 @background;
    box-shadow+: 0 (@i* (@height+ @interval)) 0 0 @background;
    .box-shadow(@n, (@i + 1));
}

.loading-screen {
    box-sizing: border-box;
    &:empty {
        position: relative;
        width: 98vw;
        height: 100vh;
        overflow: hidden;
        background-color: #fff;

        &::before {
            content: "";
            position: absolute;
            z-index: 1;
            left: 2vw;
            top: 2vh;
            width: @height * 5;
            height: @height * 5;
            background-color: @background;
            // border-radius: 20%;
            // border: @raduis #fff solid;
            box-shadow: 0 0 0 @height*0.6 #fff;
        }
        &::after {
            content: "";
            position: absolute;
            left: 2vw;
            top: 2vh;
            width: 86%;
            height: @height;
            background-color: @background;
            border-radius: @interval;
            // 循环20次
            .box-shadow(20);
        }
    }
}
</style>
