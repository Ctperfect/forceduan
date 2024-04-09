<template>
  <div class="login-container">
    <h2 class="title">学海茫茫，扬帆远航</h2>
    <h1 class="title2">欢迎使用数据学航系统</h1>
    <div class="form-container">
      <el-input v-model="username" placeholder="请输入用户名" clearable class="input-field"></el-input>
      <el-input v-model="password" placeholder="请输入密码" show-password class="input-field"></el-input>
      <el-button type="primary" @click="login" class="login-button">登录</el-button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: "denglu",
  data() {
    return {
      username: '',
      password: ''
    };
  },
  created(){},
  methods: {
    
    login() {
      axios.post('/api/users/login', null, {
        params: {
          username: this.username,
          password: this.password
        }
      })
      .then(response => {
        if (response.status === 200) {
          if (response.data === '管理员登录成功') {
            this.$message.success('欢迎管理员登录');
            
            this.$router.push("/managersmain").catch(err => err)
            this.$router.replace("/managersmain").catch(err => err)
          } else if (response.data === '用户登录成功') {
            this.$message.success('欢迎用户登录');
          } else {
            this.$message.error('登录失败，请检查用户名和密码');
          }
        } else {
          this.$message.error('登录失败，请检查用户名和密码');
        }
      })
      .catch(error => {
        console.error('登录失败:', error);
        this.$message.error('登录失败，请检查用户名和密码');
      });
    }
  },
  
};
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 110vh;
  background-image: url('../assets/longin.JPG'); 
  background-size: cover;
  background-position: center;
}

.title {
  color: white;
  font-size: 60px;
}

.title2 {
  color: white;
  font-size: 30px;
}

.form-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.7);
}

.input-field {
  width: 300px;
  margin-bottom: 20px;
}

.login-button {
  width: 300px;
  z-index: 1;
}
</style>
