<template>
  <div class="address">
    <backTop topBg="#fff" topColor="#333" routeName="/my" topName="地址列表"></backTop>
    <div v-show="true" class="have_address">
      <div>
        <div class="info">
          <p class="address_info">
            <span>吉林大学</span>
            <span>四舍</span>
          </p>
          <p>
            <span>鹿东明先生</span>
            <span>16622908939</span>
          </p>
        </div>
        <div class="edit" @click="$router.push('/my/address/editaddress')"></div>
      </div>
    </div>
    <div v-show="false" class="no_address">
      <div>
        <p>
          <i></i>
        </p>
        <p>
          <span>还没有添加收货地址</span>
        </p>
      </div>
    </div>
    <div class="add_address">
      <button @click.prevent="$router.push('/my/address/addAddress')">
        <i></i>
        新增收货地址
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      addAddressShow:false
    }
  }
};
</script>
<style lang="scss" scoped>
.address {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: "PingFangSC-Regular", "Hiragino Sans GB", Arial, Helvetica,
    "\5B8B\4F53", sans-serif;
  .have_address {
    border-top: 1px solid #d7d7d7;
    flex: 1;
    > div {
      display: flex;
      position: relative;
      .info {
        width: 100%;
        height: 0.65rem;
        margin-left: 0.15rem;
        padding-right: 0.15rem;
        box-sizing: border-box;
        border-bottom: 1px solid #e4e4e4;
        text-align: left;
        line-height: 0.26rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .address_info {
          font-size: 16px;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          color: #333;
        }
      }
      .edit {
        width: 0.55rem;
        height: 100%;
        background: url("../../assets/img/edit.png") no-repeat 0 50%;
        background-size: 0.15rem 0.15rem;
        background-position-x: 0.2rem;
        position: absolute;
        right: 0;
        cursor: pointer;
      }
    }
  }
  .no_address {
      flex: 1;
      width: 100%;
      background: #f0f0f0;
      >div{
        margin-top: 15vh;
        background-size: cover;
        text-align: center;
        i{
            background: url("../../assets/img/my-no-address.png") no-repeat;
            background-size: 100%;
            width: 1.11rem;
            height: 1.24rem;
            display: inline-block;
        }
      }
  }
  .add_address {
    height: 0.45rem;
    width: 100%;
    border-top: 1px solid #d7d7d7;
    button {
      height: 100%;
      outline: none;
      font-size: 16px;
      cursor: pointer;
      background: none;
      border: none;
      i {
        background: url("../../assets/img/my-add-address.png") no-repeat;
        width: 0.15rem;
        height: 0.15rem;
        display: inline-block;
        background-size: 100%;
      }
    }
  }
}
</style>
