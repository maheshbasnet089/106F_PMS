import {createRouter,createWebHistory} from 'vue-router'
import Home from '../views/home/Home.vue'
import SingleProduct from '../views/singleProduct/SingleProduct.vue'

const routes = [
    {
        path : "/",
        component : Home
    },
    {
        path : "/singleBlog/:id",
        component : SingleProduct
    }
   
]
const router = createRouter({
    history : createWebHistory(),
   routes 
})

export default router