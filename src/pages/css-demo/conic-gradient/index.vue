<route lang="yaml">
meta:
    title: 饼图效果
    desc: conic-gradient
</route>

<template>
    <div class="content">
        <div class="gauge" style="--gauge-value: 900; --gauge-max-value: 1000"></div>
        <div class="gauge" style="--gauge-value: 800; --gauge-max-value: 1000"></div>
        <div class="gauge" style="--gauge-value: 700; --gauge-max-value: 1000"></div>
        <div class="gauge" style="--gauge-value: 600; --gauge-max-value: 1000"></div>
        <div class="gauge" style="--gauge-value: 500; --gauge-max-value: 1000"></div>
        <div class="gauge" style="--gauge-value: 400; --gauge-max-value: 1000"></div>
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

    .gauge {
        --gauge-width: 5.625rem;
        --gauge-value: 500;
        --gauge-max-value: 1000;
        --gauge-percentage: calc(var(--gauge-value) / var(--gauge-max-value) * 100%);
        --gauge-bg: white;
        --gauge-circle-color: hsl(196, 78%, 61%);
        --gauge-circle-color-lighter: hsl(196, 78%, 81%);
        --gauge-color: black;

        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        width: var(--gauge-width);
        height: var(--gauge-width);
        border-radius: 50%;
        color: var(--gauge-color);
        background: conic-gradient(var(--gauge-circle-color) var(--gauge-percentage), var(--gauge-circle-color-lighter) 0);
        counter-reset: value var(--gauge-value);

        margin: 1em;

        &::before {
            position: absolute;
            top: auto;
            left: auto;
            width: 90%;
            height: 90%;
            display: flex;
            justify-content: center;
            align-items: center;
            content: counter(value);
            background: var(--gauge-bg);
            border-radius: inherit;
        }
    }
}
</style>
