<route lang="yaml">
meta:
    title: 弹窗效果
    desc: HTML的dialog标签，渐变背景，动画以及overflow障眼法
</route>

<template>
    <div class="content">
        <dialog ref="dialog" class="modal">
            <div class="modal-content">
                <svg
                    t="1574164208713"
                    class="model-icon"
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="5819"
                    width="63"
                    height="63"
                >
                    <path
                        d="M512 0C230.4 0 0 230.4 0 512s230.4 512 512 512 512-230.4 512-512S793.6 0 512 0zM512 877.714286c-40.228571 0-73.142857-32.914286-73.142857-73.142857s32.914286-73.142857 73.142857-73.142857 73.142857 32.914286 73.142857 73.142857S552.228571 877.714286 512 877.714286zM585.142857 512c0 40.228571-32.914286 73.142857-73.142857 73.142857s-73.142857-32.914286-73.142857-73.142857L438.857143 219.428571c0-40.228571 32.914286-73.142857 73.142857-73.142857s73.142857 32.914286 73.142857 73.142857L585.142857 512z"
                        p-id="5820"
                        fill="white"
                    ></path>
                </svg>
                <h2 class="modal-title">Are you sure?</h2>
                <p class="modal-description">You can't undo this action.</p>
                <div class="modal-options">
                    <button class="option confirm" data-text="Yes" @click="close()"></button>
                    <button class="option cancel" data-text="No" @click="close()"></button>
                </div>
            </div>
        </dialog>

        <button class="btn" @click="open()">Delete history</button>
    </div>
</template>

<script lang="ts" setup>
// @ts-nocheck
import { useHead } from "@vueuse/head"
import { ref } from "vue"

useHead({
    link: [
        {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css?family=Lato",
        },
    ],
})

const dialog = ref(null)
const open = () => {
    dialog.value.showModal()
}
const close = () => {
    dialog.value.close()
}
</script>

<style lang="less" scoped>
@keyframes show-modal-option {
    from {
        transform: scale(0.4);
    }

    50% {
        transform: scale(1.2);
        opacity: 1;
    }

    to {
        transform: scale(1);
        opacity: 1;
    }
}
@keyframes show-modal-text {
    from {
        transform: scale(0.6);
    }

    50% {
        transform: scale(1.2);
        opacity: 1;
    }

    to {
        transform: scale(1);
        opacity: 1;
    }
}

@keyframes show-modal-icon {
    from {
        transform: scale(0.4);
    }

    50% {
        transform: scale(1.2);
        opacity: 1;
    }

    to {
        transform: scale(1);
        opacity: 1;
    }
}

@keyframes show-modal {
    from {
        transform: scale(0.8);
    }

    50% {
        transform: scale(1.1);
        opacity: 1;
    }

    to {
        transform: scale(1);
        opacity: 1;
    }
}

.content {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Lato, sans-serif;
    background-color: #eceffc;
    height: 100%;
    overflow: hidden;

    .btn {
        position: relative;
        padding: 10px 20px;
        border-radius: 6px;
        background-color: #f14668;
        color: #fff;
        font-size: 1rem;
        text-decoration: none;
        outline: none;

        &:hover {
            background-color: #ee2049;
        }
    }

    .modal {
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 999;
        color: white;
        background-image: linear-gradient(to right, #0acffe 0%, #495aff 100%);
        border: transparent;
        border-radius: 12px;
        box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.02), 0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 12.5px 10px rgba(0, 0, 0, 0.035),
            0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 41.8px 33.4px rgba(0, 0, 0, 0.05), 0 100px 80px rgba(0, 0, 0, 0.07);
        animation: show-modal 0.5s ease forwards;

        &::backdrop {
            background: rgba(0, 0, 0, 0.4);
            backdrop-filter: blur(3px);
        }

        .model-icon {
            margin-bottom: 1.25rem;
            opacity: 0;
            animation: show-modal-icon 0.5s ease 0.2s forwards;
        }

        .modal-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 300px;
            padding: 1em;

            .modal-title {
                margin-top: 0;
                margin-bottom: 1.2rem;
                opacity: 0;
                animation: show-modal-text 0.5s ease 0.35s forwards;
            }

            .modal-description {
                margin: 0;
                opacity: 0;
                animation: show-modal-text 1s ease 0.5s forwards;
            }

            .modal-options {
                margin-top: 1rem;
                display: flex;
                justify-content: space-around;

                .option {
                    position: relative;
                    padding: 0 3em;
                    margin: 0.3em;
                    font-size: 20px;
                    font-weight: 700;
                    height: 50px;
                    line-height: 50px;
                    background-color: #fff;
                    border-radius: 25px;
                    overflow: hidden;
                }

                .confirm {
                    opacity: 0;
                    animation: show-modal-option 0.5s ease 0.65s forwards;

                    &::before {
                        content: "";
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 100%;
                        height: 100%;
                        border-radius: 20px;
                        transform: translateX(100%);
                        transform-origin: right;
                        background: hsl(141, 53%, 53%);
                        transition: all 0.3s;
                    }

                    &::after {
                        content: attr(data-text);
                        position: absolute;
                        left: 0;
                        top: 0;
                        z-index: 99;
                        width: 100%;
                        height: 100%;
                        color: hsl(141, 53%, 53%);
                        transition: all 0.3s;
                    }

                    &:hover {
                        &::before {
                            transform: translateX(0);
                        }
                        &::after {
                            color: #fff;
                        }
                    }
                }

                .cancel {
                    opacity: 0;
                    animation: show-modal-option 0.5s ease 0.8s forwards;

                    &::before {
                        content: "";
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 100%;
                        height: 100%;
                        border-radius: 20px;
                        transform: translateX(-100%);
                        transform-origin: left;
                        background: hsl(348, 86%, 61%);
                        transition: all 0.3s;
                    }

                    &::after {
                        content: attr(data-text);
                        position: absolute;
                        left: 0;
                        top: 0;
                        z-index: 99;
                        width: 100%;
                        height: 100%;
                        color: hsl(348, 86%, 61%);
                        transition: all 0.3s;
                    }

                    &:hover {
                        &::before {
                            transform: translateX(0);
                        }
                        &::after {
                            color: #fff;
                        }
                    }
                }
            }
        }
    }
}
</style>
