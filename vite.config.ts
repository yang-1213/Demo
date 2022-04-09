import { UserConfig, ConfigEnv } from "vite"
import { resolve } from "path"
import Plugin from "./config/vitePlugins/index"

// https://vitejs.dev/config/
export default (config: ConfigEnv): UserConfig => {
    console.log("[ config ] => ", config)
    const isBuild = config.command === "build"

    return {
        base: "/", // 公共路径
        publicDir: "public", // 静态资源目录，将会复制到 dist 目录
        envPrefix: "V_", // 环境变量前缀

        resolve: {
            alias: {
                "@": resolve(__dirname, "src"),
                "@hooks": resolve(__dirname, "src/hooks"),
                "@config": resolve(__dirname, "config"), // 配置文件
                "@components": resolve(__dirname, "src/components"), // 组件
                "@pages": resolve(__dirname, "src/pages"), // 页面
                "@store": resolve(__dirname, "src/store"), // 存储
                "@types": resolve(__dirname, "src/types"), // 类型
                "@utils": resolve(__dirname, "src/utils"), // 工具
            },
        },

        // 插件
        plugins: Plugin(isBuild),

        // css
        css: {
            preprocessorOptions: {
                less: {
                    // less 变量覆盖 优先级最高
                    modifyVars: {
                        // "primary-color": "#00a4ff",
                    },
                    javascriptEnabled: true,
                    // 这样就能全局使用 src/assets/css/base.less 定义的 变量
                    additionalData: `@import "@/assets/css/base.less";`,
                },
            },
        },

        // server
        server: {
            // 服务配置
            hmr: true, // 开启热更新
            port: 3000, // 类型： number 指定服务器端口;
            open: false, // 类型： boolean | string在服务器启动时自动在浏览器中打开应用程序；
            cors: true, // 类型： boolean | CorsOptions 为开发服务器配置 CORS。默认启用并允许任何源
            host: "0.0.0.0", // IP配置，支持从IP启动
        },

        // build
        build: {
            target: "es2015",
            minify: "terser",
            assetsInlineLimit: 4096, //小于此阈值的导入或引用资源将内联为 base64 编码
            terserOptions: {
                compress: {
                    drop_console: isBuild, // 删除console
                    drop_debugger: isBuild, // 删除debugger
                },
            },
            brotliSize: false, // 启用/禁用 brotli 压缩大小报告。
        },
    }
}
