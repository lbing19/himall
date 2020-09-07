import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    //mutations 中唯一的目的是修改state中的状态；要求每个mutations中的方法尽可能完成的事件单一
    addCount(state, payload) {
      payload.count++
    },
    addToCart(state, payload) {

      payload.checked = true
      state.cartList.push(payload)
    }
  },
  actions: {
    addCart(context, payload) {
      return new Promise((resolve, reject) => {
        //判断新商品id，若相同的商品增加数量
        let oldProduct = context.state.cartList.find(item => item.iid === payload.iid);
        if (oldProduct) {
          // oldProduct.count += 1;
          context.commit("addCount", oldProduct)

          resolve("当前商品数量+1")
        } else {
          payload.count = 1;
          // context.state.cartList.push(payload);
          context.commit('addToCart', payload)

          resolve("添加了新的商品")
        }
      })

    }
  },
  modules: {
  }
})
