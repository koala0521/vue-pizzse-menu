import Vue from 'vue';
import Vuex from 'vuex';

// 假数据
import data from '../common/data/data';

Vue.use(Vuex);

const store = new Vuex.Store({
        
    // 应用数据,
    state:{
        // 所有商品
        "getMenuItems":data.items,
        // 购物车商品
        "cart":[]
    },
    getters:{
        // 获取数据
    },
    mutations:{
        // 所有改变数据的方法

        // 加入购物车
        addItem( state , payload ){

            let { item } = payload;
            state.cart.push( item );
        },
        // 增加购物车物品数量
        addCounter( state , payload ){
            let { item } = payload;
            
            let index = state.cart.findIndex((v)=>{
                
                return v.id === item.id && v.size === item.size
            });
            ++state.cart[ index ].num;
        },
        // 减少购物车商品数量
        reduceCounter( state , payload ){
            let { item } = payload;
            
            let index = state.cart.findIndex((v)=>{
                return v.id === item.id && v.size === item.size
            });
            --state.cart[ index ].num;
            if( state.cart[ index ].num <= 0 ){
                state.cart.splice( index , 1 );
            }
        }
    },
    actions:{
        // 根据不用的指令，调用不同的改变数据的方法
        ADD_ITEM( { commit } , payload ){

            commit("addItem" , payload );
        },
        ADD_COUNT( { commit } , payload ){
            commit( "addCounter" , payload );
        },
        REDUCE_COUNT( { commit } , payload ){
            commit( "reduceCounter" , payload );
        }
    }
});


export default store