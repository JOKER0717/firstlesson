<template>
  <div id="app">
    <Nav></Nav>
    <router-view/>
  </div>
</template> 
<script>
import Nav from "@/components/Nav";
export default {
  components: {
    Nav
  }
};
</script>
<style lang="less">
// 根组件的样式会被共用
* {
  margin: 0;
  padding: 0;
}
html,
body {
  height: 100%;
}
a {
  text-decoration: none;
  color: #000000;
}
.container {
  position: fixed;
  width: 100%;
  height: 100%;
  bottom: 56px;
  overflow-y: auto;
}
</style>
