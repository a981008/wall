<template>
  <div class="app">
    <NavBar />
    <div class="content-wrapper">
      <router-view />
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  components: { NavBar }
}
</script>

<style scoped>
.app {
  max-width: 900px;
  margin: 0 auto;
  /* 其他样式 */
}

.app > :first-child {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;        /* 宽度撑满.app */
  max-width: 900px;   /* 不超过容器最大宽度 */
  height: 70px;
  background-color: #fff5f7;
  border-bottom: 1px solid rgba(0,0,0,0.05);
  z-index: 1000;
  margin: 0;
  padding: 0 20px;    /* 这里加左右内边距，调整距离 */
  box-sizing: border-box;
}

.content-wrapper {
  padding-top: 50px;  /* 预留出导航栏高度 */
}
</style>
