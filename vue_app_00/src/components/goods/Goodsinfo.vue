<template>
  <div class="app_goodsinfo">
    <!-- 第一部分：商品轮播区域 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swipe-box :list="imagelist"></swipe-box>
        </div>
      </div>
    </div>
    <!-- 第二部分：商品购买区域 -->
    <div class="mui-card">
      <div class="mui-card-header">商品名称</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价：<del>￥{{info.p_old}}</del>
            销售价：<span class="now_price">￥{{info.p_now}}</span>
          </p>
          <p>购买数量：</p>
          <div class="mui-numbox">
            <button class="mui-btn mui-btn-numbox-minus" type="button" @click="goSub">-</button>
              <input class="mui-input-numbox" type="number" v-model="num"/>
            <button class="mui-btn mui-btn-numbox-plus" type="button" 
            @click="goAdd">+</button>
          </div>
        </div>
      </div>
      <div class="mui-card-footer">
        <p>
          <mt-button type="danger" size="small">添加购物车</mt-button>
          <mt-button type="primary" size="small">立即购买</mt-button>
        </p>
      </div>
    </div>
    <!-- 第三部分：商品参数区域 -->、
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：{{info.p_sn}}</p>
          <p>商品类型：{{info.p_type}}</p>
          <p>商品类型：{{info.p_type}}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        按钮 图文介绍 商品评论
      </div>
    </div>
  </div>
</template>
<script>
  //1.导入图片轮播组件
  import swiper from "../subcomponents/swiper.vue"
  //2.引入mui js组件完成数字切换
  //由于mui.js与脚手架严格模式有冲突，故放弃
  //import mui from "../../lib/mui/js/mui.js"
  export default{
    data(){
      return{
        imagelist:[],
        info:{},
        num:1
      }
    },
    methods:{
      goSub(){
        if(this.num<=1){return;}
        this.num=parseInt(this.num-1);
        //console.log("-");
      },
      goAdd(){
        if(this.num>=99){return;}
        this.num=parseInt(this.num)+1;
        //console.log("+");
      },
      //获取当前商品的数据
      findDetail(){
        //发送请求获取数据
        this.$http.get("goodslist/find").then(result=>{
          //保存info对象中
          this.info=result.body;
          //console.log(this.info);
        })
      },
      getImageList(){
        this.$http.get("imagelist/list").then(result=>{
          if(result.body.code==1){
            this.imagelist=result.body.msg;
          }
        })
      }
    },
    created(){
      this.getImageList();
      this.findDetail();
      //console.log(this.$route.params.id);
    },
    components:{//注册子组件
      "swipe-box":swiper
    }
  }
</script>
<style>
  .app_goodsinfo .mui-card p .now_price{
    color:#f40;
  }
</style>
