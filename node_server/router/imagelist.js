//1.引入模块pool express
const express=require("express");
const pool=require("../pool");
//2.创建路由对象
const router=express.Router();
//3.处理请示
router.get("/list",(req,res)=>{
  var sql="SELECT id,img_url,title FROM vue_imagelist";
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    res.send({code:1,msg:result});
  })
})

//4.导出当前路由模块
module.exports=router;