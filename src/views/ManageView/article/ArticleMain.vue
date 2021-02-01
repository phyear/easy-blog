<template>
    <div>
      <el-table
       :data="tableData"
        style="width: 100%">
        <el-table-column
          label="编号"
          width="180">
          <template #default="scope">
            <span style="margin-left: 10px">{{ scope.row.id }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="标题"
          width="180">
          <template #default="scope">
            <span style="margin-left: 10px">{{ scope.row.title }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="创建时间"
          width="180">
          <template #default="scope">
            <span style="margin-left: 10px">{{ scope.row.createdDate }}</span>
          </template>
        </el-table-column>
        <el-table-column
          label="最后更新时间"
          width="180">
          <template #default="scope">
            <span style="margin-left: 10px">{{ scope.row.lastUpdateDate }}</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template #default="scope">
            <el-button
              size="mini"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
  </el-table>
    <el-pagination
    background
    layout="prev, pager, next"
    :page-size = "size"
    :page-count = "pages"
    :total="total" @size-change = "pageChange()"
    @current-change = "currentChange">
  </el-pagination>
    </div>
</template>

<script>
    export default {
         data() {
           return {
             tableData:[],
             total:0,
             current:1,
             size:10,
             pages:1,
           }
         },
         methods: {
           handleDelete(index, row) {
              console.log(index,row)
           },
           changePage(page, size){
            let _this = this;
            let api = '/api/v1/article/page?current='+page+'&size='+size
            this.axios.get(api).then((response) => {
              _this.tableData = response.data.records;
              _this.total = response.data.total;
              _this.size = response.data.size;
              _this.current = response.data.current + 1;
              _this.pages = response.data.pages + 1;
           })
           },
           pageChange(){
             this.changePage(this.page,this.size)
           },
           currentChange(val){
             this.changePage(val,this.size)
           }
           
         },
         created () {
          this.changePage(0,10)
         },
    }
</script>

<style scoped>

</style>