<template>
  <div>
    <ul class="section_ul">
      <li class="section_ul_li" @click="v_show">综合排序</li>
      <li class="section_ul_li">销量最高</li>
      <li class="section_ul_li">距离最近</li>
      <li class="section_ul_li">筛选</li>
    </ul>
    <div class="section_ul2" v-show="footNavisShow2">
      <ul>
        <li class="section_ul2_li">综合排序</li>
        <li class="section_ul2_li">速度最快</li>
        <li class="section_ul2_li">评分最高</li>
        <li class="section_ul2_li">起送价最低</li>
        <li class="section_ul2_li">配送费最低</li>
        <li class="section_ul2_li">人均高到低</li>
        <li class="section_ul2_li">人均低到高</li>
      </ul>
    </div>

      <ul class="section_ul3">
        <li @click="dianpu">
          <a href="javascript:;" class="ul3_a1">
            <div class="ul3_a1_div1">
              <img
                src="http://p0.meituan.net/xianfu/aa86bc1b9a218ea5e094b861c03b59b94873.jpg"
                alt
                class="ul3_a1_img1"
              >
            </div>
            <div class="ul3_a1_div2">
              <div class="ul3_div2_div1">北京麦当劳沙河餐厅</div>
              <div class="ul3_div2_div4">
                <div>  
                  <span >评分:4.7</span>&nbsp&nbsp
                  <span >月售4776</span>
                </div>
                <div class="ul3_div2_div4_1">
                  <span >30分钟</span>
                  <span >1.6km</span>
                </div>
              </div>
              <div class="ul3_div2_div2">
                <span class="ul3_div2_span">起送 ¥0</span>&nbsp
                <span class="ul3_div2_span">配送 ¥9</span>&nbsp
                <span class="ul3_div2_span">人均 ¥40</span>
              </div>
              <div class="ul3_div2_div3">
                <img
                  src="http://p1.meituan.net/xianfu/a0b192ffdab672109d9f767dbd49653a919.png"
                  alt="icon"
                >
                <span class="ul3_div2_div3_span">大众点评高分店铺</span>
              </div>
              <div class="ul3_div2_div3">
                <img
                  src="http://p0.meituan.net/xianfu/f8bc8dffdbc805878aa3801a33f563cd1001.png"
                  alt="icon"
                >
                <span class="ul3_div2_div3_span">满59减9;满79减20</span>
              </div>
              <div class="ul3_div2_div3">
                <img
                  src="http://p1.meituan.net/xianfu/9c997ecce6150671b8459738a26f8bd9767.png"
                  alt="icon"
                >
                <span class="ul3_div2_div3_span">折扣商品5.66折起</span>
              </div>
            </div>
          </a>
        </li>
        <li @click="dianpu"> 
          <a href="javascript:;" class="ul3_a1">
            <div class="ul3_a1_div1">
              <img
                src="http://p0.meituan.net/waimaipoi/f27d6d8cb56bd88812eaf212de7c872a159744.jpg"
                alt
                class="ul3_a1_img1"
              >
            </div>
            <div class="ul3_a1_div2">
              <div class="ul3_div2_div1">粥道驴肉火烧（驴肉火锅）</div>
              <div class="ul3_div2_div4">
                <div>  
                  <span >评分:4.5</span>&nbsp&nbsp
                  <span >月售2501</span>
                </div>
                <div class="ul3_div2_div4_1">
                  <span >30分钟</span>
                  <span >1.6km</span>
                </div>
              </div>
              <div class="ul3_div2_div2">
                <span class="ul3_div2_span">起送 ¥20</span>&nbsp
                <span class="ul3_div2_span">配送 ¥5</span>&nbsp
                <span class="ul3_div2_span">人均 ¥30</span>
              </div>
              <div class="ul3_div2_div3">
                <img
                  src="http://p1.meituan.net/xianfu/a0b192ffdab672109d9f767dbd49653a919.png"
                  alt="icon"
                >
                <span class="ul3_div2_div3_span">大众点评高分店铺</span>
              </div>
              <div class="ul3_div2_div3">
                <img
                  src="http://p0.meituan.net/xianfu/f8bc8dffdbc805878aa3801a33f563cd1001.png"
                  alt="icon"
                >
                <span class="ul3_div2_div3_span">满50减2;满80减5</span>
              </div>
              <div class="ul3_div2_div3">
                <img
                  src="http://p1.meituan.net/xianfu/9c997ecce6150671b8459738a26f8bd9767.png"
                  alt="icon"
                >
                <span class="ul3_div2_div3_span">折扣商品5.66折起</span>
              </div>
            </div>
          </a>
        </li>
        <li @click="dianpu"> 
          <a href="javascript:;" class="ul3_a1">
            <div class="ul3_a1_div1">
              <img
                src="http://p0.meituan.net/waimaipoi/f27d6d8cb56bd88812eaf212de7c872a159744.jpg"
                alt
                class="ul3_a1_img1"
              >
            </div>
            <div class="ul3_a1_div2">
              <div class="ul3_div2_div1">粥道驴肉火烧（驴肉火锅）</div>
              <div class="ul3_div2_div4">
                <div>  
                  <span >评分:4.5</span>&nbsp&nbsp
                  <span >月售2501</span>
                </div>
                <div class="ul3_div2_div4_1">
                  <span >30分钟</span>
                  <span >1.6km</span>
                </div>
              </div>
              <div class="ul3_div2_div2">
                <span class="ul3_div2_span">起送 ¥20</span>&nbsp
                <span class="ul3_div2_span">配送 ¥5</span>&nbsp
                <span class="ul3_div2_span">人均 ¥30</span>
              </div>
              <div class="ul3_div2_div3">
                <img
                  src="http://p1.meituan.net/xianfu/a0b192ffdab672109d9f767dbd49653a919.png"
                  alt="icon"
                >
                <span class="ul3_div2_div3_span">大众点评高分店铺</span>
              </div>
              <div class="ul3_div2_div3">
                <img
                  src="http://p0.meituan.net/xianfu/f8bc8dffdbc805878aa3801a33f563cd1001.png"
                  alt="icon"
                >
                <span class="ul3_div2_div3_span">满50减2;满80减5</span>
              </div>
              <div class="ul3_div2_div3">
                <img
                  src="http://p1.meituan.net/xianfu/9c997ecce6150671b8459738a26f8bd9767.png"
                  alt="icon"
                >
                <span class="ul3_div2_div3_span">折扣商品5.66折起</span>
              </div>
            </div>
          </a>
        </li>
        <li @click="dianpu"> 
          <a href="javascript:;" class="ul3_a1">
            <div class="ul3_a1_div1">
              <img
                src="http://p0.meituan.net/waimaipoi/f27d6d8cb56bd88812eaf212de7c872a159744.jpg"
                alt
                class="ul3_a1_img1"
              >
            </div>
            <div class="ul3_a1_div2">
              <div class="ul3_div2_div1">粥道驴肉火烧（驴肉火锅）</div>
              <div class="ul3_div2_div4">
                <div>  
                  <span >评分:4.5</span>&nbsp&nbsp
                  <span >月售2501</span>
                </div>
                <div class="ul3_div2_div4_1">
                  <span >30分钟</span>
                  <span >1.6km</span>
                </div>
              </div>
              <div class="ul3_div2_div2">
                <span class="ul3_div2_span">起送 ¥20</span>&nbsp
                <span class="ul3_div2_span">配送 ¥5</span>&nbsp
                <span class="ul3_div2_span">人均 ¥30</span>
              </div>
              <div class="ul3_div2_div3">
                <img
                  src="http://p1.meituan.net/xianfu/a0b192ffdab672109d9f767dbd49653a919.png"
                  alt="icon"
                >
                <span class="ul3_div2_div3_span">大众点评高分店铺</span>
              </div>
              <div class="ul3_div2_div3">
                <img
                  src="http://p0.meituan.net/xianfu/f8bc8dffdbc805878aa3801a33f563cd1001.png"
                  alt="icon"
                >
                <span class="ul3_div2_div3_span">满50减2;满80减5</span>
              </div>
              <div class="ul3_div2_div3">
                <img
                  src="http://p1.meituan.net/xianfu/9c997ecce6150671b8459738a26f8bd9767.png"
                  alt="icon"
                >
                <span class="ul3_div2_div3_span">折扣商品5.66折起</span>
              </div>
            </div>
          </a>
        </li>
        <li @click="dianpu"> 
           <a href="javascript:;" class="ul3_a1">
            <div class="ul3_a1_div1">
              <img
                src="http://p0.meituan.net/waimaipoi/f27d6d8cb56bd88812eaf212de7c872a159744.jpg"
                alt
                class="ul3_a1_img1"
              >
            </div>
            <div class="ul3_a1_div2">
              <div class="ul3_div2_div1">粥道驴肉火烧（驴肉火锅）</div>
              <div class="ul3_div2_div4">
                <div>  
                  <span >评分:4.5</span>&nbsp&nbsp
                  <span >月售2501</span>
                </div>
                <div class="ul3_div2_div4_1">
                  <span >30分钟</span>
                  <span >1.6km</span>
                </div>
              </div>
              <div class="ul3_div2_div2">
                <span class="ul3_div2_span">起送 ¥20</span>&nbsp
                <span class="ul3_div2_span">配送 ¥5</span>&nbsp
                <span class="ul3_div2_span">人均 ¥30</span>
              </div>
              <div class="ul3_div2_div3">
                <img
                  src="http://p1.meituan.net/xianfu/a0b192ffdab672109d9f767dbd49653a919.png"
                  alt="icon"
                >
                <span class="ul3_div2_div3_span">大众点评高分店铺</span>
              </div>
              <div class="ul3_div2_div3">
                <img
                  src="http://p0.meituan.net/xianfu/f8bc8dffdbc805878aa3801a33f563cd1001.png"
                  alt="icon"
                >
                <span class="ul3_div2_div3_span">满50减2;满80减5</span>
              </div>
              <div class="ul3_div2_div3">
                <img
                  src="http://p1.meituan.net/xianfu/9c997ecce6150671b8459738a26f8bd9767.png"
                  alt="icon"
                >
                <span class="ul3_div2_div3_span">折扣商品5.66折起</span>
              </div>
            </div>
          </a>
        </li>
        <li @click="dianpu"> 
          <a href="#" class="ul3_a1">
            <div class="ul3_a1_div1">
              <img
                src="http://p0.meituan.net/waimaipoi/f27d6d8cb56bd88812eaf212de7c872a159744.jpg"
                alt
                class="ul3_a1_img1"
              >
            </div>
            <div class="ul3_a1_div2">
              <div class="ul3_div2_div1">粥道驴肉火烧（驴肉火锅）</div>
              <div class="ul3_div2_div4">
                <div>  
                  <span >评分:4.5</span>&nbsp&nbsp
                  <span >月售2501</span>
                </div>
                <div class="ul3_div2_div4_1">
                  <span >30分钟</span>
                  <span >1.6km</span>
                </div>
              </div>
              <div class="ul3_div2_div2">
                <span class="ul3_div2_span">起送 ¥20</span>&nbsp
                <span class="ul3_div2_span">配送 ¥5</span>&nbsp
                <span class="ul3_div2_span">人均 ¥30</span>
              </div>
              <div class="ul3_div2_div3">
                <img
                  src="http://p1.meituan.net/xianfu/a0b192ffdab672109d9f767dbd49653a919.png"
                  alt="icon"
                >
                <span class="ul3_div2_div3_span">大众点评高分店铺</span>
              </div>
              <div class="ul3_div2_div3">
                <img
                  src="http://p0.meituan.net/xianfu/f8bc8dffdbc805878aa3801a33f563cd1001.png"
                  alt="icon"
                >
                <span class="ul3_div2_div3_span">满50减2;满80减5</span>
              </div>
              <div class="ul3_div2_div3">
                <img
                  src="http://p1.meituan.net/xianfu/9c997ecce6150671b8459738a26f8bd9767.png"
                  alt="icon"
                >
                <span class="ul3_div2_div3_span">折扣商品5.66折起</span>
              </div>
            </div>
          </a>
        </li>
      </ul>
  </div>
