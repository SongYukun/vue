<template>
  <div class="app-goods-list">
    <div class="app-goods-item" v-for="item in list" :key="item.id" @click="getDetail(item.id)">
      <img :src="item.img_url">
      <h1 class="title">{{item.title}}</h1>
      <div class="info">
        <p class="price">
          <span class="old">{{item.p_old}}</span>
          <span class="now">{{item.p_now}}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩{{item.sell}}件</span>
        </p>
      </div>
    </div>
    <mt-button type="primary" size="large">加载更多</mt-button>
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
      getDetail(id){
        this.$router.push({path:"/home/goodsinfo/"+id});
        //console.log(id);
        //编程序导航一
        //this.$router.push("/home/goodsinfo");
        //编程序导航二
        //this.$router.push({path:"/home/goodsinfo"});
        //编程序导航三
        //this.$router.push({name:"goodsinfo"});
      },
      getGoodsList(){
        this.$http.get("goodslist/list").then(result=>{
          //console.log(result);
          this.list=result.body.msg;
        })
      }
    },
    created(){
      this.getGoodsList();
    }
  }
  //点击当前商品跳转，商品详细信息组件
  
</script>
<style>
  .app-goods-list{
    display: flex;
    justify-content: space-between;
    padding: 7px;
    flex-wrap: wrap;
  }
  .app-goods-list .app-goods-item{
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin: 4px 0;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 293px;
  }
  .app-goods-list .app-goods-item img{
    width: 100%;
  }
  .app-goods-list .app-goods-item .title{
    font-size: 14px;
  }
  .app-goods-list .app-goods-item .info{
    background-color: #eee;
  }
  .app-goods-list .app-goods-item .info p{
    margin: 0;
    padding: 5px;
  }
  .app-goods-list .app-goods-item .info .price .now{
    color: #f40;
    font-weight: bold;
    font-size: 16px;
  }
  .app-goods-list .app-goods-item .info .price .old{
    text-decoration: line-through;
    font-size: 12px;
  }  
  .app-goods-list .app-goods-item .info .sell{
    display: flex;
    font-size: 12px;
    justify-content: space-between;
  }  
</style>
