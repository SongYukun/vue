<template>
  <div class="app_shop">
    <div class="mui-card">
    <div class="mui-card-header">购物车</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner" v-for="item in list" :key="item.id">
          {{item.name}} {{item.price}} &nbsp;&nbsp;&nbsp;&nbsp;
          <div class="mui-numbox">
            <button class="mui-btn mui-btn-numbox-minus" type="button" @click="setSub(item.id)">-</button>
              <input class="mui-input-numbox" type="number" :value="item.count"/>
            <button class="mui-btn mui-btn-numbox-plus" type="button" @click="setAdd(item.id)">+</button>
          </div>
        </div>
      </div>
      <div class="mui-card-footer">
        小计：<span>￥{{getsubtotal}}</span>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return {
        list:[]
      }
    },
    methods:{
      setAdd(id){
        //console.log("购物车数量增加"+id);
        //当前购物车id，依据id将对应count自增操作
        for(var item of this.list){
          if(item.id==id){
            item.count++;
          }
        }
      },
      setSub(id){
        //console.log("购物车数量减少"+id);
        //当前购物车id，依据id将对应count自减操作
        for(var item of this.list){
          if(item.id==id){
            if(item.count<=1){
              break;
            }else{
              item.count--;
            }
          }  
        }
      },
      getCartlist(){
        this.$http.get("cartlist/list").then(result=>{
          this.list=result.body.msg;
          console.log(this.list);
        })
      }
    },
    created(){
      this.getCartlist();
    },
    computed:{
      //计算属性 计算多个数据的变化
      getsubtotal:function(){
        var sum=0;
        for(var item of this.list){
          sum+=item.price*item.count;
        }
        return sum;
      }
    }
  }
</script>
<style>

</style>

