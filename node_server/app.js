//1.加载模块express
const express=require("express");
const routerImgList=require("./router/imagelist");
const routerNewsList=require("./router/newslist");
const routerGoodsList=require("./router/goodslist");
const routerCartList=require("./router/cartlist");
const reouterSearchList=require("./router/searchlist");
//1.2:加载处理post参数第三方模块
const bodyParse=require("body-parser");


//2.创建express
var app=express();
//2.0:配置模块
app.use(bodyParse.urlencoded({extended:false}));
//2.1:加载处理跨域模块
const cors=require("cors");
//2.2:允许哪个地址跨域访问
app.use(cors({
	origin:["http://127.0.0.1:3001"],
	credentials:true
}));

//3.绑定监听端口
app.listen(3000);

//4.指定静态目录public
//__dirname:当前程序所有目录完整路径
app.use(express.static(__dirname+"/public"));
app.use("/imagelist",routerImgList);
app.use("/newslist",routerNewsList);
app.use("/goodslist",routerGoodsList);
app.use("/cartlist",routerCartList);
app.use("/searchlist",reouterSearchList);

