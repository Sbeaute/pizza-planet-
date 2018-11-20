<template>
<footer class="row">
<nav class="navbar navbar-toggleable-md navbar-light">

<ul class="navbar-nav">
<li class="nav-item">
<router-link :to="{name:'homeLink'}" tag="li"><a class="nav-link">home</a></router-link>
<router-link :to="{name:'aboutLink'}" tag="li"><a class="nav-link">About</a></router-link>
<router-link :to="{name:'adminLink'}" tag="li"><a class="nav-link">admin</a></router-link>
</li>
</ul>
</nav>
</footer>
</template>
