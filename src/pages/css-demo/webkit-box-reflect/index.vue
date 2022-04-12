<route lang="yaml">
meta:
    title: 投影效果
    desc: -webkit-box-reflect 适合立体感强的作品
</route>

<template>
    <div class="content">
        <div class="scene">
            <div class="card" v-for="(item, index) in ImgList" :key="index">
                <div class="card__face card__face--front">
                    <img :src="item.front" />
                </div>
                <div class="card__face card__face--back">
                    <img :src="item.back" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const ImgList = [
    {
        front: "https://cdn.jsdelivr.net/gh/mbsky1213/images/web/2021/08/24/37l29brrshy.jpeg",
        back: "https://cdn.jsdelivr.net/gh/mbsky1213/images/web/2021/08/24/4yig5z1bwpx.jpeg",
    },
    {
        front: "https://cdn.jsdelivr.net/gh/mbsky1213/images/web/2021/08/24/8ihjapsraol.jpeg",
        back: "https://cdn.jsdelivr.net/gh/mbsky1213/images/web/2021/08/24/8rm0mmufdg.jpeg",
    },
    {
        front: "https://cdn.jsdelivr.net/gh/mbsky1213/images/web/2021/08/24/e2ncpex1ths.jpeg",
        back: "https://cdn.jsdelivr.net/gh/mbsky1213/images/web/2021/08/24/fxj3dmb9bu.jpeg",
    },
]
</script>

<style lang="less" scoped>
.content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    background-color: black;
    min-height: 100%;

    .scene {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        perspective: 800px;
        padding: 50px 0;

        .card {
            position: relative;
            width: 240px;
            height: 300px;
            margin: 100px 50px;
            cursor: pointer;
            transition: 1s ease-in-out;
            transform-style: preserve-3d;

            &:hover {
                transform: rotateY(0.5turn);
            }

            .card__face {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                backface-visibility: hidden; // 当前元素背面朝向观察者是否可见
                transition: 1s ease;
                -webkit-box-reflect: below 0
                    linear-gradient(transparent, transparent, rgba(0, 0, 0, 0.4));

                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }

                &--back {
                    transform: rotateY(180deg);
                }
            }
        }
    }
}
</style>
