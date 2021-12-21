const home = { template: '<app-products></app-products>' }
const infoPages = { template: '<app-infopages></app-infopages>'}
const products = {template: '<app-products></app-products>'}

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: home },
    { path: '/index.html', redirect: '/' },
    { path: '/home', redirect: '/' },

    { path: '/products/:cat', name: 'cat', component: products, props: true, 
        children: [{ path: ':subcat', name: 'subcat', component: products, props: true  }]},
    
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