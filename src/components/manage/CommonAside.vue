<template>
    <el-aside :style="isCollapse ? 'width:65px;height:100%' : 'width:200px;height:100%'" >
         <div style="border-right: 1px solid #e6e6e6;">
             <el-button type="text" @click="changeMenuState" style="width:65px;height:56px;font-size:20px"><i :class="isCollapse ? 'el-icon-s-unfold' :'el-icon-s-fold'"></i></el-button>
         </div>
         <el-menu
            default-active="/admin/first"
            :collapse-transition="transition"
            class="el-menu-vertical-demo"
            :collapse="isCollapse" router>
            <el-menu-item index="/admin/first">
                <i class="el-icon-s-home"></i>
                <template #title>首页</template>
            </el-menu-item>
            <el-submenu index="1">
                <template #title>
                    <i class="el-icon-user-solid"></i>
                    <span>个人中心</span>
                </template>
                <el-menu-item index="/admin/articleManage">
                        <template #title>
                            <i class="el-icon-s-custom"></i>
                            个人信息
                        </template>
                    </el-menu-item>
                    <el-menu-item index="/admin/articleManage">
                        <template #title>
                            <i class="el-icon-postcard"></i>
                            信息维护
                        </template>
                    </el-menu-item>
            </el-submenu>
            <el-submenu index="/admin">
                <template #title>
                     <i class="el-icon-reading"></i>
                    <span>文章管理</span>
                </template>
                <el-menu-item index="/admin/articleManage">
                    <template #title>
                        <i class="el-icon-guide"></i>
                        文章中心
                    </template>
                </el-menu-item>
                <el-menu-item index="/admin/articleEditor">
                    <template #title>
                        <i class="el-icon-price-tag"></i>
                        创作中心
                    </template>
                </el-menu-item>
            </el-submenu>
        </el-menu>  
    </el-aside>
     
</template>

<script>
    export default {
        data() {
            return {
                transition:false,
                isCollapse: false
            };
        },
        methods: {
            changeMenuState(){
                this.isCollapse = !this.isCollapse
            }
        }  
    }
</script>

<style scoped>
.el-border-style{
    border-right: 1px solid #e6e6e6;
}
.el-container {
    height: 100%;
}
 .el-menu-vertical-demo{
     height: 566px;
 }
</style>