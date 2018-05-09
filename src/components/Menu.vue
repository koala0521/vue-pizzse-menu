<template>
  <div class="row" >
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
            <tr v-for="item in cart" :key="item.id + '' + item.size" >
              <td>
                <button class="btn btn-sm" @click="reduceCounter(item)" >-</button>
                <span>{{ item.num }}</span>
                <button class="btn btn-sm"  @click="addCounter(item)"  >+</button>
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
      // "cart":[]
    }
  },
  "methods":{
    addItem( item , option ){

       let obj = {
              name:item.name,
              num:1,
              id:item.id,
              ...option
            };

      var hasItem = this.cart.find(item=>{

          return item.id === obj.id && item.size === obj.size
      });  
      console.log( "hasItem" , hasItem );
      
      if( hasItem ){

        this.$store.dispatch("ADD_COUNT" , { item:obj } ); 

      }else{

        this.$store.dispatch( "ADD_ITEM" , { item:obj } );
      } 

    },
    addCounter( obj ){
      this.$store.dispatch("ADD_COUNT" , { item:obj } ); 
    },
    reduceCounter( obj ){
      this.$store.dispatch("REDUCE_COUNT" , { item:obj } ); 
    },
  },
  "computed":{
    allPrice(){
      let price = 0;
      this.cart.forEach(item=>{
        price += item.price * item.num;
      });
      return price
    },
    cart(){

      return this.$store.state.cart;
    }
  }
}
</script>

