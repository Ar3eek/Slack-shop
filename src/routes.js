const routes = [
    { path: '/', component: () => import('./pages/Home.vue') },
    {path: '/product', component: () => import('./pages/Product.vue') },
    {path: '/cart', component: () => import('./pages/Cart.vue') },
    {path: '/login', component: () => import('./pages/Login.vue') },
    {path: '/menu', component: () => import('./pages/Menu.vue') },


]

export default routes;