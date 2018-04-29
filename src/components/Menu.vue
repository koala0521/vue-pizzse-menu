<template>
  <div class="row" >
    
    <!-- 菜单 -->
    <div class="col-sm-12  col-md-8">
      <table class="table">
        <thead class="thead-default">
          <tr>
            <th>尺寸</th>
            <th>价格</th>
            <th>加入</th>
          </tr>
        </thead>
        <tbody v-for="item in this.$store.state.getMenuItems" :key="item.name">
          <tr>
            <td><strong>{{item.name}}</strong></td>
          </tr>
          <tr v-for="option in item.options" :key="option.size">
            <td>{{option.size}}</td>
            <td>{{option.price}}</td>
            <td>
              <button 
                class="btn btn-sm btn-outline-success"
                @click="addItem(item , option)"
              >+</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- 购物车 -->
    <div class="col-sm-12 col-md-4">
      <div v-show="cart.length" >
        <table class="table">
          <thead class="thead-default">
            <tr>
              <th>数量</th>
              <th>品种</th>
              <th>价格</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cart" :key="item.name + item.size" >
              <td>
                <button class="btn btn-sm" @click="cartBtn(item ,'minus')" >-</button>
                <span>{{ item.num }}</span>
                <button class="btn btn-sm"  @click="cartBtn(item ,'add')"  >+</button>
              </td>
              <td>{{ item.name + item.size + "寸" }}</td>
              <td>{{ item.price * item.num }}</td>
            </tr>
          </tbody>
        </table>
        <div>
          <p>总价：{{ allPrice }} ￥ </p>
          <button class="btn btn-success btn-block">提交</button>
        </div>
        
      </div>

      <div v-show="!cart.length" >
        <h4>空空如也！o(╥﹏╥)o</h4>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  
  data(){
    return {
      "cart":[]
    }
  },
  "methods":{
    addItem( item , option ){

       let obj = {
              name:item.name,
              num:1,
              ...option
            };
      var hasItem = this.cart.find(item=>{
          return item.name === obj.name && item.size === obj.size
      });  

      if( hasItem ){
        
        hasItem.num = ++hasItem.num;

      }else{
        this.cart.push( obj );
      } 

    },
    cartBtn( item , type ){
      item.num = type === "add" ? ++item.num  : --item.num ;
      let index = this.cart.findIndex(el=>{
        return el === item
      });
      if( item.num === 0 ){
        this.cart.splice( index , 1 );
      }
    }
  },
  "computed":{
    allPrice(){
      let price = 0;
      this.cart.forEach(item=>{
        price += item.price * item.num;
      });
      return price
    }
  }
}
</script>

