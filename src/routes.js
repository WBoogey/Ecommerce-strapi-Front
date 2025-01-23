import { createRouter,createWebHistory } from "vue-router";
import Home from "./views/Home.vue";
import ProductDetails from "./views/ProductDetails.vue";
import CategoryBar from "./components/CategoryBar.vue";

const routes = [
  { 
    path : '/',
    name : Home,
    component : Home,
  },
  {
    path: '/category/:name',
    name: CategoryBar,
    component: Home, 
  },
  {
  path:'/productDetail/:slug',
  name : ProductDetails,
  component : ProductDetails
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;