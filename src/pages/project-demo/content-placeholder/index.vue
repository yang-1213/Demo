<route lang="yaml">
meta:
    title: 骨架屏
</route>

<template>
    <div class="content">
        <div class="card" :class="{ load : isLoad }">
            <div class="card-header animated-bg">
                <img
                    src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80"
                    v-if="isLoad"
                />
            </div>

            <div class="card-content">
                <h3 class="card-title animated-bg animated-bg-text">
                    {{ isLoad ? "我是标题" : "" }}
                </h3>
                <!-- eslint-disable vue/no-parsing-error -->
                <p class="card-excerpt">
                    <div v-if="isLoad">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis</div>
                    <div v-else>
                        <span class="animated-bg animated-bg-text"></span>
                        <span class="animated-bg animated-bg-text"></span>
                        <span class="animated-bg animated-bg-text"></span>
                    </div>
                </p>
                <div class="author">
                    <div class="profile-img animated-bg">
                        <img src="https://randomuser.me/api/portraits/men/46.jpg" v-if="isLoad" />
                    </div>
                    <div class="author-info">
                        <strong class="animated-bg animated-bg-text">
                            {{ isLoad ? "John Doe" : "" }}
                        </strong>
                        <small class="animated-bg animated-bg-text">
                            {{ isLoad ? "Oct 08, 2020" : "" }}
                        </small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

let isLoad = ref(false);
setTimeout(() => {
    isLoad.value = true;
}, 2000);
</script>

<style lang="less" scoped>
.content {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size:12px;

    height: 100vh;
    background-image: linear-gradient(to right,#00a4ff,pink);

    img {
        max-width: 100%;
    }

    .card {
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        overflow: hidden;
        width: 350px;
        &.load{
            .animated-bg {
                background: none;
                animation: none;
            }

            .animated-bg-text {
                border-radius: none;
                height: auto;
            }
        }

        .card-header {
            height: 200px;
            img {
                object-fit: cover;
                height: 100%;
                width: 100%;
            }
        }
        .card-content {
            background-color: #fff;
            padding: 30px;
            .card-title {
                height: 20px;
                margin: 0;
            }

            .card-excerpt {
                color: #777;
                margin: 10px 0 20px;
            }
            .author {
                display: flex;
            }

            .profile-img {
                border-radius: 50%;
                overflow: hidden;
                height: 40px;
                width: 40px;
            }

            .author-info {
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                margin-left: 10px;
                width: 100px;
            }

            .author-info small {
                color: #aaa;
                margin-top: 5px;
            }
        }

        .animated-bg {
            background-image: linear-gradient(to right, #f6f7f8 0%, #edeef1 10%, #f6f7f8 20%, #f6f7f8 100%);
            background-size: 200% 100%;
            animation: bgPos 1s linear infinite;
        }

        .animated-bg-text {
            border-radius: 50px;
            display: inline-block;
            margin: 0;
            height: 10px;
            width: 100%;
        }
    }

    @keyframes bgPos {
        0% {
            background-position: 50% 0;
        }

        100% {
            background-position: -150% 0;
        }
    }
}
</style>
