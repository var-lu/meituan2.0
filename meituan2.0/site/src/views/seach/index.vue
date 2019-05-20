<template>
  <div>
    <backTop topBg="#fff" topColor="#333" routeName="/" topName="搜索页"></backTop>
    <section>
      <div id="seach">
        <input type="text" placeholder="请输入商家或商品名称" class="h_e_input">
        <span>搜索</span>
      </div>
      <div id="seach_text">热门搜索</div>
      <div>
          <a href="javascript:;" class="seach_a">小龙虾</a>
          <a href="javascript:;" class="seach_a">炸鸡</a>
          <a href="javascript:;" class="seach_a">米线</a>
          <a href="javascript:;" class="seach_a">兰州拉面</a>
          <a href="javascript:;" class="seach_a">烤肉拌饭</a>
          <a href="javascript:;" class="seach_a">饺子</a>
          <a href="javascript:;" class="seach_a">螺蛳粉</a>
          <a href="javascript:;" class="seach_a">炒饭</a>
          <a href="javascript:;" class="seach_a">烧烤</a>
          <a href="javascript:;" class="seach_a">超市</a>
          <a href="javascript:;" class="seach_a">板面</a>
      </div>
    </section>
  </div>
</template>
<script>
export default {
    methods: {
        go(){
            this.$router.go(-1);
        }
    },
};
</script>
<style lang="scss" scoped>
.header{font-size: 14px !important;}
section {
  padding: 0.1rem;

  #seach {
    position: relative;
    span {
      position: absolute;
      top: 0.01rem;
      right: 0.1rem;
      //    padding-right: .2rem;
      padding-top: 0.03rem;
      font-size: 15px;
      float: right;
    }
    input {
      display: block;
      outline: none;
      border: none;
      width: 88%;
      font-size: 12px;
      line-height: 0.15rem;
      padding: 0.06rem 0 0.06rem 0.28rem;
      box-sizing: border-box;
      background-color: #e8e8e8;
      border-radius: 15px;
      text-align: left;
    }
  }
  #seach_text {
    width: 95%;
    font-size: 12px;
    font-weight: 100;
    text-align: left;
    padding: 0.2rem 0 0.1rem 0.1rem;
    border-bottom: 1px solid #e4e4e4;
  }
  .seach_a{
    padding: 0 10px;
    height: 28px;
    line-height: 28px;
    color: #666;
    margin: 5px 10px;
    margin-left: 0;
    font-size: 13px;
    display: inline-block;
    position: relative;
    max-width: 150px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border: 1px solid rgb(211, 208, 208);
  }
}
</style>
