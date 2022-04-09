import { createHead } from "@vueuse/head"

export const install = (app: any) => {
    app.use(createHead())
}
