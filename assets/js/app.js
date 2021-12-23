const home = { template: '<app_products></app_products>' }
const infoPages = { template: '<app_infopages></app_infopages>'}
const products = {template: '<app_products></app_products>'}
const productdetails = {template: '<app_productdetails></app_productdetails>'}

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: home },
    { path: '/index.html', redirect: '/' },
    { path: '/home', redirect: '/' },

    { path: '/products/:cat/', name: 'cat_products', component: products, props: true,},
    { path: '/products/:cat/:subcat', name: 'subcat_products', component: products, props: true,},
    { path: '/products/:cat/:subcat/:product' + '-' + ':productid', name: 'product_details', component: productdetails, props: true },
    { path: '/about', component: infoPages},
    { path: '/over-ons', redirect: '/about' },
    { path: '/overons', redirect: '/about' },
    { path: '/contact', component: infoPages },
    { path: '/faq', component: infoPages },
    { path: '/organic', component: infoPages },
    { path: '/biologisch', redirect: '/organic' },
    { path: '/suppliers', component: infoPages },
    { path: '/leveranciers', redirect: '/suppliers' },
    { path: '/boeren', redirect: '/suppliers' },
  ]
})


const bus = new Vue()

const app = new Vue({
    router,
    el: '#app',
    data: {
        company: companyName,
        logoImg: '/assets/images/bee.svg',
    },
})

Vue.config.debug = true
Vue.config.devtools = true
Vue.config.productionTip = false