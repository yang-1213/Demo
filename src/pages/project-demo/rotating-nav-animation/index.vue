<route lang="yaml">
meta:
    title: Rotating Nav Animation
</route>

<template>
    <div class="wrap" :class="{ 'show-nav': Switch }">
        <div class="circle-container">
            <div class="circle">
                <button id="close" @click="Switch = false">
                    <i class="fas fa-times"></i>
                </button>
                <button id="open" @click="Switch = true">
                    <i class="fas fa-bars"></i>
                </button>
            </div>
        </div>

        <div class="container1">
            <div class="content">
                <h1>Amazing Article</h1>
                <small>Florin Pop</small>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quia in ratione dolores cupiditate, maxime aliquid impedit
                    dolorem nam dolor omnis atque fuga labore modi veritatis porro laborum minus, illo, maiores recusandae cumque ipsa quos. Tenetur,
                    consequuntur mollitia labore pariatur sunt quia harum aut. Eum maxime dolorem provident natus veritatis molestiae cumque quod
                    voluptates ab non, tempore cupiditate? Voluptatem, molestias culpa. Corrupti, laudantium iure aliquam rerum sint nam quas dolor
                    dignissimos in error placeat quae temporibus minus optio eum soluta cupiditate! Cupiditate saepe voluptates laudantium. Ducimus
                    consequuntur perferendis consequatur nobis exercitationem molestias fugiat commodi omnis. Asperiores quia tenetur nemo ipsa.
                </p>

                <h3>My Dog</h3>
                <img src="https://raw.githubusercontents.com/mbsky1213/images/master/web/2021/08/24/37l29brrshy.jpeg" alt="doggy" />
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit libero deleniti rerum quo, incidunt vel consequatur culpa ullam.
                    Magnam facere earum unde harum. Ea culpa veritatis magnam at aliquid. Perferendis totam placeat molestias illo laudantium? Minus
                    id minima doloribus dolorum fugit deserunt qui vero voluptas, ut quia cum amet temporibus veniam ad ea ab perspiciatis, enim
                    accusamus asperiores explicabo provident. Voluptates sint, neque fuga cum illum, tempore autem maxime similique laborum odio,
                    magnam esse. Aperiam?
                </p>
            </div>
        </div>

        <nav>
            <ul>
                <li @click="message.success('跳转home')"><i class="fas fa-home"></i> Home</li>
                <li @click="message.success('跳转About')"><i class="fas fa-user-alt"></i> About</li>
                <li @click="message.success('跳转Contact')"><i class="fas fa-envelope"></i> Contact</li>
            </ul>
        </nav>
    </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import { useMessage } from "naive-ui";

const Switch = ref(false);
const message = useMessage();

watch(Switch, (val) => {
    if (val) {
        document.body.classList.add("overflow-hidden");
    } else {
        document.body.classList.remove("overflow-hidden");
    }
});
</script>

<style lang="less">
.overflow-hidden {
    overflow: hidden !important;
}
</style>

<style lang="less" scoped>
.wrap {
    background-color: #333;
    overflow-x: hidden;
    &.show-nav {
        .container1 {
            transform: rotate(-20deg);
        }
        .circle {
            transform: rotate(-70deg);
        }
        nav ul li {
            transform: translateX(0);
            transition-delay: 0.3s;
        }
    }
}

.circle-container {
    position: fixed;
    top: -100px;
    left: -100px;
    z-index: 100;
    .circle {
        background-color: #ff7979;
        height: 200px;
        width: 200px;
        border-radius: 50%;
        position: relative;
        transition: transform 0.5s linear;
        button {
            cursor: pointer;
            position: absolute;
            top: 50%;
            left: 50%;
            height: 86px;
            background: transparent;
            border: 0;
            font-size: 26px;
            color: #fff;
            outline: none;
            &#open {
                left: 62%;
            }
            &#close {
                top: 60%;
                transform: rotate(60deg);
                transform-origin: top left;
            }
        }
    }
}

.container1 {
    color: #222;
    background-color: #fafafa;
    transform-origin: top left;
    transition: transform 0.5s linear;
    min-height: 100vh;
    padding: 50px;

    .content {
        max-width: 1000px;
        margin: 30px auto;

        img {
            max-width: 100%;
        }
        h1 {
            margin: 0;
        }
        small {
            color: #555;
            font-style: italic;
        }
        p {
            color: #333;
            line-height: 1.5;
        }
    }
}

nav {
    position: fixed;
    bottom: 40px;
    left: 0;
    z-index: 100;
    ul {
        list-style-type: none;
        padding-left: 30px;
        li {
            text-transform: uppercase;
            color: #fff;
            margin: 40px 0;
            transform: translateX(-100%);
            transition: transform 0.4s ease-in;
            cursor: pointer;
            i {
                font-size: 20px;
                margin-right: 10px;
            }
            & + li {
                margin-left: 15px;
                transform: translateX(-150%);
            }
            & + li + li {
                margin-left: 30px;
                transform: translateX(-200%);
            }
        }
    }
}
</style>
