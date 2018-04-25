<template>
  <div class="row">
    <div class="col-sm-12 col-md-8">
      <!-- new pizza -->
      <app-new-pizza v-on:additem="addData" ></app-new-pizza>
    </div>
    <div class="col-sm-12 col-md-4">
      <!-- 品种展示 -->
      <h3 class="text-muted my-5">菜单</h3>
      <table class="table">
        <thead class="table table-default">
          <tr>
            <th>品种</th>
            <th>删除</th>
          </tr>
        </thead>
        <tbody v-for="item in getMenuItems" :key="item.name">
          <tr>
            <td>{{item.name}}</td>
            <td>
              <button @click="deleteData(item.id)" class="btn btn-outline-danger btn-sm">&times;</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>

    import NewPizza from './NewPizza.vue';

  export default{
    components:{
      "app-new-pizza":NewPizza
    },
    data(){
      return {
        getMenuItems:[
          {
            name:"榴莲pizza",
            description:"榴莲pizza...",
            options:[
                {
                    size:"7",
                    price:"39"
                },
                {
                    size:"9",
                    price:"69"
                }
            ],
            id:Math.random()
        },{
            name:"芝士pizza",
            description:"芝士pizza...",
            options:[
                {
                    size:"7",
                    price:"39"
                },
                {
                    size:"9",
                    price:"69"
                }
            ],
            id:Math.random()
        }
        ]
      }
    },
    methods:{
      deleteData( id ){
        this.getMenuItems = this.getMenuItems.filter(el=>{
          return el.id !== id
        });
        if( !this.getMenuItems.length ){
          this.$router.push({name:"Menu"});
        }
      },
      addData(payload){

        this.getMenuItems.push( payload.item );
        console.log( this.getMenuItems );
        
      }
    },
      // 生命周期函数
    created(){

            // 数据同步
            // this.$store.commit('setMenuItems',menuArray)
            // this.getMenuItems = menuArray
    }
  }

</script>