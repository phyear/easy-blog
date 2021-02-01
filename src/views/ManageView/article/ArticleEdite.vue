<template>
    <div>
        <el-form :model="articleForm" label-position="right" :rules="rules" ref="articleForm" label-width="50px"  >
            <el-form-item label="标题" prop="title">
                <el-input v-model="articleForm.title" class="titleStyle"></el-input>
                <el-button type="primary" @click="submitForm('articleForm')">提交</el-button>
            </el-form-item>
            <v-md-editor v-model="articleForm.content" height="500px"
                :disabled-menus="[]"
                :include-level="[2,3,4]"></v-md-editor>
         </el-form>
      
    </div>
</template>

<script>
    export default {
        data() {
            return {
                articleForm:{
                    title: '',
                    content: '',
                    type: 'md'
                },
                rules: {
                    title: [{required: true, message: '标题不能为空', trigger: 'blur'},
                    { min: 3,  message: '长度在 3 到 5 个字符', trigger: 'blur' }],
                }
            }
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                if (valid) {
                    let _this = this;
                    let api = '/api/v1/article'
                    _this.articleForm.type = 'md'
                    this.axios.post(api, _this.articleForm)
                    .then(function (response) {
                        console.log(response);
                        _this.$message({
                        message:'保存成功',
                        type: 'success'
                        });
                        _this.$router.push('articleManage')
                    })
                    .catch(function (error) {
                        console.log(error)
                        _this.$message({
                        message:'创建失败',
                        type: 'error'
                        });
                    });
                } else {
                    this.$message({
                        message:'校验不通过',
                        type: 'warning'
                    });
                    return false;
                }
        });
        }
        },
    }
</script>

<style  scoped>
  .titleStyle{
      width: 70%;
      margin-right: 20px;
  }
</style>