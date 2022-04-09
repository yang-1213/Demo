/**
 * @name 自定义vite插件
 * @description 页面代码热更新刷新页面
 */
export default function myVitePlugin() {
    return {
        name: "vite-my-plugin",
        apply: "serve", // 或 'build'
        handleHotUpdate({ file, server }) {
            if (file.includes("/src/pages/")) {
                server.ws.send({
                    type: "custom",
                    event: "special-update",
                    data: {},
                })
            }
        },
    }
}
