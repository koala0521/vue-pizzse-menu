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
        // 所有改编数据的方法
    },
    actions:{
        // 根据不用的指令，调用不同的改变数据的方法
    }
});


export default store