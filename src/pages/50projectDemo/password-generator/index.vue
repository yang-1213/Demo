<route lang="yaml">
meta:
    title: 密码生成器
</route>

<template>
    <div class="wrapper">
        <div class="password-content">
            <h1>密码生成器</h1>
            <div class="result-container">
                <span>{{ state.result }}</span>
                <button class="btn" @click="copy">
                    <i class="far fa-clipboard"></i>
                </button>
            </div>
            <div class="setting">
                <div class="left">密码长度</div>
                <n-input-number
                    v-model:value="state.length"
                    class="right"
                    placeholder="最大值"
                    :min="5"
                    :max="20"
                    :validator="validator"
                />
            </div>
            <div class="setting">
                <div class="left">包括大写字母</div>
                <n-switch v-model:value="state.upper" class="right" />
            </div>
            <div class="setting">
                <div class="left">包括小写字母</div>
                <n-switch v-model:value="state.lower" class="right" />
            </div>
            <div class="setting">
                <div class="left">包括数字</div>
                <n-switch v-model:value="state.number" class="right" />
            </div>
            <div class="setting">
                <div class="left">包括符号</div>
                <n-switch v-model:value="state.symbol" class="right" />
            </div>
            <n-button type="primary" secondary color="#8a2be2" style="width: 100%" @click="generatePassword">
                生成密码
            </n-button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useMessage } from "naive-ui"
import { reactive } from "vue"

const message = useMessage()
const state = reactive({
    result: "",
    length: 5,

    upper: true,
    lower: true,
    number: true,
    symbol: true,
})

const validator = (num: number | string) => Number.isInteger(num)
const copy = () => {
    const textarea = document.createElement("textarea")
    const password = state.result
    if (!password) return

    textarea.value = password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand("copy")
    textarea.remove()
    message.success("复制成功")
}
const generatePassword = () => {
    const randomFunc = {
        lower: () => String.fromCharCode(Math.floor(Math.random() * 26) + 97),
        upper: () => String.fromCharCode(Math.floor(Math.random() * 26) + 65),
        number: () => String.fromCharCode(Math.floor(Math.random() * 10) + 48),
        symbol: () => {
            const symbols = "!@#$%^&*(){}[]=<>/,."
            return symbols[Math.floor(Math.random() * symbols.length)]
        },
    }
    const generatePassword = () => {
        let generatedPassword: string = ""
        let { lower, upper, number, symbol, length } = state
        const typesCount = Number(lower) + Number(upper) + Number(number) + Number(symbol)
        const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(
            item => Object.values(item)[0]
        )

        if (typesCount === 0) return ""

        for (let i = 0; i < length; i += typesCount) {
            typesArr.forEach(type => {
                const funcName = Object.keys(type)[0] as keyof typeof randomFunc
                generatedPassword += randomFunc[funcName]()
            })
        }

        return generatedPassword.slice(0, length)
    }

    state.result = generatePassword()
}
</script>

<style lang="less" scoped>
.wrapper {
    position: relative;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    background-image: linear-gradient(to right bottom, red, #00a4ff, blue);
    color: #fff;

    .password-content {
        width: 500px;
        border-radius: 10px;
        background-color: #00a4ff;
        padding: 20px 20px;
        h1 {
            text-align: center;
        }
        .result-container {
            display: flex;
            margin: 10px auto;
            background-color: rgba(0, 0, 0, 0.438);
            padding: 10px;
            border-radius: 10px;
            span {
                flex: 1;
            }
            .btn {
                border: 0;
                background-color: #3b3b98;
                color: #fff;
                font-size: 16px;
                padding: 8px 12px;
                cursor: pointer;
            }
        }

        .setting {
            display: flex;
            align-items: center;
            background-color: rgba(0, 47, 255, 0.377);
            padding: 10px;
            margin-bottom: 10px;
            border-radius: 10px;
            .left {
                width: 60%;
            }
            .right {
                margin-left: auto;
            }
        }
    }
}
</style>
