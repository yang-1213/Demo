
<div id="main">
<ul>
  <li v-for="i in 10">{{ i }}</li>
</ul>
<div class="loading-screen"></div>
</div>

<script>
//   new Vue({
//     el: '#css-demo',
//     data: { msg: 'Vue' }
//   })
</script>



<vuep template="#example" :options="{theme:'material-palenight'}"></vuep>

<script v-pre type="text/x-template" id="example">
<template>
    <div class="loading-screen"></div>
</template>
<style>
* {
  margin: 0;
  padding: 0;
}
.loading-screen {
  box-sizing: border-box;
}
.loading-screen:empty {
  position: relative;
  width: 98vw;
  height: 100vh;
  overflow: hidden;
  background-color: #fff;
}
.loading-screen:empty::before {
  content: "";
  position: absolute;
  z-index: 1;
  left: 2vw;
  top: 2vh;
  width: 10vh;
  height: 10vh;
  background-color: #dee0e2;
  box-shadow: 0 0 0 1.2vh #fff;
}
.loading-screen:empty::after {
  content: "";
  position: absolute;
  left: 2vw;
  top: 2vh;
  width: 86%;
  height: 2vh;
  background-color: #dee0e2;
  border-radius: 2vh;
  box-shadow: 2vh 4vh 0 0 #dee0e2, 0 4vh 0 0 #dee0e2, 4vh 8vh 0 0 #dee0e2, 0 8vh 0 0 #dee0e2, 0vh 12vh 0 0 #dee0e2, 0 12vh 0 0 #dee0e2, 2vh 16vh 0 0 #dee0e2, 0 16vh 0 0 #dee0e2, 4vh 20vh 0 0 #dee0e2, 0 20vh 0 0 #dee0e2, 0vh 24vh 0 0 #dee0e2, 0 24vh 0 0 #dee0e2, 2vh 28vh 0 0 #dee0e2, 0 28vh 0 0 #dee0e2, 4vh 32vh 0 0 #dee0e2, 0 32vh 0 0 #dee0e2, 0vh 36vh 0 0 #dee0e2, 0 36vh 0 0 #dee0e2, 2vh 40vh 0 0 #dee0e2, 0 40vh 0 0 #dee0e2, 4vh 44vh 0 0 #dee0e2, 0 44vh 0 0 #dee0e2, 0vh 48vh 0 0 #dee0e2, 0 48vh 0 0 #dee0e2, 2vh 52vh 0 0 #dee0e2, 0 52vh 0 0 #dee0e2, 4vh 56vh 0 0 #dee0e2, 0 56vh 0 0 #dee0e2, 0vh 60vh 0 0 #dee0e2, 0 60vh 0 0 #dee0e2, 2vh 64vh 0 0 #dee0e2, 0 64vh 0 0 #dee0e2, 4vh 68vh 0 0 #dee0e2, 0 68vh 0 0 #dee0e2, 0vh 72vh 0 0 #dee0e2, 0 72vh 0 0 #dee0e2, 2vh 76vh 0 0 #dee0e2, 0 76vh 0 0 #dee0e2, 4vh 80vh 0 0 #dee0e2, 0 80vh 0 0 #dee0e2;
}
</style>
<script>
  module.exports = {
    data: function () {
      return { name: 'Vue' }
    }
  }
</script>
</script>


```less
* {
  margin: 0;
  padding: 0;
}

// 循环生成背景颜色
.box-shadow(@n, @i: 1) when (@i =< @n) {
    box-shadow+: mod(@i,3)*@height (@i*(@height+@interval)) 0 0 @background;
    box-shadow+: 0 (@i*(@height+@interval)) 0 0 @background;
    .box-shadow(@n, (@i + 1));
}

@width:50vw; //宽度
@height:2vh; //高度
@interval:@height; //间隔
@background: rgb(222, 224, 226); // 背景颜色
.loading-screen {
  box-sizing: border-box;
  &:empty {
    position: relative;
    width: 98vw;
    height: 100vh;
    overflow: hidden;
    background-color: #fff;

    &::before{
      content: "";
      position: absolute;
      z-index: 1;
      left: 2vw;
      top: 2vh;
      width: @height*5;
      height:@height*5;
      background-color: @background;
      box-shadow: 0 0 0 @height*0.6 #fff;
    }
    &::after{
      content: "";
      position: absolute;
      left: 2vw;
      top: 2vh;
      width: 86%;
      height: @height;
      background-color: @background;
      border-radius: @interval;
      // 循环20次
      .box-shadow(20)
    }
  }
}
```