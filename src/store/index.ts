// https://pinia.vuejs.org/
import { defineStore } from "pinia" 

export interface Store {
    count: number | string //数量
}

export const useStore = defineStore("store", {
    state(): Store {
        const initState: Store = {
            count: 0,
        }
        const Storage = window.localStorage.getItem("store") as string
        const AppState = JSON.parse(Storage) || initState
        return AppState
    },
})

console.log("[ store ]", useStore().$state)
