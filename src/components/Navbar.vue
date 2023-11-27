<template>
     <header>
        <h1>Vue PMS</h1>
    </header>

    <nav>
        <router-link to="/">Home</router-link>
       
        <router-link to="/addProduct">Add Product</router-link>
        
    </nav>
</template>

<style>
   header {
            background-color: #333;
            color: #fff;
            padding: 10px;
            text-align: center;
        }

        nav {
            background-color: #444;
            padding: 10px;
        }

        nav a {
            color: #fff;
            text-decoration: none;
            padding: 10px;
            margin: 0 10px;
        }

        nav a:hover {
            background-color: #555;
        }
</style>