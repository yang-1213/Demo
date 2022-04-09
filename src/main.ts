import { createApp, Plugin } from "vue"
import App from "./App.vue"

import "./assets/css/common.less"
import "uno.css" // uno.css

const app = createApp(App)

/** 加载模块on */
const modules = import.meta.globEager("./modules/*.ts")
Object.values(modules).forEach(module => {
    app.use(module as Plugin)
})
/** 加载模块off */

app.mount("#app")
