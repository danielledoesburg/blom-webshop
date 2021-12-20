let bus = new Vue()

let app = new Vue({
    el: '#app',
    data: {
        company: companyName,
        logoImg: 'assets/images/bee.svg',
    }
})


Vue.config.debug = true
Vue.config.devtools = true
Vue.config.productionTip = false