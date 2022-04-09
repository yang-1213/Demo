/**
 * @name viteUnocss
 * @description 原子化css插件
 */

//  https://github.com/unocss/unocss
import viteUnocss from "unocss/vite"
import presetWind from "@unocss/preset-wind"
import presetAttributify from "@unocss/preset-attributify"

function main() {
    /** 查看生成的css=> http://localhost:3000/__unocss */
    return viteUnocss({
        presets: [presetWind(), presetAttributify()],
    })
}

export default main
