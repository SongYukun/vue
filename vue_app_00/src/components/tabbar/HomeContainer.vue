<template>
  <div class="app">
    <!-- 主页的组件HomeContainer.vue -->
    <!-- 1:轮播图 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in list" :key="item.id">
        <img :src="item.img_url" />
      </mt-swipe-item>
    </mt-swipe>
    <!-- 列表 -->
    <div class='index-nav'>
      <router-link to="/home/details/List" class='nav-item'>
        <img src='../../img/index/list01.png'>
        <span>国家精品</span>
      </router-link>
      <router-link to="/home/details/List" class='nav-item'>
        <img src='../../img/index/list02.png'>
        <span>考研</span>
      </router-link>
      <router-link to="/home/details/List" class='nav-item'>
        <img src='../../img/index/list03.png'>
        <span>理工补习</span>
      </router-link>
      <router-link to="home/details/List" class='nav-item'>
        <img src='../../img/index/list04.png'>
        <span>计算机</span>
      </router-link>
      <router-link to="home/details/List" class='nav-item'>
        <img src='../../img/index/list05.png'>
        <span>经济管理</span>
      </router-link>
      <router-link to="home/details/List" class='nav-item'>
        <img src='../../img/index/list06.png'>
        <span>外语</span>
      </router-link>
      <router-link to="home/details/List" class='nav-item'>
        <img src='../../img/index/list07.png'>
        <span>文学历史</span>
      </router-link>
      <router-link to="home/details/List" class='nav-item'>
        <img src='../../img/index/list08.png'>
        <span>更多</span>
      </router-link>
    </div>
    <!-- 畅销好课 -->
    <div class="mui-content" style="background-color:#fff">
      <div style="background-color:#efeff4;height:10px;"></div>
      <!--<h5 style="background-color:#efeff4"></h5>-->
      <h4>畅销好课</h4>
      <ul class="mui-table-view mui-grid-view">
        <li class="mui-table-view-cell mui-media mui-col-xs-6">
          <router-link to="/home/details/DetailList">
            <img class="mui-media-object" src="../../img/index/ke01.jpg">
            <div class="mui-media-body">能帮你赚到钱的50节商业思维提升课</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-6">
          <router-link to="/home/details/DetailList">
            <img class="mui-media-object" src="../../img/index/ke02.jpg">
            <div class="mui-media-body">25堂通识阅读课带你打破只是边界</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-6">
          <router-link to="/home/details/DetailList"><img class="mui-media-object" src="../../img/index/ke03.jpg">
            <div class="mui-media-body">听得懂得金融思维课</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-6">
          <router-link to="/home/details/DetailList">
            <img class="mui-media-object" src="../../img/index/ke04.jpg">
            <div class="mui-media-body">2018让你的年度计划有效实施</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-6">
          <router-link to="/home/details/DetailList">
            <img class="mui-media-object" src="../../img/index/ke05.jpg">
            <div class="mui-media-body">和大白一起学PPT演讲</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-6">
          <router-link to="/home/details/DetailList">
            <img class="mui-media-object" src="../../img/index/ke06.jpg">
            <div class="mui-media-body">高绩效精英的职场习惯</div></router-link></li>
      </ul>    
		</div>
    <div style="background-color:#efeff4;height:10px;"></div>
    <!--专题-->
    <div class="custom-name">专题</div>
    <div class="mui-card">
      <div class="mui-card-content">
        <router-link to="home/details/List">
          <img src="../../img/index/sub01.png" alt="" width="100%" height="136px">
        </router-link>
        <router-link to="home/details/List">
          <img src="../../img/index/sub02.png" alt="" width="100%" height="136px">
        </router-link>
        <router-link to="home/details/List">
          <img src="../../img/index/sub03.png" alt="" width="100%" height="136px">
        </router-link>
        <router-link to="home/details/List">
          <img src="../../img/index/sub04.png" alt="" width="100%" height="136px">
        </router-link>
      </div>
    </div>
    <!--职业发展-->  
    <div style="background-color:#efeff4;height：10px"></div>
    <div class="mui-content" style="background-color:#fff;height:510px;">
      <h4>畅销好课</h4>
      <ul class="mui-table-view mui-grid-view">  
        <div style="padding:10px 0 0 10px;">
          <router-link to="/home/details/DetailList">
            <img src="../../img/index/sub05.png" style="width:100%;">
          </router-link>
          <p style="margin-left:10px;color:#000;font-size:15px">职场人的理财必修课</p>
        </div>
        <li class="mui-table-view-cell mui-media mui-col-xs-6">
          <router-link to="/home/details/DetailList">
            <img class="mui-media-object" src="../../img/index/ke07.jpg">
            <div class="mui-media-body">躺着也能赚钱的基金投资课</div>
          </router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-6">
          <router-link to="/home/details/DetailList">
            <img class="mui-media-object" src="../../img/index/ke08.jpg">
            <div class="mui-media-body">希尔叫你炒外汇</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-6">
          <router-link to="/home/details/DetailList">
            <img class="mui-media-object" src="../../img/index/ke09.jpg">
            <div class="mui-media-body">跟简七学理财</div></router-link></li>
        <li class="mui-table-view-cell mui-media mui-col-xs-6">
          <router-link to="/home/details/DetailList">
            <img class="mui-media-object" src="../../img/index/ke10.jpg">
            <div class="mui-media-body">股市价值投资</div></router-link></li>
      </ul>    
		</div>
  </div>
</template>
<script>
  //加载当前组件需要第三方模块
  import {Toast} from "mint-ui";
  export default{
    data(){
      return {
        list:[]
      }
    },
    methods:{
      getImageList(){
        //获取图片轮播数据
        var url="http://127.0.0.1:3000/imagelist/list";
        this.$http.get(url).then(result=>{
          //node.js发送json字符串
          //通过vueresource接收自动将json字符串转换js对象
          if(result.body.code==1){
            this.list=result.body.msg;
          }else{
            //提示出错信息
            Toast("加载轮播图片失败...");
          }
        })
      }
    },
    created(){
      this.getImageList();
    }
  }
</script>
<style>
/*图片轮播组件高度为0*/
.app{
  background-color: #fff;
}
.app .mint-swipe{
  height: 200px;
}
.app .mint-swipe img{
  width: 100%;
  height: 100%;
}
/*列表*/
.index-nav{
  display: flex;
  flex-wrap: wrap;
}
.index-nav .nav-item{
  display: flex;
  width: 25%;
  height: 200rpx;
  box-sizing: border-box;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: #000;
  /*border-right: 1rpx solid #ddd;*/
  border-bottom: 1rpx solid #ddd;
  /*position: relative;*/
}
.index-nav .nav-item span{
  display: block;
  margin-top: 10px;
}
.index-nav .nav-item img{
  width: 45px;
  height: 45px;
  margin-top: 20px;
}
.index-nav .nav-item::after{
  content:"";
  width: 1rpx;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  background-color: #ccc;
}
/*畅销好课*/
.mui-content{
  height: 456px;
}
h4{
  padding-top: 8px;
  padding-left: 5px;
  text-indent: 12px;
}
.mui-table-view.mui-grid-view .mui-table-view-cell .mui-media-body{
font-size: 15px;
margin-top:8px;
color: #333;
}
/*专题*/
.custom-name {
  line-height: 21px;
  font-size: 17px;
  font-weight: bold;
  color: #3c4a55;
  padding-left: 10px;
  margin-top: 10px;
}
</style>

