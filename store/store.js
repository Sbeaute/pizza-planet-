import vue from 'vue'
import vuex from 'vuex'
import Vue from 'vue';

import menu from './modules/menu'
import orders from './modules/orders'
import users from './modules/users'
import {firebaseMutations} from 'vuexfire'

Vue.use(vuex)


export  const store = new vuex.Store({
    muattions : {...firebaseMutations},
    modules: {
        menu,
        orders,
        users
     
          
    }           
}) 