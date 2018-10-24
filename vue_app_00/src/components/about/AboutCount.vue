<template>   
    <div class="app_search">
        <div class="search_title">
            <p>登录</p>
        </div>
        <div>
            <input type="text" placeholder="邮箱手机号"><br>
            <input type="password" placeholder="密码"><br>
            <mt-button type="primary" size="large"><router-link to="home">登录</router-link></mt-button>
        </div>
        <div class="search_login">
            <a href="#"><p>忘记密码?</p></a>
            <a href="#"><p>手机注册</p></a>
        </div>
        <div class="search_tip">
            <p>第三方账号直接登录</p>
        </div>
        <div class="search_other">
            <a href="#"><img src="" alt=""></a>
            <a href="#"><img src="" alt=""></a>
            <a href="#"><img src="" alt=""></a>
            <a href="#"><img src="" alt=""></a>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return {}
        },
        methods:{

        },
        created(){
            
        }
    }
</script>
<style>
*{
    box-sizing:border-box;
}
.app_search .search_title{
    text-align:center;
    margin-top: 10px;
}
.app_search .search_title p{
    color:black;
    font-size:16px;
}
.app_search .search_login{
    padding-top:25px;
    display:flex;
    justify-content: space-between;
}
.app_search .search_tip{
    text-align: center;
    padding-top:20px;
}
.app_search .search_other{
    display:flex;
    justify-content: space-around;
    padding-top:50px;
}
.app_search .search_other img{
    width:32px;
    height:32px;
}
</style>