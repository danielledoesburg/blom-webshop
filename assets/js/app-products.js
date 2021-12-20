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
                            
                            <button v-if="!product.amount" @click="addToCart(product.id)" class="btn addtocart-btn no-focus-outline" type="button">
                                <i class="bi bi-cart-plus"></i>
                            </button>

                            <div v-else class="plus-minus">
                                <button @click="decreaseCartQty(product.id)" class="qty-btn" type="button" title="een stuk verwijderen" aria-label="remove piece"> - </button>
                                <span class="fs-5 p-1">{{product.amount}}</span>
                                <button @click="increaseCartQty(product.id)"class="qty-btn" type="button" title="een stuk toevoegen" aria-label="add piece"> + </button>
                            </div>

                            <a href="productpage.html">
                                <img class="card-img-bottom" :src="product.path" :alt="product.title">
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
            productFilter: null,
            cartProducts: []
        }
    },

    created() {
        bus.$on('new-filter', (category) => {
            this.productFilter = category
        })
        bus.$on('new-cart', (cartProducts) => {
            this.cartProducts = cartProducts
        })
    },

    methods: {
        addToCart: function (id) {
            bus.$emit('add_to_cart', id)
        },
        decreaseCartQty: function (id) {
            bus.$emit('decrease_cart_qty', id, false)
        },
        increaseCartQty: function (id) {
            bus.$emit('increase_cart_qty', id)
        }
    },

    computed: {

        products() { 

            //get all products 
            let productList = getProductData()                                                    

            //set filter if available
            if (this.productFilter !== null) {
                productList = productList.filter(prod => prod.category == this.productFilter)
            }

            //set cart amounts
            this.cartProducts.forEach(cartProd => {
                
                let i = getIndexById(productList, cartProd.id)
                if (i > -1) {
                    productList[i].amount = cartProd.amount
                }
            })
            return productList
        }
    }
})