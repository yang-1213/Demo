new Vue({
    el: "#app",
    data: {
        num: 300, // 雪花个数
        snowList: [
            // {
            //     style: {}
            // }
        ]
    },
    created() {
        this.init();
    },
    methods: {
        init() {
            function random_range($min, $max) {
                let random = Math.random();
                // 随机偏移
                let random_range =
                    $min + Math.floor(random * ($max - $min + 1));
                return random_range;
            }

            // style 样式模板
            let keyFrameStr = "";

            // 1.首先循环200个雪花
            for (let index = 0; index < this.num; index++) {
                let i = index + 1;
                // 单位  vw
                let randomX = Math.random() * 1000000 * 0.0001; //vw;
                let randomOffset = random_range(-100000, 100000) * 0.0001; //vw;

                let randomXEnd = randomX + randomOffset;

                let randomXEndYoyo = randomX + randomOffset / 2;
                let randomYoyoTime = random_range(30000, 80000) / 100000;

                let randomYoyoY = randomYoyoTime * 100; // vh;
                let randomScale = Math.random() * 10000 * 0.0001;
                let fallDuration = random_range(10, 30) * 1; //s ;
                let fallDelay = Math.random() * 30 * -1; // s

                // 2. 将随机生成的元素style样式加入到数据中
                this.snowList.push({
                    style: {
                        opacity: `${Math.random() * 10000 * 0.0001}`,
                        transform: `translate(${randomX}vw, -10px) scale(${randomScale})`,
                        animation: `fall-${i} ${fallDuration}s ${fallDelay}s linear infinite`
                    }
                });

                // 3. 每一个雪花的关键帧动画
                keyFrameStr += `@keyframes fall-${i} {
                    ${randomYoyoTime * 100}% {
                        transform: translate(${randomXEnd}vw, ${randomYoyoY}vh) scale(${randomScale});
                    }

                    to {
                        transform: translate(${randomXEndYoyo}vw, 100vh) scale(${randomScale});
                    }
                }`;
            }

            // 过滤html标签 正则
            let filterHTMLTag = function(msg) {
                var msg = msg.replace(/<\/?[^>]*>/g, ""); //去除HTML Tag
                msg = msg.replace(/[|]*\n/, ""); //去除行尾空格
                msg = msg.replace(/&nbsp;/gi, ""); //去掉nbsp
                return msg;
            };

            // 添加到head标签
            var styleEl = document.createElement("style");
            // FIXME: innerText  好像会加入  <br> 标签  下面2个不会
            styleEl.textContent = keyFrameStr;
            // styleEl.innerHTML = filterHTMLTag(keyFrameStr);
            document.querySelector("head").appendChild(styleEl);
        }
    }
});
