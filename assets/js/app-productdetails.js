Vue.component('app_productdetails', {
    template: `
        <div class="container productpage">
            <div class="row">
                <div class="col">
                    <img class="img-fluid rounded mx-auto my-5 d-block" :src="productInfo.path" :alt="productInfo.title">
                </div>
                <div class="col my-5">
                    <h1>{{ productInfo.title }}</h1>
                    <p>{{ productInfo.info }}</p>
                    <p class="fs-3">{{ productInfo.priceM }}</p>
                    <div class="mt-5">
                        <span class="me-3 fs-5">aantal:</span> 
                        <button @click="decreaseQty" class="qty-btn" type="button" title="verhoog aantal" aria-label="decrease qty"> - </button>
                        <input v-model.number="qty" @keypress="numbersOnly($event)" class="qty-input p-1">
                        <button @click="increaseQty"class="qty-btn" type="button" title="verlaag aantal" aria-label="increase qty"> + </button>
                        <button @click="addToCart" class="add-btn no-focus-outline p-2 fs-5 ms-4"><i class="bi bi-cart-plus"></i> Toevoegen</button>
                    </div>
                </div>
            </div>
        </div>

    `,

    data() {
        return {
            qty: 1, 
        }
    },

    methods: {
        increaseQty() {
            this.qty++
        },

        decreaseQty() {
            if (this.qty > 1) {
                this.qty--
            }
        },

        numbersOnly(event) {
            event = (event) ? event : window.event;
            let key = event.key
            let code = event.code

            if (isNaN(key) || code == 'Space') {
                event.preventDefault()
              } else {
                return true
              }
        },
        
        addToCart: function (id) {
            bus.$emit('add_qty_to_cart', this.productInfo.id, this.qty)
        }
    },

    computed: {
        productInfo () {
            let productInfo = getProductInfo(this.$route.params.productid)
            productInfo.priceM = toMoney(productInfo.price)
            return productInfo
        }
    }
})