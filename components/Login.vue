<template>
<div class="row">
    <div>
    <div>
        <p v-if="!currentUser"> Please login to continue</p>
        <p v-else>Logged in as: <br>{{currentUser}}</p>
    </div>
    <form>
        <div class="form-group row">
<label>Email address</label>
<input type="text" class="form-control" id="email" placeholder="enter email">
    </div>

     <div class="form-group row">
<label>Password</label>
<input type="password" class="form-control" id="password" placeholder="enter password">
    </div>
    <button type="button" class="btn btn-primary" @click.prevent="SignIn">SignIn</button>
    <button type="button" class="btn btn-danger" @click.prevent="SignOut">SignOut</button>
    </form>
    </div>
</div>
 </template>
 <script>
     import Firebase from 'firebase'
import {store} from '../store/store.js'

Firebase.auth().onAuthStateChanged(function(user){
    if(user) {
store.dispatch('setUser', user) 
} else {
    store.dispatch('setUser', null)
}

    });

 export default {
     methods: {
         signIn() {
            var email = document.getElementById('email').value;
            var password = document.getElementById('password').value;

            Firrebase.auth().signInWithEmailAndPassword(email,password).catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;

                if (errorCode === 'auth/wrong-password') {
                    alert('Wrong password')
                } else {
                    alert(errorMessage);
                }
            });
         },
         signOut() {
Firebase.auth().signOut().then(function() {
    alert('logged out');
}).catch(function(error) {
    alert('error.')
})
         }
     },
computed: {
    currentUser () {
        return this.$store.getters.currentUser
    }
}
     
 }
 </script>

 <style>
 form {
     margin: 20px 0;
 }
 </style>
 
 