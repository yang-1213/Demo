<route lang="yaml">
meta:
    title: 笔记本
</route>

<template>
    <div class="wrapper">
        <button class="add" @click="handleAdd"><i class="fas fa-plus"></i> 添加笔记</button>
        <div class="content">
            <div class="notes" v-for="item in state.list" :key="item.id">
                <div class="tit">
                    <div class="edit" @click="handleEdit(item)"><i class="fas fa-edit"></i></div>
                    <div class="delete" @click="handleDelete(item)">
                        <i class="fas fa-trash-alt"></i>
                    </div>
                </div>
                <div
                    class="con"
                    :contenteditable="item.contenteditable"
                    @input="handleInput(item, $event)"
                    :class="{ disable: !item.contenteditable }"
                >
                    {{ item.value }}
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue"
const state = reactive({
    list: JSON.parse(localStorage.getItem("notes") as string) ?? [],
})

const handleAdd = () => {
    state.list.push({
        id: Date.now(),
        value: "",
        contenteditable: true,
    })
}
const handleInput = (item: any, e: any) => {
    item.value = e.target.textContent
    localStorage.setItem("notes", JSON.stringify(state.list))
}
const handleEdit = (item: any) => {
    item.contenteditable = !item.contenteditable
}
const handleDelete = (item: any) => {
    state.list.splice(
        state.list.findIndex((v: any) => item.id == v.id),
        1
    )

    localStorage.setItem("notes", JSON.stringify(state.list))
}
</script>

<style lang="less" scoped>
.wrapper {
    text-align: center;
    min-height: 100vh;
    padding: 3.5rem;
    background: linear-gradient(to bottom right, rgba(162, 100, 223, 0.555), pink);

    .add {
        position: fixed;
        top: 1rem;
        right: 1rem;
        z-index: 2;
        background-color: #00a4ff;
        color: #fff;
        border: none;
        border-radius: 6px;
        padding: 0.5rem 1rem;
        cursor: pointer;
        &:active {
            transform: scale(0.98);
        }
    }

    .content {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-wrap: wrap;
        .notes {
            position: relative;
            width: 20rem;
            background-color: #fff;
            border-radius: 6px;
            margin-right: 20px;
            margin-bottom: 20px;
            overflow: hidden;

            .tit {
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                z-index: 1;
                display: flex;
                justify-content: flex-end;
                background-color: #00a4ff;
                padding: 10px 0;
                font-size: 16px;
                color: #fff;
                .delete {
                    margin-left: 20px;
                    margin-right: 20px;
                }
            }

            .con {
                padding: 50px 20px 20px;
                height: 300px;
                text-align: left;
                border: 0;
                outline: 0;
                overflow-y: scroll;

                &.disable {
                    color: #ccc;
                    background-color: bisque;
                }
            }
        }
    }
}
</style>
