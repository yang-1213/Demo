/**
 * @name viteInspect
 * @description vite调试插件
 */

// https://github.com/antfu/vite-plugin-inspect
// Visit http://localhost:3000/__inspect/ to see the inspector
import viteInspect from "vite-plugin-inspect"

function main() {
    return viteInspect()
}

export default main
