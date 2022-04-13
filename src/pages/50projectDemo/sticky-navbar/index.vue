<route lang="yaml">
meta:
    title: 简易博客首页
</route>

<template>
    <div class="wrapper">
        <div class="nav" ref="nav" :class="{ active: state.active }">
            <div class="nav-content">
                <a href="javascript:void(0);" class="left">My WebSite</a>
                <div class="right">
                    <li v-for="(item, index) in state.navList" :key="index">
                        <a href="javascript:void(0);">{{ item.name }}</a>
                    </li>
                </div>
            </div>
        </div>
        <div class="content">
            <div>Welcome To My Website</div>
            <div>欢乐是如何消失的呢? 海绵宝宝</div>
        </div>
       <p>
           <h2>Content One</h2>
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione dolorem voluptates eveniet tempora ut cupiditate magnam, sapiente, hic quo in ipsum iste soluta eaque perferendis nihil recusandae dolore officia aperiam corporis similique. Facilis quos tempore labore totam! Consectetur molestiae iusto ducimus error reiciendis aspernatur dolor, modi dolorem sit architecto, voluptate magni sunt unde est quas? Voluptates a dolorum voluptatum quo perferendis aut sit. Aspernatur libero laboriosam ab eligendi omnis delectus earum labore, placeat officiis sint illum rem voluptas ipsum repellendus iste eius recusandae quae excepturi facere, iure rerum sequi? Illum velit delectus dicta et iste dolorum obcaecati minus odio eligendi!
       </p>
       <p>
           <h2>Content Two</h2>
           Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur provident nostrum possimus inventore nisi laboriosam consequatur modi nulla eos, commodi, omnis distinctio! Maxime distinctio impedit provident, voluptates illo odio nostrum minima beatae similique a sint sapiente voluptatum atque optio illum est! Tenetur tempora doloremque quae iste aperiam hic cumque repellat?
       </p>
    </div>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import {  useEventListener } from '@vueuse/core';

const nav = ref(null);
const state = reactive({
    navList: [
        {
            name: "Home",
        },
        {
            name: "About",
        },
        {
            name: "Services",
        },
        {
            name: "Contact",
        },
    ],
    active: false,
});

useEventListener('scroll', e => {
    // @ts-ignore
    if(window.scrollY > nav.value.offsetHeight) {
        state.active = true;
    } else {
        state.active = false;
    }
})
</script>

<style lang="less" scoped>
.wrapper {
    position: relative;

    min-height: 100vh;
    background-image: linear-gradient(to bottom right, #00a4ff, pink);
    padding-bottom: 40px;
    // background-attachment: Fixed;

    .nav {
        position: sticky;
        display: flex;

        top: 0;
        height: 80px;
        margin: 0 auto;
        background-color: #fabfcc;
        transition: 0.3s linear;

        .nav-content {
            width: 80%;
            margin: 0 auto;
            display: flex;
            align-items: center;
            justify-content: space-between;
            .right {
                display: flex;
                align-items: center;
            }
            li {
                list-style: none;
                margin-left: 20px;
                &::nth-of-type(2) {
                    margin-left: auto;
                }
            }
        }

        &.active {
            background-color: #fff;
            height: 60px;
            a{
                color: black;
            }
        }

        a {
            color: #fff;
            text-decoration: none;
            &:hover {
                color: red;
            }
        }
    }

    .content {
        // background-image: url('');
        height: calc(100vh - 80px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        div {
            font-size: 30px;
            color: #fff;
            &:nth-of-type(2) {
                margin-top: 10px;
                font-size: 20px;
            }
        }
    }
    p{
        width: 80%;
        margin: 20px auto 0;
    }
}
</style>
