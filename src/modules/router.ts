import { createRouter, createWebHistory } from "vue-router"
import routes from "~pages" // vite-plugin-pages 生成的路由
import * as config from "@config/index" // 配置文件

import NProgress from "nprogress"
import "nprogress/nprogress.css"
NProgress.configure({ showSpinner: false })

const router = createRouter({
    history: createWebHistory(),
    scrollBehavior(to, from, savedPosition) {
        /** 延迟滚动 例:过渡结束后再滚动 */
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (savedPosition) return resolve(savedPosition)
                resolve({ top: 0 })
            }, 500)
        })
    },
    routes,
})

router.beforeEach(to => {
    document.title = (to.meta.title ?? config.title) as string
    NProgress.start()
})

router.afterEach(to => {
    NProgress.done()
})

console.log(`[ 路由配置 ]`, routes)

export const install = (app: any) => {
    app.use(router)
}
