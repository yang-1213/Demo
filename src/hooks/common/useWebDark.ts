import { useDark, useToggle } from "@vueuse/core"

/**
 * @name 切换黑暗模式
 */
export default function useWebDark() {
    const isDark = useDark({
        selector: "html",
        valueDark: "dark",
        valueLight: "light",
    })
    const toggleDark = useToggle(isDark)
    return {
        isDark,
        toggleDark,
    }
}
