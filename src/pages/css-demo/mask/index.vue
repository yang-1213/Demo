<route lang="yaml">
meta:
    title: 遮罩
    desc: 给box-shadow的扩张半径设定足够大的值，可以用它来遮住背景，而无需额外的div元素
</route>

<template>
    <div relative flex justify="center" items="center" h-full bg="#eceffc">
        <input type="checkbox" id="burger-toggle" />
        <label for="burger-toggle" class="burger-menu">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </label>
        <div class="overlay"></div>
    </div>
</template>

<style lang="less" scoped>
#burger-toggle {
    opacity: 0;
    appearance: none;

    &:checked ~ .burger-menu {
        .line {
            &:nth-of-type(1) {
                transform: translateY(380%) rotate(45deg);
            }
            &:nth-of-type(2) {
                width: 0;
            }
            &:nth-of-type(3) {
                transform: translateY(-380%) rotate(-45deg);
            }
        }
    }
    &:checked ~ .overlay {
        box-shadow: 0 0 0 200vw #00a4ff;
    }
}

.burger-menu {
    position: relative;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 2px solid #ccc;
    background-color: #fff;
    transition: 0.3s;
    z-index: 99;

    .line {
        position: relative;
        width: 60%;
        height: 5px;
        overflow: hidden;
        background-color: #ccc;
        transition: 0.3s;

        &::after {
            transition: 0.3s;
            position: absolute;
            content: "";
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #2980b9;
            transform: translateX(-101%);
            transition: all 0.3s ease;
        }

        &:nth-of-type(2) {
            &::after {
                transition: all 0.3s 0.2s ease;
            }
        }
        &:nth-of-type(3) {
            &::after {
                transition: all 0.3s 0.4s ease;
            }
        }
    }

    &:hover {
        box-shadow: 0 0 5px 5px rgb(155, 155, 155);
        .line {
            &::after {
                transform: translateX(0);
            }
        }
    }
}

.overlay {
    position: absolute;
    width: 1px;
    height: 1px;
    border-radius: 50%;
    transition: 0.3s;
    box-shadow: 0 0 0 0 #00a4ff;
}
</style>
