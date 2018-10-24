const express=require("express");
const pool=require("../pool");

const router=express.Router();

//新闻分页显示 GET /list
router.get("/list",(req,res)=>{
  var pno=req.query.pno;//参数当前页码
  var pageSize=req.query.pageSize;//页大小
  if(!pno){//设置默认值
    pno=1;
  }
  if(!pageSize){
    pageSize=10;
  }
  var reg=/^[0-9]{1,}$/;//验证用户输入
  if(!reg.test(pno)){
    res.send({code:-1,msg:"页码格式不正确"});
    return;
  }
  if(!reg.test(pageSize)){
    res.send({code:-2,msg:"页码大小格式不正确"});
    return;
  }
  //创建两条sql发送，总记录数
  //创建空对象保存返回数据    
  var obj={pno:pno,pageSize:pageSize};
  //创建变量保存(sql语句完成)进度
  var progress=0;
  var sql="SELECT COUNT(id) AS c FROM xz_news";
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    console.log(result[0].c);
    var pageCount=Math.ceil(result[0].c/pageSize);
    obj.pageCount=pageCount; //保存总页数
    progress+=50;             //记录当前进度
    if(progress==100){        //两条sql完成
      res.send({code:1,msg:obj}); //发送结果
    }
  })
  //创建两条sql，发送当前页内容
  var sql="SELECT id,title,ctime,click FROM xz_news LIMIT ?,?";
  var offset=(pno-1)*pageSize;
  pageSize=parseInt(pageSize);
  pool.query(sql,[offset,pageSize],(err,result)=>{
    if(err) throw err;
    obj.data=result;   //保存当前页内容
    progress+=50;       //进度加50
    if(progress==100){  
      res.send({code:1,msg:obj});
    }
  })
});

//功能2:依据用户id查找新闻详细信息
router.get("/find",(req,res)=>{
  var id=req.query.id;//1.参数id
  //2.sql
  var sql="SELECT `id`,`title`,`content`,`click`,`img_url`,`price`,`ctime` FROM xz_news WHERE id=?";
  pool.query(sql,[id],(err,result)=>{
    if(err) throw err;
    res.send({code:1,msg:result});
  })
});

//功能3:分页显示评论列表
router.get("/commentlist",(req,res)=>{
  //1.参数 pno pageSize nid
  var pno=req.query.pno;
  var pageSize=req.query.pageSize;
  var nid=parseInt(req.query.nid);
  if(!pno){
    pno=1;
  };
  if(!pageSize){
    pageSize=5;
  }
  
  //2.sql-总记录数
  var obj={pno:pno,pageSize:pageSize};
  var progress=0;
  var sql="SELECT COUNT(id) AS c FROM xz_comment WHERE nid=?";
  pool.query(sql,[nid],(err,result)=>{
    if(err) throw err;
    //console.log(result);
    obj.pageSize=Math.ceil(result[0].c/pageSize);
    progress+=50;
    //console.log(obj.pageCount);
  })
  //-当前页内容
  var offset=parseInt((pno-1)*pageSize);
  pageSize=parseInt(pageSize);
  var sql="SELECT `id`, `nid`, `ctime`, `content`, `username`, `isdel` FROM `xz_comment` WHERE nid=? ORDER BY id DESC LIMIT ?,?";
  pool.query(sql,[nid,offset,pageSize],(err,result)=>{
    if(err) throw err;
    obj.data=result;
    progress+=50;
    if(progress==100){
      res.send(obj);
    }
  })
})

//功能4:添加一条评论
router.post("/saveComment",(req,res)=>{
  //1.参数 nid username content 
  var nid=parseInt(req.body.nid);  //新闻编号
  var username=req.body.username; //用户名
  var content=req.body.content; //评论的内容
  //2.content 内容不为空 长度大于2
  if(content.length<2){
    res.send({code:-1,msg:"亲，评论内容太少了"});
    return;
  }
  //3.sql
  var sql="INSERT INTO `xz_comment`(`id`, `nid`, `ctime`, `content`, `username`, `isdel`) VALUES (NULL,?,now(),?,?,0)";
  //4.返回数据
  pool.query(sql,[nid,content,username],(err,result)=>{
    if(err) throw err;
    //console.log(result);
    //执行成功条件：影响行数
    if(result.affectedRows==1){
      res.send({code:1,msg:"添加成功"});
    }else{
      res.send({code:-1,msg:"添加失败"});
    }
  })
})
module.exports=router;