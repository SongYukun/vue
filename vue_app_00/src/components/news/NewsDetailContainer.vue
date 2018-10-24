<template>
  <div class="app_newsdetail">
    <!-- 新闻详细页没有现成组件 -->
    <h1 class="title">{{newsinfo.title}}</h1>
    <p class="subtitle">
      <span>发表时间:{{newsinfo.ctime | dateFormat}}</span>
      <span>点击：{{newsinfo.click}}次</span>
    </p>
    <div class="container" v-html="newsinfo.content">
    </div>
    <!-- 评论区域 -->
    <comment-box :id="this.id"></comment-box>
  </div>
</template>
<script>
  //1:导入评论的子组件
  import comment from '../subcomponents/comment';
  
  export default{
    data(){
      return {
        id:this.$route.params.id,
        newsinfo:{}  //保存当前新闻内容
      }
    },
    methods:{
      //发送ajax请求获取新闻返回结果
      getNewsDetail(){
        //获取新闻详情信息
        //var id=this.$route.params.id;
        var url="newslist/find?id="+this.id;
        this.$http.get(url).then(result=>{
          this.newsinfo=result.body.msg[0];
          console.log(this.newsinfo);
        })
      }
    },
    created(){
      //新闻id获取成功
      console.log(this.$route.params.id);//接收新闻id
      this.getNewsDetail();
    },
    components:{
      'comment-box':comment  //注册子组件
    }
  }
</script>
<style>
  .app_newsdetail{
    padding:0 4px;
  }
  .app_newsdetail .title{
    font-size: 16px;
    text-align: center;
    color: #f40;
    margin: 15px 0;
  }
  .app_newsdetail .subtitle{
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
  .app_newsdetail .container{
    font-size: 13px;
    text-indent: 2em;
  }
  .app_newsdetail .container img{
    width: 100%;
  }
</style>

