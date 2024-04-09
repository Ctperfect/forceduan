<template>
    <div>
      <el-button type="primary" style="margin-bottom: 15px;" @click="showAddUserDialog">添加用户</el-button>
      <el-table :data="userData" style="width: 100%">
        <el-table-column prop="userId" label="用户ID"></el-table-column>
        <el-table-column prop="username" label="用户名"></el-table-column>
        <el-table-column prop="registrationTime" label="注册时间">
          <template slot-scope="scope">
            {{ formatDate(scope.row.registrationTime) }}
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-edit" size="mini" @click="editUser(scope.row)">编辑</el-button>
            <el-button type="danger" icon="el-icon-delete" size="mini" @click="deleteUser(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-dialog :visible.sync="addUserDialogVisible" title="添加用户">
        <el-form ref="addUserForm" :model="newUser">
          <el-form-item label="用户名" :rules="[{ required: true, message: '请输入用户名', trigger: 'blur' }]">
            <el-input v-model="newUser.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" :rules="[{ required: true, message: '请输入密码', trigger: 'blur' }]">
            <el-input type="password" v-model="newUser.password"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="addUserDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="addUser">确定</el-button>
        </span>
      </el-dialog>
      <el-dialog :visible.sync="editUserDialogVisible" title="编辑用户">
        <el-form ref="editUserForm" :model="editedUser">
          <el-form-item label="用户名">
            <el-input v-model="editedUser.username" :readonly="true"></el-input>
          </el-form-item>
          <el-form-item label="新密码" :rules="[{ required: true, message: '请输入新密码', trigger: 'blur' }]">
            <el-input type="password" v-model="editedUser.newPassword"></el-input>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="editUserDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="saveEditedUser">保存</el-button>
        </span>
      </el-dialog>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        userData: [],
        addUserDialogVisible: false,
        editUserDialogVisible: false,
        newUser: {
            userId: '',
          username: '',
          password: ''
        },
        editedUser: {
        userId: '', // 添加userId属性
        username: '',
        newPassword: ''
        }

      };
    },
    mounted() {
      this.fetchUserData();
    },
    methods: {
      editUser(user) {
      // 设置编辑用户对话框中的数据
      this.editedUser.userId = user.userId; // 确保获取用户的 ID
      this.editedUser.username = user.username;
      this.editUserDialogVisible = true;
    },
      fetchUserData() {
        axios.get('/api/users/all')
          .then(response => {
            this.userData = response.data;
          })
          .catch(error => {
            console.error('Error fetching user data: ', error);
          });
      },
      formatDate(date) {
        return new Date(date).toLocaleString();
      },
      showAddUserDialog() {
        this.addUserDialogVisible = true;
      },
      addUser() {
        axios.post('/api/users/create-user', this.newUser)
          .then(response => {
            this.addUserDialogVisible = false;
            this.fetchUserData();
            this.$message.success('用户添加成功');
            this.newUser = {
              username: '',
              password: ''
            };
          })
          .catch(error => {
            console.error('Error adding user: ', error);
            this.$message.error('用户添加失败');
          });
      },
      editUser(user) {
        this.editedUser.username = user.username;
        this.editUserDialogVisible = true;
      },
      saveEditedUser() {

  axios.put(`/api/users/update`, {
      userId: this.editedUser.userId, // 将用户ID包含在请求体中
      username: this.editedUser.username,
      password: this.editedUser.newPassword
    })
    .then(response => {
      this.editUserDialogVisible = false;
      this.fetchUserData();
      this.$message.success('用户信息更新成功');
      this.editedUser = {
        userId: '', // 重置用户ID
        username: '',
        newPassword: ''
      };
    })
    .catch(error => {
      console.error('Error updating user: ', error);
      this.$message.error('用户信息更新失败');
    });
},
deleteUser(user) {
    axios.delete(`/api/users/${user.userId}`)
      .then(() => {
        this.fetchUserData();
        this.$message.success('用户删除成功');
      })
      .catch(error => {
        console.error('Error deleting user: ', error);
        this.$message.error('用户删除失败');
      });
  }

    }
  };
  </script>
  