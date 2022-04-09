/**
 * @name viteVue
 * @description vite的Vue插件
 */

import viteVue from "@vitejs/plugin-vue"

function main() {
    return viteVue({
        reactivityTransform: true, // 开启vuex的reactivityTransform
    })
}

export default main
