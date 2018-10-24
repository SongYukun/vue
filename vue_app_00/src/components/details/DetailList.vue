<template>
  <div class="app-details-list">
    <div class="details-title">
      <img src="../../img/study/title.png">
      <div class="fg">
        <img src="../../img/study/play.png" class="ig">
      </div>
    </div>
  </div>
  
</template>
<script>
  export default{
    data(){
      return {
        list:[]
      }
    },
    methods:{
      
    },
    created(){

    }
  }
  //点击当前商品跳转，商品详细信息组件
  
</script>
<style>
.details-title{
  position: relative;
}
.details-title>img{
  width: 100%;
  height: 211px;
}
.details-title .fg{
  width: 100%;
  height: 100%;
  position: absolute;;
  top: 0;
  left: 0;
  background-repeat: no-repeat;
  background-position: center;
  background-color: rgba(0, 0, 0, 0.4);
}
.details-title .fg .ig{
  width: 65px;
  position: absolute;
  top: 73px;
  left: 155px;
}
.mui-card .mui-control-content {
  padding: 10px;
}

.mui-control-content {
  height: 150px;
}
</style>
