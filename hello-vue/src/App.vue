<template>
  <div id="app">
  <div class="wrap">
<div class="login_img"><img src="./assets/person.jpg"></div>
   <div class="wrap_input">
      <label>姓名</label><input class="first_input" type="text" v-model="user.name" placeholder="用户姓名">
   </div>
    <div class="wrap_input">
       <label>密码</label><input type="password" v-model="user.pwd" placeholder="用户密码">
    </div>
    <span v-if="error" class="error">用户名或密码不正确</span>
    <div @click="Login(user)" class="Login_btn">
    登录
    </div>
   </div>
  </div>
</template>

<script>
module.exports={
  name: 'app',
  data () {
    return {
     user:{},
     error:false
    }
  },
  methods:{
 Login:function(user){
this.$http.get('http://localhost:3000/Login',{params:{name:user.name,pwd:user.pwd}}).then(response => {
   var res=response.data.code;
   if(res == 0){
   this.$router.push({ path: '/index' });
   }
   else{
   this.error=true;
   }
}, response => {
   console.log(response.data);
})
        }
  }

}
</script>

<style lang="scss">
*{margin:0;padding:0;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
body{background:url(./assets/bg.jpg) no-repeat;background-size:100%;}
.wrap{text-align:center;background:#89cff0;width:400px;margin:0 auto;height:400px;
border-radius:15px;box-shadow:2px 3px 4px #000;margin-top:80px;position:relative;}
.wrap_input{margin:0 auto;margin-top:20px;}
.first_input{margin-top:15px;}
.wrap label{color:#fff;font-size:17px;}
.wrap input{width:280px;min-height:40px;line-height:40px;border-radius:6px;border:none;
margin-left:18px;padding-left:24px;font-size:16px;}
.Login_btn{border-top:1px solid #fff;margin-top:60px;font-size:24px;color:#fff;padding-top:25px;}
.Login_btn:hover{cursor:pointer;}
/*错误提示信息*/
.error{color:red;position:absolute;left:78px;padding-top:10px;font-size:13px;}
/*头像*/
.login_img{width:100px;height:100px;margin:0 auto;border-radius:100px;}
.login_img img{width:100%;height:100%;border-radius:100px;padding-top:15px;}
</style>
