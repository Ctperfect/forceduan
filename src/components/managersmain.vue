<template>
  <el-container>
    <el-header class="custom-header fixed-header">
      <el-divider content-position="center" class="custom-divider">后台管理系统</el-divider>
    </el-header>
    <el-container>
      <el-aside width="190px" class="fixed-aside">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router='true'
          collapse-transition='true'>
          <!-- 导航栏内容 -->
          <el-menu-item index="/managersmain/admincenter" class ="el-menu-item">
            <i class="el-icon-menu"></i>
            <span slot="title">个人中心</span>
          </el-menu-item>
          <el-menu-item index="/managersmain/usermanager"> 
            <i class="el-icon-document"></i>
            <span slot="title">用户管理中心</span>
          </el-menu-item>
          <el-menu-item index="/managersmain/coursecenter">
            <i class="el-icon-document"></i>
            <span slot="title">课程中心</span>
          </el-menu-item>
          <el-menu-item index="/managersmain/chapterscenter">
            <i class="el-icon-document"></i>
            <span slot="title">章节中心</span>
          </el-menu-item>
          <el-menu-item index="/managersmain/coursetaskscenter">
            <i class="el-icon-document"></i>
            <span slot="title">课程任务中心</span>
          </el-menu-item>
          <el-menu-item index="/managersmain/learningrecords">
            <i class="el-icon-document"></i>
            <span slot="title">用户学习记录中心</span>
          </el-menu-item>
          <el-menu-item index="/managersmain/userscorescenter">
            <i class="el-icon-document"></i>
            <span slot="title">用户成绩中心</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main class="sys-main">
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  name: 'managersmain',
  methods: {
    goBack() {
      console.log('go back');
    }
  }
}
</script>

<style scoped>
.fixed-header {
  position: fixed;
  top: 0px;
  left: 0;
  right: 0;
  background-color: #545c64;
  z-index: 1000; /* 确保标题栏位于页面顶部 */
}

.fixed-aside {
  position: fixed;
  top: 70px;
  left: 0;
  bottom: 0;
  width: 200px;
  z-index: 1000; /* 确保导航栏位于页面左侧 */
  background-color: #545c64; /* 设置导航栏背景色 */
  /* 其他样式可以根据需要自行添加 */
}

.sys-main {
  padding-top: 64px; /* 确保内容区域不被标题栏和导航栏覆盖 */
  padding-left: 190px; /* 确保内容区域不被导航栏覆盖 */
}
</style>
