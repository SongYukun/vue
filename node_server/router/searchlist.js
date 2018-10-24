//1.引入模块pool express
const express=require("express");
const pool=require("../pool");
//2.创建路由对象
const router=express.Router();
//3.处理请示
//功能一：商品搜索
router.get("/list",(req,res)=>{
  var pno=req.query.pno;
  var pageSize=req.query.pageSize;
  var key=req.query.key;
  var sql="SELECT lid,lname,price FROM xz_laptop WHERE lname LIKE '%小%'";
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
})

//4.导出当前路由模块
module.exports=router;