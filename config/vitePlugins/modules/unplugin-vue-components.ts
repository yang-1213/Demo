/**
 * @name ViteComponents
 * @description 按需加载，自动引入组件
 */

// https://github.com/antfu/unplugin-vue-components
import ViteComponents from "unplugin-vue-components/vite"
import { NaiveUiResolver } from "unplugin-vue-components/resolvers"

function main() {
    return ViteComponents({
        dirs: ["src/components"],
        resolvers: [NaiveUiResolver()],
        extensions: ["vue"],
        deep: true,
        dts: false, //是否生成 components.d.ts
    })
}

export default main
