<template>
  <el-col class="left-nav" :span="4">
    <el-menu
      :default-active="$route.path"
      class="left-nav-menu"
      :router="true"
    >
      <side-bar></side-bar>
    </el-menu>
  </el-col>
</template>

<script>
  import SideBar from './components/sideBar';

  export default {
    name: 'LeftNav',
    components: { SideBar },
    data () {
      return {
        defaultActive: '/home'
      };
    },
  };
</script>

<style lang="scss" scoped>
  .left-nav {
    min-width: 260px;
    &-menu {
      height: 100vh;
      overflow: auto;
    }
  }
</style>
