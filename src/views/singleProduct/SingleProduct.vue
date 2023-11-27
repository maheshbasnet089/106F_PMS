<template>
      <div class="container">

<div class="product-card">
    <img :src="product.image" alt="Product 1">
    <div class="product-info">
        <h2>{{ product.name }}</h2>
        <p>{{ product.description }}</p>
        <p>Material : {{ product.material }} </p>
        <button @click="deleteProduct">Delete me</button>
        <button @click="$router.push('/editProduct/' + product.id)">Edit me</button>
      
    </div>
</div>



</div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return {
            product : {}
        }
    },
    methods : {
        async fetchProduct(){
            const productId = this.$route.params.id
        
            const response =  await axios.get("https://655ca26325b76d9884fdac10.mockapi.io/products/" + productId)
            this.product = response.data
        },

        async deleteProduct(){
           try{
            const productId = this.$route.params.id
            const response =  await axios.delete("https://655ca26325b76d9884fdac10.mockapi.io/products/" + productId)
            this.$router.push("/")
           }catch(e){
            alert(e.message)
           }
        }
    },
    mounted(){
        this.fetchProduct()
    }
}
</script>


<style src="./SingleProduct.css">

</style>