/** 常用方法函数 */

/** 随机颜色 */
export function randomColor() {
    return "#" + ("00000" + ((Math.random() * 0x1000000) << 0).toString(16)).slice(-6)
}

/**
 * 随机数
 * @param {number} [min=0] 最小数
 * @param {number} [max=100] 最大数
 * @returns {number}
 */
export function randomNumber(min = 0, max = 100) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

/** 图片加载 */
export function loadImage(url: string) {
    return new Promise((resolve, reject) => {
        const image = new Image()
        image.src = url
        image.onload = () => {
            resolve(image)
        }
        image.onerror = () => {
            reject(new Error(`图片加载失败：${url}`))
        }
    })
}
