<template>
    <div>
      
      <el-descriptions class="margin-top"   :size="size" border>

    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-user"></i>
        管理员名称
      </template>
      ADMIN
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-mobile-phone"></i>
        手机号
      </template>
      18100000000
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-location-outline"></i>
        居住地
      </template>
      东华大学
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-tickets"></i>
        备注
      </template>
      <el-tag size="small">学校</el-tag>
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-office-building"></i>
        职责
      </template>
      负责整个系统的资源的增删改查，和监控。
    </el-descriptions-item>
  </el-descriptions>
  <el-card shadow="hover" style="width: 20%;">
        <div slot="header" class="clearfix">
          <span>文嘉《明日歌》</span>
          <el-button style="float: right; padding: 3px 0" type="text" @click="clickFn">暂停</el-button>
        </div>
        <div style="font-size: 18px;text-align: center; margin-top: 35px;">
          明日复明日
        </div>
        <div style="font-size: 18px;text-align: center;">明日何其多</div>
        <div style="font-size: 18px;text-align: center;">我生待明日</div>
        <div style="font-size: 18px;text-align: center;">万事成蹉跎</div>
        <div style="margin-top: 35px;"></div>
        <el-statistic
          ref="statistic"
          @finish="hilarity"
          format="HH:mm:ss"
          :value="deadline4"
          title="距离明日："
          time-indices
        >
        </el-statistic>
      </el-card>
    </div>
    
</template>
  
  <script>
  export default {
    data() {
      return {
        deadline4: Date.now() + (new Date().setHours(23, 59, 59) - Date.now()),
        stop: true,
      };
    },
    methods: {
      hilarity() {
        this.$notify({
          title: "提示",
          message: "时间已到",
          duration: 0,
        });
      },
      clickFn() {
        this.$refs.statistic.suspend(this.stop);
        this.stop = !this.stop;
      },
    },
  };
  </script>
  