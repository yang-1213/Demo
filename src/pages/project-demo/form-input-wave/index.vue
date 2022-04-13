<route lang="yaml">
meta:
    title: Form Input Wave
</route>

<template>
    <div class="content">
        <form class="form">
            <h1>Please Login</h1>
            <div class="input-control">
                <input type="text" required />
                <label>
                    <span v-for="(text, i) in 'Email'" :key="i" :style="{ transitionDelay: `${i * 0.1}s` }">{{ text }}</span>
                </label>
            </div>
            <div class="input-control">
                <input type="password" required />
                <label>
                    <span v-for="(text, i) in 'Password'" :key="i" :style="{ transitionDelay: `${i * 0.1}s` }">{{ text }}</span>
                </label>
            </div>

            <input type="submit" value="Login" />
            <div class="tips">Don't have an account? <a href="javascrip:;">Register</a></div>
        </form>
    </div>
</template>

<style lang="less" scoped>
@activeColor: #add8e6;
.content {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #4682b4;

    .form {
        background-color: #2a4e6c;
        width: 400px;
        border-radius: 10px;
        padding: 30px;
        color: #fff;
        h1 {
            text-align: center;
        }

        .input-control {
            position: relative;
            margin-top: 40px;
            input {
                width: 100%;
                outline: none;
                border-color: transparent;
                border-bottom: 2px solid #fff;
                padding: 10px 0;
                background-color: transparent;
                color: #fff;
                font-size: 20px;
                &:focus,
                &:valid {
                    border-bottom-color: @activeColor;
                    & + label > span {
                        color: @activeColor;
                        top: -30px;
                    }
                }

                // 表单验证
                // &:valid {
                //     border-bottom-color: @activeColor;
                // }
            }
            label {
                position: absolute;
                left: 0;
                top: 8px;
                pointer-events: none;
                > span {
                    position: relative;
                    top: 0;
                    transition: top 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
                }
            }
        }

        input[type="submit"] {
            width: 100%;
            height: 60px;
            background-color: #add8e6;
            border-radius: 10px;
            outline: none;
            border: 0;
            color: #000;
            font-size: 26px;
            margin-top: 40px;
            &:active {
                transform: scale(0.98);
            }
        }

        .tips {
            font-size: 16px;
            margin-top: 20px;
            a {
                color: @activeColor;
            }
        }
    }
}
</style>
