<iframe
     src="https://codesandbox.io/embed/css-demo-kvop9?fontsize=14&hidenavigation=1&initialpath=%2Ftools%2Floading&module=%2Fpages%2Ftools%2Floading.vue&theme=dark"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="css-demo"
     allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
     sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
></iframe>

```html
<div class="loading">
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
</div>
```

```less
// 弹性盒子
.flex() {
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
}

.loading {
  .flex();
  // 颜色
  @colors: #7ef9ff, #89cff0, #4682b4, #0f52ba, #000080;
  .dot {
    position: relative;
    margin: 0.8em;
    width: 2em;
    height: 2em;
    border-radius: 50%;
    animation: move 2s infinite ease-in-out;
    transform-origin: center;

    &::before {
      content: "";
      position: absolute;
      left: 50%;
      top: 50%;
      margin: -50% 0 0 -50%;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      background-color: inherit;
      animation: wave 2s infinite ease-out;
    }

    // 循环
    .loop(@counter) when (@counter > 0) {
      &:nth-child(@{counter}) {
        // extract => less函数
        background: extract(@colors, @counter);
        animation-delay: @counter * 0.2s;
        &::before {
          animation-delay: @counter * 0.2s;
        }
      }
      .loop((@counter - 1)); // 递归调用自身
    }

    .loop(5); // 调用循环
  }
}

// 移动
@keyframes move {
  0%,
  50%,
  100% {
    transform: translateY(0);
  }
  20% {
    transform: translateY(-2em);
  }
  80% {
    transform: translateY(2em);
  }
}

@keyframes wave {
  50%,
  75% {
    transform: scale(2.5);
  }

  80%,
  100% {
    opacity: 0;
  }
}
```