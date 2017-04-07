<template>
<div>
 <div class="loading" v-if="loading">
      Loading...
    </div>
<header>
<span class="LOGO">后台管理系统</span>
<span class="index_name">{{username}}.欢迎进入后台管理中心</span>
<span class="title">
<span>修改密码</span><span>|</span><span>后台首页</span>
<span>安全退出</span>
</span>
</header>
<!--  菜单栏开始   -->
<nav id="nav">
<ul>
<li class="sysopration">系统操作菜单</li>
<li v-for="(navlist,index) in navList"  class="reletive">
<a  @click="showIndex(index)">{{navlist.menu}}</a>
<img src="../assets/down.png" class="iconimg" v-if="(!isUp && indexShow == index ) ||(indexShow =='-1') || (indexShow !='-1' && indexShow != index)">
<img src="../assets/up.png" class="iconimg" v-if="isUp && indexShow == index">
<ul v-show="indexShow == index && isUp">
<li v-for="secondmenu in navlist.children" class="reletive">
<img src="../assets/right.png" class="righticon"><a> {{secondmenu.menu}}</a>
</li>
</ul>
</li>
</ul>
</nav>
<div id="main">
<router-view></router-view>
</div>
</div>
</template>
<script>
module.exports={
data:function(){
return {
loading: false,
navList:[],
indexShow:'-1',
isUp:false,
username:'',
}
},
methods:{
showIndex:function(index){
this.indexShow=index;
this.isUp = !this.isUp;
},
},
created:function(){
this.$http.get('http://localhost:3000/Menu').then(response => {
this.navList=response.data.result;
this.username=response.data.name;
},response=>{
console.log(response);
})
}
}
</script>
<style lang="scss">
/******ͷ头部样式ʽ*******/
header{background:#25313e;font-size: 14px;color:#adbece;padding:10px 20px;height:30px;}
.LOGO{font-size: 20px;font-weight: bold;margin-left:10px;}
.index_name{margin-left: 50px;color: #bac9ec;}
.title{float: right;color:#afbbd5;height:20px;line-height: 20px;}
.title:after{content:'';clear:both;display: block;}
.title>span{margin-right:15px;}
/*菜单栏开始*/
#nav:before {content: "";display:block;width:180px;position:fixed;
bottom:0;top:0;z-index:-1;background-color:#41586e;
border: 1px solid #ccc;border-width: 0 1px 0 0}
#nav{float:left;}
.sysopration{background: #89cc97;font-weight:bold;color:#fff;width:120px;padding: 11px 30px;}
#nav:after{content:'';clear: both;display: block;}
.reletive{position: relative;}
#nav>ul>li:not(:first-child) a{display: inline-block;font-size: 15px;font-weight: bold;width:120px;padding: 10px 30px;color:#adbece;}
#nav li:hover{cursor:pointer;color:#fff;}
#nav>ul>li>ul{background:#374b5e;}
.iconimg{position: absolute;right:15px;top: 10px;width:12px;}
.righticon{position: absolute;width:13px;top:12px;left:7px;}
#main{float:left;width:1180px;}
#main:before{content: "";display:block;width:1180px;position:fixed;
bottom:0;top:0;z-index:-1;background-color:#fff;
border: 1px solid #ccc;border-width: 0 1px 0 0}
#main:after{content:'';display:block;clear:both;}
.title:hover{cursor:pointer;}
</style>