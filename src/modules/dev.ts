export const install = (app: any) => {
    if (import.meta.env.DEV) {
        app.mixin({
            created() {
                if (import.meta.hot) {
                    import.meta.hot.on("special-update", data => {
                        location.reload()
                    })
                }
            },
        })
    }
}
