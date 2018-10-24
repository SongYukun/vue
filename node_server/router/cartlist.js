//购物车
const express=require ("express");
const pool=require("../pool");

const router=express.Router();

//功能一：购物车list
router.get("/list",(req,res)=>{
  var obj={code:1,msg:[
    {id:1,name:"好丽友薯片",price:19.9,count:1},
    {id:2,name:"华为",price:19.9,count:1},
    {id:3,name:"中兴",price:2599,count:2},
    {id:4,name:"荣耀",price:19.9,count:1},
    {id:5,name:"苹果",price:8999,count:3},
    {id:6,name:"红酒",price:19.9,count:1},
  ]};
  res.send(obj);
});

module.exports=router;