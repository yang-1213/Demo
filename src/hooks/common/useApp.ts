import { useRoute, useRouter } from "vue-router"
import { useStore } from "@store/index"
import { watch } from "vue"
import dayjs from "dayjs"
import "dayjs/locale/zh-cn" // 本地语言

/**
 * @name 启动函数
 */
export default function useApp() {
    dayjs.locale("zh-cn")
    const route = useRoute()
    const router = useRouter()
    const store = useStore()

    // 监听store
    store.$subscribe((mutation, state) => {
        console.log("[ store变化 ]", mutation)
        window.localStorage.setItem("store", JSON.stringify(state))
    })

    // watch(
    //     store.$state,
    //     state => {
    //         window.localStorage.setItem("store", JSON.stringify(state))
    //     },
    //     { deep: true }
    // )

    return {
        store,
        route,
        router,
        dayjs,
    }
}
