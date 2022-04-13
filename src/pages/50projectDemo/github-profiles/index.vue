<route lang="yaml">
meta:
    title: Github Profiles
</route>

<template>
    <div class="content">
        <div class="user-form" id="form">
            <input
                type="text"
                v-model.trim="state.search"
                placeholder="Search a Github User"
                @keyup.enter="getUser"
            />
        </div>

        <main>
            <div>
                <div class="card" v-if="state.error">
                    <h1>{{ state.error }}</h1>
                </div>
                <div class="card" v-else-if="state.user">
                    <img :src="state.user.avatar_url" :alt="state.user.name" class="avatar" />
                    <div class="user-info">
                        <h2>{{ state.user.login }}</h2>
                        <!-- <h3>{{ state.user.name || "null" }}</h3> -->
                        <ul>
                            <li>{{ state.user.followers }} <strong>Followers</strong></li>
                            <li>{{ state.user.following }} <strong>Following</strong></li>
                            <li>{{ state.user.public_repos }} <strong>Repos</strong></li>
                        </ul>

                        <div id="repos">
                            <template v-for="item in state.repos" :key="item.name">
                                <a :href="item.html_url" target="_blank" class="repo">{{
                                    item.name
                                }}</a>
                            </template>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue"

const APIURL = "https://api.github.com/users/"
const state = reactive<{ search: string; error: string | null; user: any | null; repos: any[] }>({
    search: "",
    error: null,
    user: null,
    repos: [],
})

async function getUser() {
    const data = await window.fetch(APIURL + state.search).then(res => res.json())
    getRepos()

    state.search = ""
    state.error = null

    if (data.message) {
        state.error = "404"
    } else {
        state.user = data
    }
}

async function getRepos() {
    state.repos = []
    const data = await fetch(APIURL + state.search + "/repos?sort=created").then(res => res.json())
    if (!data.message) {
        state.repos = data
    }
}
</script>

<style lang="less" scoped>
.content {
    position: relative;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    user-select: none;
    background: #2a2a72;

    .user-form {
        width: 100%;
        max-width: 700px;
        input {
            width: 100%;
            display: block;
            background-color: #4c2885;
            border: none;
            border-radius: 10px;
            color: #fff;
            padding: 1rem;
            margin-bottom: 2rem;
            font-family: inherit;
            font-size: 1rem;
            box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05), 0 15px 40px rgba(0, 0, 0, 0.1);
            outline: none;

            &::placeholder {
                color: #bbb;
            }
        }
    }

    .card {
        max-width: 800px;
        background-color: #4c2885;
        border-radius: 20px;
        box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05), 0 15px 40px rgba(0, 0, 0, 0.1);
        display: flex;
        padding: 3rem;
        margin: 0 1.5rem;
    }

    .avatar {
        flex-shrink: 0;
        border-radius: 50%;
        border: 10px solid #2a2a72;
        height: 150px;
        width: 150px;
    }

    .user-info {
        color: #eee;
        margin-left: 2rem;

        h2 {
            margin-top: 0;
            margin-bottom: 10px;
        }

        ul {
            list-style-type: none;
            display: flex;
            justify-content: space-between;
            padding: 0;
            width: 500px;
            margin-top: 20px;

            li {
                display: flex;
                align-items: center;
                strong {
                    font-size: 0.9rem;
                    margin-left: 0.5rem;
                }
            }
        }
    }

    .repo {
        text-decoration: none;
        color: #fff;
        background-color: #212a72;
        font-size: 0.7rem;
        padding: 0.25rem 0.5rem;
        margin-right: 0.5rem;
        margin-bottom: 0.5rem;
        display: inline-block;
    }

    @media (max-width: 500px) {
        .card {
            flex-direction: column;
            align-items: center;
        }

        .user-form {
            max-width: 400px;
        }
    }
}
</style>
