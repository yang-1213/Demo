<route lang="yaml">
meta:
    title: Split Landing Page
</route>

<template>
    <div class="wrapper">
        <div class="split left">
            <h1>Playstation 5</h1>
            <div class="btn">Buy Now</div>
        </div>
        <div class="split right">
            <h1>XBox Series X</h1>
            <div class="btn">Buy Now</div>
        </div>
    </div>
</template>

<style lang="less" scoped>
.wrapper {
    --left-bg-color: rgba(87, 84, 236, 0.7);
    --right-bg-color: rgba(43, 43, 43, 0.8);
    --left-btn-hover-color: rgba(87, 84, 236, 1);
    --right-btn-hover-color: rgba(28, 122, 28, 1);
    --speed: 1000ms;
}

.wrapper {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background: #333;
    display: flex;

    h1 {
        font-size: 4rem;
        color: #fff;
        position: absolute;
        left: 50%;
        top: 20%;
        transform: translateX(-50%);
        white-space: nowrap;
    }

    .split {
        position: relative;
        flex: 1;
        height: 100%;
        overflow: hidden;
        &.left {
            left: 0;
            background: url("//cdn.jsdelivr.net/gh/mbsky1213/images/web/2021/08/26/kvx6x9ee3r8.jpeg");
            background-repeat: no-repeat;
            background-size: cover;
            transition: all var(--speed) ease-in-out;

            &:hover {
                flex: 2;
            }

            &::before {
                content: "";
                position: absolute;
                width: 100%;
                height: 100%;
                background-color: var(--left-bg-color);
                transition: all var(--speed) ease-in-out;
            }

            .btn:hover {
                background-color: var(--left-btn-hover-color);
                border-color: var(--left-btn-hover-color);
            }
        }

        &.right {
            right: 0;
            background: url("//cdn.jsdelivr.net/gh/mbsky1213/images/web/2021/08/26/s9rkgtkihsp.jpeg");
            background-repeat: no-repeat;
            background-size: cover;
            transition: all var(--speed) ease-in-out;
            &:hover {
                flex: 2;
            }

            &::before {
                content: "";
                position: absolute;
                width: 100%;
                height: 100%;
                background-color: var(--right-bg-color);
                transition: all var(--speed) ease-in-out;
            }
            .btn:hover {
                background-color: var(--right-btn-hover-color);
                border-color: var(--right-btn-hover-color);
            }
        }

        .btn {
            position: absolute;
            display: flex;
            align-items: center;
            justify-content: center;
            left: 50%;
            top: 40%;
            transform: translateX(-50%);
            color: #fff;
            border: #fff solid 0.2rem;
            font-size: 1rem;
            font-weight: bold;
            text-transform: uppercase;
            width: 15rem;
            padding: 1.5rem;
            cursor: pointer;
        }
    }
}
</style>
