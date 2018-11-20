<template>
<div class="row">
<div class="col-sm-12 col-md-6">
<table class="table table-hover">
<thead class="thead-default">
<tr>
<th>Size</th>
<th>Price</th>
<th>Add To Basket</th>
</tr>
</thead>
<tbody v-for="item in getMenuItems" :key="item['.key']">
<tr>
<td><strong>{{ item.name }}</strong></td>
</tr>
<tr v-for="option in item.options">
<td>{{ option.size}}</td>
<td>{{option.price| currency}}</td>
<td><button class="btn btn-sm btn-outline-success" 
            type="button"
            @click="addTobasket(item, option)">+</button></td>
</tr>
</tbody>
</table>
</div>

    <!-- this is code for shopping basket-->
    <div class="col-sm-12 col-md-6">
    <div v-if="basket.length > 0">
    <table class="table">
<thead class="thead-default">
<tr>
<th>quantity</th>
<th>Item</th>
<th>total</th>
</tr>
</thead>
<tbody v-for="item in basket" :key="item['.key']">
<tr>

<td><button class="btn btn-sm" 
type="button"
@click="decreaseQuantity(item)">-</button>
<span> {{item.quantity}}-</span>

<button class="btn btn-sm" 
type="button"
@click="increaseQuantity(item)">+</button>
</td>
<td>{{item.name}}{{item.size}}"</td>
<td>{{item.price * quantity| currency}}</td>
</tr>
</tbody>
</table>
<p> order Total: {{total| currency}}</p>
<button class="btn btn-success btn-block" @click="addNewOrder">Place Order</button>
    </div>
    <div v-else>
    <p>{{basketText}}</p> {{ this.$store.state.orders}}
    </div>
    
    </div>
    
 </div>
 </template>   
 
 <script>
 import {mapGetters} from 'vuex'
 import {dbOrdersRef} from '../firebaseConfig'
 export default {
     data() {
         return{
             basket:[],
             basketText: 'Your basket Is Empty!'
             }
         },
         computed: {
             ...mapGetters ([
             'getMenuItems'    
             ]),
             total () {
                 var totalCost = 0;
                 for (var items in this.basket){
                     var individualItem = this.basket[items];
                     totalCost += individualItem.quantity * individualItem.price;
                 }
                 return totalCost 
             }
    
         },
         methods: {
             addToBasket(item, option){
                 this.basket.push({
                     name:item.name,
                     price:option.price,
                     size:option.size,
                     quantity:1
                 })
             },
             removefromBasket(item) {
                 this.basket.splice(this.basket.indexOf(item),1);

             },
             increaseQuantity(item) {
item.quantity++;
             },
             decreaseQuantity(item){
                 item.quantity--;
                 if(item.quantity === 0)
                 this.removeFromBasket(item);
             }
         },
         addNewOrder () {
            //  this.$store.commit('addOrder',this.basket)
             dbOrdersRef.push(this.basket)
             this.basket=[]
             this.basketText = 'Thank You, your order has been placed..'
         }
     }
 </script>


 //fix menu items for pizza list 