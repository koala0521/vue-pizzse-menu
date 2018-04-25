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
        <tbody v-for="item in getMenuItems" :key="item.name">
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
            <tr>
              <td>合计：</td>
              <td></td>
              <td>{{ allPrice }} ￥ </td>
            </tr>
          </tbody>
        </table>
        
      </div>

      <div v-show="!cart.length" >
        <h3>购物车空空如也！</h3>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  
  data(){
    return {
      "cart":[],
      "getMenuItems":{
          1: {
            'name': '榴莲pizza',
            'description': '这是喜欢吃榴莲朋友的最佳选择',
            'options': [{
              'size': 9,
              'price': 38
            }, {
              'size': 12,
              'price': 48
            }]
          },
          2: {
            'name': '芝士pizza',
            'description': '芝士杀手,浓浓的芝士丝, 食欲瞬间爆棚',
            'options': [{
              'size': 9,
              'price': 38
            }, {
              'size': 12,
              'price': 48
            }]
          },
          3: {
            'name': '夏威夷pizza',
            'description': '众多人的默认选择',
            'options': [{
              'size': 9,
              'price': 36
            }, {
              'size': 12,
              'price': 46
            }]
          }
        }
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

