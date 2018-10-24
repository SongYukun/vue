SET NAMES UTF8;
CREATE DATABASE vue CHARSET=UTF8;
USE vue;

#用户登录表
CREATE TABLE vue_user(
  uid INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(25),
  upwd VARCHAR(32)
);
INSERT INTO vue_user VALUES(null,'Tom',md5('123'));
INSERT INTO vue_user VALUES(null,'dongdong',md5('123'));
INSERT INTO vue_user VALUES(null,'jerry',md5('123'));

SELECT count(uid) as c FROM vue_user WHERE uname='Tom' AND upwd=md5('123');

#图片轮播表 vue_imagelist
CREATE TABLE vue_imagelist(
  id INT PRIMARY KEY AUTO_INCREMENT,
  img_url VARCHAR(255), 
  title VARCHAR(50)
);
INSERT INTO vue_imagelist VALUES
  (NULL,'http://127.0.0.1:3000/img/index/banner01.png','图片1'),
  (NULL,'http://127.0.0.1:3000/img/index/banner02.png','图片2'),
  (NULL,'http://127.0.0.1:3000/img/index/banner03.png','图片3'),
  (NULL,'http://127.0.0.1:3000/img/index/banner04.png','图片4'),
  (NULL,'http://127.0.0.1:3000/img/index/banner05.png','图片5'),
  (NULL,'http://127.0.0.1:3000/img/index/banner06.png','图片6');

SELECT id,img_url,title FROM vue_imgagelist;

#新闻表 id title content ctime click img_url price
CREATE TABLE vue_news(
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(255),
  content VARCHAR(2000),
  click INT,
  img_url VARCHAR(255),
  price DECIMAL(10,2),
  ctime DATETIME
);
INSERT INTO vue_news VALUES
  (NULL,'中国经济“凛冬已至”？','当前，由于股市下跌、贸易争端、严控房价和去杠杆等不确定因素的出现，外界普遍对中国经济前景持悲观态度，唱衰之声此起彼伏，有人甚至认为这是中国经济的拐点。“短期来看，经济大幅下行或出现超预期下行的可能性不是很高。”李奇霖向凤凰网财经表示。
  ',0,'http://127.0.0.1:3000/img/banner1.png',0,now()),
  (NULL,'101','123',0,'http://127.0.0.1:3000/img/banner2.png',0,now()),
  (NULL,'102','123',0,'http://127.0.0.1:3000/img/banner3.png',0,now()),
  (NULL,'103','123',0,'http://127.0.0.1:3000/img/banner4.png',0,now()),
  (NULL,'104','123',0,'http://127.0.0.1:3000/img/banner1.png',0,now()),
  (NULL,'105','123',0,'http://127.0.0.1:3000/img/banner2.png',0,now()),
  (NULL,'106','123',0,'http://127.0.0.1:3000/img/banner3.png',0,now()),
  (NULL,'107','123',0,'http://127.0.0.1:3000/img/banner4.png',0,now()),
  (NULL,'108','123',0,'http://127.0.0.1:3000/img/banner1.png',0,now()),
  (NULL,'109','123',0,'http://127.0.0.1:3000/img/banner2.png',0,now()),
  (NULL,'110','123',0,'http://127.0.0.1:3000/img/banner3.png',0,now()),
  (NULL,'111','123',0,'http://127.0.0.1:3000/img/banner4.png',0,now()),
  (NULL,'112','123',0,'http://127.0.0.1:3000/img/banner1.png',0,now()),
  (NULL,'113','123',0,'http://127.0.0.1:3000/img/banner2.png',0,now()),
  (NULL,'114','123',0,'http://127.0.0.1:3000/img/banner3.png',0,now()),
  (NULL,'115','123',0,'http://127.0.0.1:3000/img/banner4.png',0,now()),
  (NULL,'116','123',0,'http://127.0.0.1:3000/img/banner1.png',0,now()),
  (NULL,'117','123',0,'http://127.0.0.1:3000/img/banner2.png',0,now()),
  (NULL,'118','123',0,'http://127.0.0.1:3000/img/banner3.png',0,now()),
  (NULL,'119','123',0,'http://127.0.0.1:3000/img/banner4.png',0,now()),
  (NULL,'120','123',0,'http://127.0.0.1:3000/img/banner4.png',0,now()),
  (NULL,'121','123',0,'http://127.0.0.1:3000/img/banner4.png',0,now()),
  (NULL,'122','123',0,'http://127.0.0.1:3000/img/banner4.png',0,now()),
  (NULL,'123','123',0,'http://127.0.0.1:3000/img/banner4.png',0,now());

#创建评论表
CREATE TABLE vue_comment(
  id INT PRIMARY KEY AUTO_INCREMENT,
  nid INT,
  ctime DATETIME,
  content VARCHAR(50),
  username VARCHAR(25),
  isdel INT
);
INSERT INTO vue_comment VALUES
  (NULL,1,now(),'一看题目就知道是以经济论经济的书生。','wh',0),
  (NULL,1,now(),'你的意思是:长期看来下行的可能性很高','ck',0),
  (NULL,1,now(),'113','gh',0),
  (NULL,1,now(),'114','ki',0),
  (NULL,1,now(),'115','yy',0),
  (NULL,1,now(),'116','jl',0),
  (NULL,1,now(),'117','wh',0),
  (NULL,1,now(),'118','sy',0),
  (NULL,1,now(),'119','bl',0),
  (NULL,1,now(),'110','de',0),
  (NULL,1,now(),'120','hh',0),
  (NULL,1,now(),'121','kk',0),
  (NULL,1,now(),'122','wh',0),
  (NULL,1,now(),'123','wh',0),
  (NULL,2,now(),'124','wh',0),
  (NULL,2,now(),'125','ct',0),
  (NULL,2,now(),'126','cj',0),
  (NULL,2,now(),'127','lk',0),
  (NULL,2,now(),'128','sk',0),
  (NULL,2,now(),'129','zw',0),
  (NULL,2,now(),'130','dw',0),
  (NULL,2,now(),'131','gt',0),
  (NULL,2,now(),'132','st',0),
  (NULL,2,now(),'133','yk',0),
  (NULL,2,now(),'134','hz',0);