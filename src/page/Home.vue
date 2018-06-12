<template>
  <div class="wrap">
    <div class="header">
      vechain查询
    </div>
    <div class="content">
      <el-tabs type="border-card">
        <el-tab-pane label="查询账户余额">
          <h4>按地址查询余额</h4>
          <label class="label" for="">address:</label>
          <el-input class="input" v-model="input" placeholder="请输入账户地址"></el-input>
          <el-button type="primary" @click="search()">查询</el-button>
          <el-card v-if="resultStatus">
            <div v-for="(value, key) in result" :key="key">
              {{ key + '：' + value }}
            </div>
          </el-card>
        </el-tab-pane>
        <el-tab-pane label="配置管理">配置管理</el-tab-pane>
        <el-tab-pane label="角色管理">角色管理</el-tab-pane>
        <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      loading: false,
      input: '0x7567d83b7b8d80addcb281a71d54fc7b3364ffed',
      result: '',
      resultStatus: false
    }
  },
  created () {
  },
  mounted  () {
    // this.search()
  },
  methods: {
    search () {
      this.loading = true
      // const params = {
      // }
      this.$axios.search(this.input)
        .then((res) => {
          console.log(res)
          this.result = res
          this.resultStatus = true
          this.loading = false
        })
        .catch((error) => {
          this.loading = false
          console.log(error)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .header
    padding-left 20px
    height 60px
    line-height 60px
    color #FFF
    background-color #409EFF
  .content
    .el-tabs
      margin 50px auto 0
      width 96%
      .el-tab-pane
        padding-bottom 50px
        .el-label
          margin-right 10px
        .el-input
          margin-right 10px
          width 500px
        .el-card
          margin-top 20px
          width 662px
</style>
