<template>
    <el-container>
        <common-aside></common-aside>
        <el-container>
            <el-header>
            <common-header></common-header>
            </el-header>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
  </el-container>
</template>

<script>
import CommonAside from '../../components/manage/CommonAside'
import CommonHeader from '../../components/manage/CommonHeader'

    export default {
      components: { CommonAside,CommonHeader },
      data() {
          return {
              editableTabsValue:'1',
              editableTabs:[
                  {
                      name:'1',
                      title:'个人中心'
                  },
                  {
                      name:'2',
                      title:'文章管理'
                  }
              ]
          }
      },  
    }
</script>
<style scoped>
.el-header{
   padding:0px 0px;
   border-bottom: 1px solid #e6e6e6;
 }
</style>
