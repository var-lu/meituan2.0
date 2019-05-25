<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col class="logo" :span="5">
          <i class="el-icon-eleme"></i>
          <strong>
            美团外卖管理系统
          </strong>
        </el-col>
        <el-col  class="out" :span="2">
          
          <el-dropdown trigger="click">
            <span class="el-dropdown-link" style="cursor:pointer">
              <i class="el-icon-switch-button" style="font-size:20px;color:#fff" ></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <!-- 为什么加native  释放原生的点击事件 vue 封装点击事件的时候阻止了原生的点击-->
              <el-dropdown-item @click.native="$store.commit('OUT_LOGIN')">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
         
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-row class="tac">
          <el-col :span="24">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              >
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>店铺管理</span>
                </template>
                <el-submenu index="1-1">
                  <template slot="title">店铺类别管理</template>
                  <el-menu-item index="1-1-1" @click="$router.push('/shopTypeList')">店铺类别</el-menu-item>
                </el-submenu>
                <el-submenu index="1-2">
                  <template slot="title">店铺管理</template>
                  <el-menu-item index="1-2-1">店铺</el-menu-item>
                </el-submenu>
                <el-submenu index="1-3">
                  <template slot="title">商品类别管理</template>
                  <el-menu-item index="1-3-1" @click="$router.push('/goodsTypeList')">商品类别</el-menu-item>
                </el-submenu>
                <el-submenu index="1-4">
                  <template slot="title">商品管理</template>
                  <el-menu-item index="1-4-1">商品</el-menu-item>
                </el-submenu>
              </el-submenu>
              <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title" @click="$router.push('/adminLog')">管理员日志</span>
              </el-menu-item>
              <el-menu-item index="3">
                <i class="el-icon-document"></i>
                <span slot="title" @click="$router.push('/userList')">用户管理</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  data(){
    return {

    }
  },
  mounted(){
    this.$router.push("/adminLog");
  }
}
</script>

<style lang="less" scoped>
  .el-header{
    background-color: #FFD300;
    color: #fff;
    text-align: center;
    line-height: 60px;
    padding: 0;
    font-size: 25px;
    .out{
      float: right;
      font-size: 16px;
    }
    .el-icon-eleme{
    	background: url(./assets/my.png) no-repeat center;
    	background-size: cover;
    	border-radius: 50%;
    	background-color: white;
    }
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
    
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
