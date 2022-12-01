<route lang="yaml">
meta:
    title: 混合模式
    desc: mix-blend-mode
</route>

<template>
    <div class="content">
        <video
            autoplay
            muted
            loop
            preload="true"
            poster="https://raw.githubusercontents.com/mbsky1213/images/master/web/2021/08/27/esy60faxtfm.jpeg"
            src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-20cb47b8-e033-42e3-9522-e10a16bb5389/cc297bc5-b01a-4a1b-9a1f-9fcb01acc5ca.mp4"
        ></video>
        <h1>mbsky</h1>
    </div>
</template>

<script lang="ts" setup>
import { useHead } from "@vueuse/head";

useHead({
    link: [
        {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css?family=Baloo+Bhaijaan&display=swap",
        },
    ],
});
</script>

<style lang="less" scoped>
.content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    font-family: "Baloo Bhaijaan", cursive;
    background-color: #eceffc;
    height: 100%;
    user-select: none;
    overflow: hidden;

    video,
    h1 {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }

    video {
        object-fit: cover;
    }

    h1 {
        font-size: 20vw;
        font-weight: 700;
        line-height: 100vh;
        text-transform: uppercase;
        text-align: center;
        background: #fff;
        // normal | multiply | screen | overlay | darken | lighten | color-dodge | color-burn | hard-light | soft-light | difference | exclusion | hue | saturation | color | luminosity
        mix-blend-mode: screen;
    }
}
</style>
