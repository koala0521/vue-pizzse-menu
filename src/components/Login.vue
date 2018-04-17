<template>
  <div class="row mt-3">
    <div class="col-md-12 col-lg-12">
      <div class="card">
        <div class="card-body">
          <img class="mx-auto d-block" src="../../src/assets/icon.png" alt="">
          <form @submit.prevent="onSubmit">
            <div class="form-group">
              <label for="email">邮箱</label>
              <input 
                type="email"
                class="form-control"
                v-model="email"
                required
                >
            </div>
            <div class="form-group">
              <label for="password">密码</label>
              <input 
                type="password"
                class="form-control"
                v-model="password"
                required
                >
            </div>
            <button type="submit" class="btn btn-block btn-success">登录</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  
  import axios from 'axios';
  
  export default {
    "data":function(){
      return {
        "email":"",
        "password":""
      }
    },
    "methods":{
      onSubmit(){

          const users = [];
          const that = this;
          axios.get('/users.json')
            .then((res)=>{

                const data = res.data || {};
                for (const key in data) {
                  if (data.hasOwnProperty(key)) {
                    const element = data[key];
                    users.push( element );
                  }
                }
                let isLogin = users.filter(item=>{
                  return (item.email === that.email && item.password === that.password)
                });

                if( isLogin.length ){
                  that.$router.push({
                    name:'Menu'
                  })
                }else{
                  alert("账号或密码错误!")
                }
            })
            .catch(req=>{
              console.log( req );
              
            })

      }
    }
  }

</script>
