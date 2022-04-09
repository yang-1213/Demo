/**
 * @name vitePages
 * @description 动态生成路由
 */

// https://github.com/hannoeru/vite-plugin-pages
import vitePages from "vite-plugin-pages"

function main() {
    return vitePages({
        dirs: ["src/pages"], // 页面目录
        extensions: ["vue"], // 支持的文件后缀
        exclude: ["**/components/*.vue"], // 排除的目录
        importMode: "async", // 导入方式 异步导入
    })
}

export default main
