<template>
      <div class="container">

<div v-for="product in products" class="product-card">
    <img :src="product.image" alt="Product 1">
    <div class="product-info">
        <h2>{{ product.name }}</h2>
        <p>{{ product.description }}</p>
        <p>Material : {{ product.material }} </p>
        <router-link :to="'/singleBlog/' + product.id" > See More </router-link>
    </div>
</div>



</div>
</template>

<script>
import axios from 'axios'
export default{
    data(){
        return{
           products : []
          
        }
    },
    methods : {
        async fetchProduct(){
         const response =  await axios.get("https://655ca26325b76d9884fdac10.mockapi.io/products")
        this.products = response.data
        }
    },
    mounted(){
        this.fetchProduct()
    }
}

</script>

<style src="./Home.css">

</style>