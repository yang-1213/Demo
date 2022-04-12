<route lang="yaml">
meta:
    title: todo-list
    desc: 兄弟选择符定制表单元素
</route>

<template>
    <form>
        <fieldset class="todo-list">
            <legend class="todo-list__title">Todo List</legend>
            <label class="todo-list__label">
                <input type="checkbox" />
                <i class="check"></i>
                <span>Make awesome CSS animation</span>
            </label>
            <label class="todo-list__label">
                <input type="checkbox" />
                <i class="check"></i>
                <span>Watch awesome bangumi</span>
            </label>
            <label class="todo-list__label">
                <input type="checkbox" />
                <i class="check"></i>
                <span>Encounter awesome people</span>
            </label>
            <label class="todo-list__label">
                <input type="checkbox" />
                <i class="check"></i>
                <span>Be an awesome man</span>
            </label>
        </fieldset>
    </form>
</template>

<script lang="ts" setup>
import { useHead } from "@vueuse/head"

useHead({
    link: [
        {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css?family=Lato:400,400i,700",
        },
    ],
})
</script>

<style lang="less" scoped>
form {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background: #1a1e23;

    .todo-list {
        display: flex;
        flex-direction: column;
        padding: 0 50px 0 20px;
        background: #162740;
        border: transparent;

        .todo-list__title {
            padding: 3px 6px;
            color: #f1faee;
            background-color: #264456;
        }

        .todo-list__label {
            display: flex;
            align-items: center;
            font-size: 16px;
            font-family: Lato, sans-serif;
            cursor: pointer;
            color: #f1faee;
            margin: 20px 0;

            input[type="checkbox"] {
                opacity: 0;
                appearance: none;
                & + .check {
                    position: absolute;
                    width: 25px;
                    height: 25px;
                    border: 2px solid #f1faee;
                    transition: 0.2s;
                }

                &:checked + .check {
                    width: 25px;
                    height: 10px;
                    border-top: transparent;
                    border-right: transparent;
                    transform: rotate(-45deg);
                }

                & ~ span {
                    position: relative;
                    left: 30px;
                    white-space: nowrap;
                    transition: 0.5s;

                    &::before {
                        position: absolute;
                        content: "";
                        top: 50%;
                        left: 0;
                        width: 100%;
                        height: 1px;
                        background: #f1faee;
                        transform: scaleX(0);
                        transform-origin: right;
                        transition: transform 0.5s;
                    }
                }
                &:checked ~ span {
                    color: #585b57;

                    &::before {
                        transform: scaleX(1);
                        transform-origin: left;
                    }
                }
            }
        }
    }
}
</style>
