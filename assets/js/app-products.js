const VueMasonryPlugin = window["vue-masonry-plugin"].VueMasonryPlugin
Vue.use(VueMasonryPlugin)


Vue.component('app-products', {

    props: {},

    template: `
    <div>
        <div v-if="products.length" class="mx-2" v-masonry transition-duration="0.2s" item-selector=".masonry-items">
            <div class="row mx-2 my-3">

                <div v-for="product in products" v-masonry-tile :productid="product.productId" :key="product.id"
                    class="masonry-items mb-4 col-sm-6 col-md-4 col-xl-3 col-xxl-2">

                    <div class="card">
                        <button 
                            @click="addToCart(product.id)" 
                            class="btn addtocart-btn no-focus-outline" type="button">
                            <i class="bi bi-cart-plus"></i></button>
                        <a href="productpage.html"><img class="card-img-bottom" :src="product.path"
                                :alt="product.title">
                            <div class="overlay-moreinfo">
                                <h5 class="card-title">{{ product.title }}</h5>
                                <p class="card-text">{{ product.info }}</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <p class="fs-4 text-center pt-5">Out of stock</p>
        </div>
    </div>
     `,

    data() {
        return {
            productFilter: null
        }
    },

    mounted() {
        bus.$on('new-filter', (category) => {
            this.productFilter = category
        })
    },

    methods: {
        addToCart: function (id) {
            bus.$emit('add_to_cart', id)
        }
    },

    computed: {

        products() {
            let products = getAllProducts()
            if (this.productFilter !== null) {
                products = products.filter(prod => prod.category == this.productFilter)
            }
            return products
        }
    }
})