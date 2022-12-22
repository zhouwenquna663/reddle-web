<template>
  <div class="index">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <NavMenu/>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import NavMenu from './navMenu.vue'

export default {
  name: 'HelloWorld',
  components: {NavMenu},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {}
}
</script>
<style>
.el-header, .el-footer {
  background-color: #ffffff;
  border: solid 1px #e7e7e7;
  border-radius: 4px;
  margin-bottom: 10px;
  color: #333;
  font-size: 18px;
  text-align: center;
  line-height: 88px;
}

.el-aside {
  background-color: #f1f1f8;
  color: #333;
  padding: 16px;
  min-height: 500px;
  width: 200px;
  border: solid 1px #e7e7e7;
  border-radius: 4px;
  margin-right: 10px;
}

.el-main {
  border-radius: 4px;
  background-color: #f5f7fa;
  border: solid 1px #e7e7e7;
  border-radius: 4px;
  padding: 16px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