</template>
<script>
export default {
  name: "honeVue",
  data() {
    return {
      footNavisShow2: false
    };
  },
  methods: {
    dianpu(){
        this.$router.push("/shop")
    },
    v_show() {
      this.footNavisShow2 = !this.footNavisShow2;
    }
  }
};
</script>
<style lang="scss" scoped>
.section_ul {
  height: 100%;
  .section_ul_li {
    position: relative;
    display: inline-block;
    width: 25%;
    line-height: 0.4rem;
    text-align: center;
    font-size: 13px;
    color: #666;
    border-bottom: 1px solid rgb(230, 227, 227);
    border-top: 1px solid rgb(230, 227, 227);
  }
}
.section_ul2 {
   position: absolute;
   background: #fff;
   z-index: 99999;
   overflow: hidden;
   width: 3.6rem;
  .section_ul2_li {
    display: block;
    text-align: left;
    position: relative;
    line-height: 0.42rem;
    padding-left: 0.15rem;
    
    font-size: 14px;
    color: #333;
    border-bottom: 1px solid rgb(223, 220, 220);
  }
}
.section_ul3 {
  padding: 0.1rem 0 0 0.1rem;
  height: 1.6rem;
  position: absolute;
  li{
    width: 3.6rem;
    height: 1.5rem;
    // border-bottom: 1px solid rgb(206, 202, 202);
  }
  .ul3_a1_div1 {
    float: left;
    .ul3_a1_img1 {
      width: 0.76rem;
    }
  }
  .ul3_a1_div2 {
    float: right;
    width: 2.8rem;
    height: 1.4rem;

    .ul3_div2_div1 {
      font-size: 16px;
      color: #333;
      line-height: 1.4;
      white-space: nowrap;
      width: 80%;
      overflow: hidden;
      text-overflow: ellipsis;
      font-weight: 500;
      text-align: left;
    }
    .ul3_div2_div2 {
      padding-top: 0.04rem;
      text-align: left;
      .ul3_div2_span {
        font-size: 11px;
        color: #333;
        line-height: 1.4;
      }
    }
    .ul3_div2_div3 {
      position: relative;
      line-height: 0.15rem;
      padding-top: 0.1rem;
      white-space: nowrap;
      max-width: 90%;
      overflow: hidden;
      text-overflow: ellipsis;
      text-align: left;
      img {
        width: 0.15rem;
        height: 0.15rem;
        vertical-align: bottom;
        margin-left: 0.02rem;
      }
      .ul3_div2_div3_span {
        color: #333;
        vertical-align: bottom;
        line-height: 0.15rem;
        height: 0.15rem;
        display: inline-block;
      }
    }
    .ul3_div2_div4{
      display: flex;
      color: #333;
      .ul3_div2_div4_1{
          flex: 1 0;
          text-align: right;
          padding-right: .1rem;
      }
    }
  }
}
</style>
