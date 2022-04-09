import { createPinia } from "pinia"

export const install = (app: any) => {
    const store = createPinia()
    app.use(store)
}
