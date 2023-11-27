import {createRouter,createWebHistory} from 'vue-router'
import Home from '../views/home/Home.vue'
import SingleProduct from '../views/singleProduct/SingleProduct.vue'
import AddProduct from "../views/addProduct/AddProduct.vue"
import EditProduct from "../views/editProduct/EditProduct.vue"

const routes = [
    {
        path : "/",
        component : Home
    },
    {
        path : "/singleProduct/:id",
        component : SingleProduct
    },
    {
        path:"/addProduct",
        component : AddProduct
    },
    {
        path : "/editProduct/:id",
        component : EditProduct
    }
   
]
const router = createRouter({
    history : createWebHistory(),
   routes 
})

export default router