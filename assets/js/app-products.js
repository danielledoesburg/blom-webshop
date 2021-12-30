const VueMasonryPlugin = window["vue-masonry-plugin"].VueMasonryPlugin
Vue.use(VueMasonryPlugin)


Vue.component('app_products', {

    props: {},

    template: `
        <div>   
            <div v-if="products.length" class="mx-2" v-masonry transition-duration="0.2s" item-selector=".masonry-items">
                <div class="row mx-2 my-3">

                    <div v-for="product in products" v-masonry-tile :productid="product.productId" :key="product.id"
                        class="masonry-items mb-4 col-sm-6 col-md-4 col-xl-3 col-xxl-2">

                        <div class="card">
                            
                            <button v-if="!product.cartqty" @click="addToCart(product.id)" class="btn addtocart-btn no-focus-outline" type="button">
                                <i class="bi bi-cart-plus"></i>
                            </button>

                            <div v-else class="plus-minus">
                                <button @click="decreaseCartQty(product.id)" class="qty-btn" type="button" title="een stuk verwijderen" aria-label="remove piece"> - </button>
                                <span class="fs-5 p-1">{{product.cartqty}}</span>
                                <button @click="increaseCartQty(product.id)"class="qty-btn" type="button" title="een stuk toevoegen" aria-label="add piece"> + </button>
                            </div>

                            <router-link :to="{ name: 'product_details', params: { cat: product.catSlug, subcat: product.subcatSlug, product: product.product, productid: product.id}}">
                                <img class="card-img-bottom" :src="product.path" :alt="product.title">
                                <div class="overlay-moreinfo">
                                    <h5 class="card-title">{{ product.title}}</h5>
                                    <p class="card-text">{{ product.info }}</p>
                                </div>
                            
                            </router-link>
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
            cartProducts: []
        }
    },

    created() {
        bus.$on('new_cart', (cartProducts) => {
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
        },

        getSlugsBySubcatId: function (subcatId) {
            let catObj
            let subcatObj

            for(let cat of categories) {
                subcatObj = cat.children.find(subcat => subcat.id == subcatId)
                if (subcatObj) {
                    catObj = cat
                    break
                }
            }
            return {catSlug: catObj.slug, subcatSlug: subcatObj.slug}
            
        },
        
        getCatIdBySlug: function (slug) {
            let result
            categories.some(cat => result = cat.slug === slug ? cat : cat.children.find(subcat => subcat.slug == slug))
            if (result) {
                return result.id
            } else {
                return 0
            }
        },

        

        getSubcatIdsArray: function (catId) {
            let catObj = categories.find(cat => cat.id == catId)
            return catObj.children.map(sc => sc.id)
        },
    },

    computed: {

        products() {

            let productList = getProductData()
            let catId = this.getCatIdBySlug(this.$route.params.cat)
            let subcatId = this.getCatIdBySlug(this.$route.params.subcat)

            //filter products by (sub)cat
            if (subcatId) {

                productList = productList.filter(prod => prod.category == subcatId)

            } else if (catId) {

                let collectedSubcatIds = this.getSubcatIdsArray(catId)
                if (collectedSubcatIds && collectedSubcatIds.length) {
                    productList = productList.filter(prod => collectedSubcatIds.indexOf(prod.category) !== -1)
                }
            }

            //set cart qtys for products
            this.cartProducts.forEach(cartProd => {

                let i = getIndexById(productList, cartProd.id)
                if (i > -1) {
                    productList[i].cartqty = cartProd.qty
                }
            })

            //get (sub)cat slugs for routing
            productList.forEach(prod => {
                let slugs = this.getSlugsBySubcatId(prod.category)
                prod.catSlug = slugs.catSlug
                prod.subcatSlug = slugs.subcatSlug
            })

            return productList
        }
    }
})