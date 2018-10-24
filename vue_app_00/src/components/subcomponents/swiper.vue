<template>
  <div class="app_subcomp_swip">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in list" :key="item.id">
        <img :src="item.img_url" />
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
  export default{
    data(){
      return {}
    },
    methods:{},
    created(){},
    props:["list"]  //父元素传递数据表
  }
</script>
<style>
  .app_subcomp_swip .mint-swipe{
    height: 131px;
  }
  .app_subcomp_swip .mint-swipe .mint-swipe-item{
    text-align: center;
  }
  .app_subcomp_swip .mint-swipe img{
    width: 100%;
  }
</style>
