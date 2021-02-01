<template>
    <div class="headers">
      <div class="headTitle">
          <span>{{title != null ? title : 'Easy-Blog'}}</span>
                   </div>
                   <div class="userInfo">
                    <el-dropdown :hide-on-click="false">
                        <span class="el-dropdown-link">
                            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                        </span>
                        <template #dropdown>
                            <el-dropdown-menu>
                            <el-dropdown-item><i class="el-icon-s-fold"></i>退出</el-dropdown-item>
                            </el-dropdown-menu>
                        </template>
                        </el-dropdown>
      </div>    
    </div>         
</template>

<script>
    export default {
        data(){
            return {
                title:'Easy-Blog'
            }
        }
    }
</script>

<style scoped>
 .userInfo{
    float: right;
    padding: 10px 0px;
    padding-right: 10px;
 }
 .headTitle{
    width:200px;
    height: 100%;
    padding: 0px 20px;
    font-size: 24px;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    float: left;
    line-height: 60px;
    color: #409EFF;
    }
</style>