import {firebaseAction} from 'vuexfire'

const state = {
    orders: []
}
 const mutations = {
 addOrder: (state,orders) =>state.orders.push(orders)
 }
  const getters= {
      getOrders: state => state.orders,
      numberOfOrders: state => state.orders.lenght
  }

  const actions = {
    setOrdersRef: firebaseAction(({ bindFirebaseRef}, { ref }) => {
        // binding will automatically unbind any previously bound ref so you
        // don't need to unbind before binding over an existing bound key
        bindFirebaseRef('orders', ref)
       
      })
  }

  export default {
      state,
      mutations,
      getters,
      actions
  }