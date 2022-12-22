<template>
 <el-aside width="200px">
   <el-menu
     default-active="1"
     class="el-menu-vertical-demo" router>
     <el-menu-item index="/index">
       <i class="el-icon-setting"></i>
       <span slot="title">视频下载</span>
     </el-menu-item>
     <el-menu-item index="/test">
       <i class="el-icon-setting"></i>
       <span slot="title">test</span>
     </el-menu-item>
   </el-menu>
 </el-aside>
</template>

<script>
export default {
  name: 'navMenu'
}
</script>

<style scoped>

</style>
