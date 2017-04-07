/**
 * Created by Jack_ESong on 2017/3/7.
 */
var express = require('express');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var app = express();
/*************node.js   ������������**********/
app.use(cookieParser());
app.use(session({
    resave: true, // don't save session if unmodified
    saveUninitialized: false, // don't create session until something stored
    secret: 'love'
}));
/*session  �ж�   �ж�������Ǵ��ڵ�¼��ʱ�򱣴��session������о�������¼��һҳ�棬û�о�����*/
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    //if (!req.session.name) {
    //    if(req.url=="/login"){
    //        next();//�������ĵ�ַ�ǵ�¼��ͨ����������һ������
    //    }
    //    else
    //    {
    //        res.redirect('/login');
    //    }
    //} else if (req.session.name) {
    //    next();
    //}
    next();
});
app.get('/Login', function (req, res) {
    var result=req.query;
    var name=result.name;
    var pwd=result.pwd;
    if(name=='lhy' && pwd =='123456'){
        res.jsonp({code:0});
       res.session.name = name;
    }else{
        res.jsonp({code:-1});
    }
});
app.get('/Menu',function(req,res){
res.jsonp({name:"swallow",result:[{menu:"投资管理",children:[{"menu":"创建理财客户"},
    {"menu":"理财客户管理"},{"menu":"创建投资申请"},
    {"menu":"理财投资管理"},{"menu":"理财变更管理"},
    {"menu":"债权转让管理"},{"menu":"紧急赎回管理"}]},
    {"menu":"债权管理",children:[{"menu":"债权匹配管理"},
        {"menu":"月度更新下载"},{"menu":"自动更新债权"}]},
    {"menu":"风控管理",children:[{"menu":"创建借款客户"},
        {"menu":"借款客户管理"},{"menu":"创建借款申请"},{"menu":"借款申请管理"}]},
    {"menu":"人事管理"},{"menu":"客服管理"},{"menu":"报表管理"},
    {"menu":"系统管理"}]});
});
var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://3000', host, port);
});
