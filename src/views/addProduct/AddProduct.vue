<template>

    
  <div class="container">
    <div class="form-container">
      <form @submit.prevent="addProduct">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="product.name" name="name" required>

        <label for="image">Image (URL):</label>
        <input type="text" id="image" v-model="product.image" name="image" required>

        <label for="description">Description:</label>
        <textarea id="description" name="description" v-model="product.description" rows="4" required></textarea>

        <label for="material">Material:</label>
        <input type="text" id="material" name="material" v-model="product.material" required>

        <button type="submit">Submit</button>
      </form>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
export default{
    data(){
        return {
            product : {
                name : "",
                material : "",
                image : "",
                description : ""
            }
        }
    },
    methods : {
        async addProduct(){
            const response = await axios.post("https://655ca26325b76d9884fdac10.mockapi.io/products",this.product)
            if(response.status == 201){
                this.$router.push("/")
            }else{
                alert("Something went wrong")
            }
        }
    }
}
</script>

<style>
.container {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      margin-top: -90px;
    }

    .form-container {
      background-color: #fff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      max-width: 400px;
      width: 100%;
    }

    label {
      display: block;
      margin-bottom: 8px;
    }

    input, textarea {
      width: 100%;
      padding: 8px;
      margin-bottom: 16px;
      box-sizing: border-box;
    }

    button {
      background-color: #4caf50;
      color: #fff;
      padding: 10px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    button:hover {
      background-color: #45a049;
    }
</style>