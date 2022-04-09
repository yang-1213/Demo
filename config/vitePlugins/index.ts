import viteComponents from "./modules/unplugin-vue-components"
import viteInspect from "./modules/vite-plugin-inspect"
import vitePages from "./modules/vite-plugin-pages"
import viteVue from "./modules/vite-plugin-vue"
import viteUnocss from "./modules/vite-unocss"
import myVitePlugin from "./my-vite-plugin"

/**
 * @name 生成vite插件数组
 * @param {boolean} isBuild 是否是打包模式
 * @returns Array<any>
 */
const main = function (isBuild: boolean = false) {
    const plugins: Array<any> = []

    plugins.push(viteVue()) // Vue

    plugins.push(viteComponents()) // 组件自动化导入

    plugins.push(vitePages()) // 页面自动化导入

    plugins.push(viteUnocss()) // 原子化css

    // 开发模式
    if (!isBuild) {
        plugins.push(viteInspect()) // vite调试插件
        plugins.push(myVitePlugin()) // 自定义插件
    }
    return plugins
}

export default main
