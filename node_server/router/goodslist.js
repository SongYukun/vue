const express=require("express");
const pool=require("../pool");

const router=express.Router();

// 功能一：发送商品列表给前端
router.get("/list",(req,res)=>{
  var obj=[
    {id:1,img_url:"http://127.0.0.1:3000/img/xlqg19.jpg",title:"好丽友薯片",p_old:"￥19.80",p_now:"￥9.90",sell:10},
    {id:2,img_url:"http://127.0.0.1:3000/img/xlqg7.jpg",title:"华为手机p3000",p_old:"￥3000.00",p_now:"￥2199.00",sell:1},
    {id:3,img_url:"http://127.0.0.1:3000/img/xlqg19.jpg",title:"好薯片",p_old:"￥19.80",p_now:"￥9.90",sell:10},
    {id:4,img_url:"http://127.0.0.1:3000/img/xlqg7.jpg",title:"高端红酒",p_old:"￥3000.00",p_now:"￥2199.00",sell:1},
    {id:5,img_url:"http://127.0.0.1:3000/img/xlqg19.jpg",title:"好丽友薯片",p_old:"￥19.80",p_now:"￥9.90",sell:10},
    {id:6,img_url:"http://127.0.0.1:3000/img/xlqg7.jpg",title:"华为手机p3001",p_old:"￥3000.00",p_now:"￥2199.00",sell:1},
    {id:7,img_url:"http://127.0.0.1:3000/img/xlqg19.jpg",title:"好丽友薯片2",p_old:"￥19.80",p_now:"￥9.90",sell:10},
    {id:8,img_url:"http://127.0.0.1:3000/img/xlqg7.jpg",title:"华为手机p3003",p_old:"￥3000.00",p_now:"￥2199.00",sell:1},
    {id:9,img_url:"http://127.0.0.1:3000/img/xlqg19.jpg",title:"好丽友薯片4",p_old:"￥19.80",p_now:"￥9.90",sell:10},
    {id:10,img_url:"http://127.0.0.1:3000/img/xlqg7.jpg",title:"华为手机p3005",p_old:"￥3000.00",p_now:"￥2199.00",sell:1},
    {id:11,img_url:"http://127.0.0.1:3000/img/xlqg19.jpg",title:"好丽友薯片6",p_old:"￥19.80",p_now:"￥9.90",sell:10},
    {id:12,img_url:"http://127.0.0.1:3000/img/xlqg7.jpg",title:"华为手机p3007",p_old:"￥3000.00",p_now:"￥2199.00",sell:1}
  ];
  res.send({code:1,msg:obj});
})

//功能二：依据商品编号查询商品信息
router.get("/find",(req,res)=>{
  var obj={id:"9",title:"好丽友薯片4",p_old:19.80,p_now:9.90,p_sn:"2199282",p_type:"膨化食品"};
  res.send(obj);
})


module.exports=router;