Vue.component('app_cart', {
    template: `
        <div>
           <div> 
                <button class="btn border-3 btn-outline-light flip-h" id="cart-btn" type="button" data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                    <i class="bi bi-cart"></i>
                </button>
                <div v-show="cart.productCnt" id="cart-cnt" :class="{ focus: cartFocus }"data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                    {{cart.productCnt}}
                </div>
            </div>

            <div class="offcanvas offcanvas-end h-auto" data-bs-scroll="true" tabindex="-1" id="offcanvasRight"
                aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header">
                    <h5 id="offcanvasRightLabel">Wingelwagen</h5>
                    <button type="button" class="btn-close text-reset" title="sluiten" data-bs-dismiss="offcanvas"
                        aria-label="Close"></button>
                </div>
                <div class="offcanvas-body container">


                    <div class="row">
                        <div v-if="cart.products.length" class="cart">
                            <div v-for="product in cart.products" :key="product.id">
                                <div class="row border-top border-bottom py-1 me-auto hidden">
                                    <div class="col-2">
                                        <a class=" text-break" href="#">
                                            <img class="img-fluid cart-prod-img" alt="" :src="product.info.path"></a>
                                    </div>
                                    <div class="col-4 pt-1">
                                        <a class="row text-break text-reset text-decoration-none" href="#">{{product.info.title}}</a>
                                        <p class="row text-secondary cart-prod-price pt-1 mb-0">{{product.info.priceM}}</p>
                                    </div>
                                    <div class="col-3 px-0">
                                        <p><button @click="decreaseCartQty(product.id)" class="qty-btn" type="button" title="een stuk verwijderen" aria-label="remove piece"> - </button>
                                        <input v-model="product.qty" @keypress="numbersOnly($event)" @blur="qtyInput(product.id, product.qty)" class="qty-input p-1">
                                        <button @click="increaseCartQty(product.id)"class="qty-btn" type="button" title="een stuk toevoegen" aria-label="add piece"> + </button></p>
                                    </div>
                                    <div class="col-2 pt-1 px-0">
                                        <p class="text-break">{{product.totalM}}</p>
                                    </div>
                                    <div class="col-1 ps-0">
                                        <button @click="removeFromCart(product.id)" class="qty-btn" type="button" title="verwijderen" aria-label="remove"><i
                                                class="bi bi-trash"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-else>
                            <p class="fs-6 text-secondary text-center">Niets in je winkelwagen..</p>
                        </div>
                    </div>
                    <div class="row mt-5 me-auto">
                        <div class="col-4">
                            <p class="text-muted">{{ cart.productCnt }} artikelen</p>
                        </div>
                        <div class="col-4">
                            <p>Totaal artikelen: </p>
                            <p>Verzendkosten: </p>
                            <p class="fw-bold">Totaal: </p>
                        </div>
                        <div class="col-3 me-4 text-end">
                            <p>{{ cart.subTotalM }}</p>
                            <p>{{ cart.shippingCostsM }}</p>
                            <p class="border-top border-dark fw-bold">{{ cart.totalM }}</p>
                        </div>
                        <!-- <div class="col-1 ps-0 border"></div> -->
                    </div>
                    <div class="row mt-2 m-auto">
                        <button class="btn btn-outline-dark no-focus-outline">Winkelwagen overzicht</button>
                    </div>
                </div>
            </div>
        </div>
    `,

    data() {
        return {
            cart: {
                products: [],
                productCnt: 0,
                subTotal: 0,
                get hasShippingCosts() {
                    return (this.subTotal < freeShippingThreshold && this.productCnt > 0)
                },
                get shippingCosts() {
                    return (this.hasShippingCosts ? standardShippingCosts : 0)
                },
                get total() {
                    return (this.subTotal + this.shippingCosts)
                },
                get subTotalM() {
                    return toMoney(this.subTotal)
                },
                get shippingCostsM() {
                    return toMoney(this.shippingCosts)
                },
                get totalM() {
                    return toMoney(this.total)
                },
            },
            cartFocus: false,
            cartTimeoutIDs: []
        }
    },

    mounted() {
        this.getStoredCart()

        bus.$on('add_to_cart', (id) => {
            this.addToCart(id)
        })

        bus.$on('add_qty_to_cart', (id, qty) => {
            this.addToCart(id, qty)
        })

        bus.$on('decrease_cart_qty', (id, wait) => {
            this.decreaseCartQty(id, wait)
        })

        bus.$on('increase_cart_qty', (id) => {
            this.increaseCartQty(id)
        })
    },

    methods: {

        toggleCartFocus: function() {
            this.cartFocus = true

            setTimeout(
                function() {
                    this.cartFocus = false
                }.bind(this), 150)
        },

        createCartProdObj: function(productId, qty) {
            return {
                id: productId,
                qty: qty
            }
        },

        clearCartTimeout: function(productId) {
            if (this.cartTimeoutIDs[productId]) {
                clearTimeout(this.cartTimeoutIDs[productId])
                this.cartTimeoutIDs.splice(productId, 1);
            }
        },

        getStoredCart: function() {
            let lsCart = localStorage.getItem('cart')
            if (lsCart) {
                this.cart.products = JSON.parse(lsCart)
            }
            this.calculateCart()
        },

        calculateCart: function() {
            let productCnt = 0
            let subTotal = 0

            this.cart.products.forEach(prod => {

                prod.info = getProductInfo(prod.id)
                prod.info.priceM = toMoney(prod.info.price)
                prod.total = prod.qty * prod.info.price
                prod.totalM = toMoney(prod.total)

                productCnt += prod.qty
                subTotal += prod.total
            })

            this.cart.productCnt = productCnt
            this.cart.subTotal = subTotal

            bus.$emit('new_cart', this.cart.products)
        },

        saveCart: function() {
            localStorage.setItem('cart', JSON.stringify(this.cart.products))
            this.calculateCart()
        },

        addToCart: function(productId, qty = 1) {
            if (getIndexById(this.cart.products, productId) != -1) {
                this.increaseCartQty(productId, qty)

            } else {
                let newProdObj = this.createCartProdObj(productId, qty)
                this.cart.products.push(newProdObj)
                this.saveCart()
            }
            this.toggleCartFocus()
        },

        removeFromCart: function(productId) {
            let i = getIndexById(this.cart.products, productId)
            this.cart.products.splice(i, 1)
            this.saveCart()
        },

        removeQtyZero: function(productId, wait = true) {
            if (wait) {

                this.cartTimeoutIDs[productId] = setTimeout(function() {
                    let i = getIndexById(this.cart.products, productId)

                    if (this.cart.products[i].qty == 0) {
                        this.removeFromCart(productId)
                        this.clearCartTimeout(productId)
                    }
                }.bind(this), 2000)

            } else {
                this.removeFromCart(productId)
            }
        },

        decreaseCartQty: function(productId, wait) {
            let i = getIndexById(this.cart.products, productId)

            if (this.cart.products[i].qty > 0) {

                this.cart.products[i].qty--
                this.saveCart()

                if (this.cart.products[i].qty == 0) {
                    this.removeQtyZero(productId, wait)
                }
            }
            this.toggleCartFocus()
        },

        increaseCartQty: function(productId, qty = 1) {
            this.clearCartTimeout(productId)
            let i = getIndexById(this.cart.products, productId)
            this.cart.products[i].qty += qty
            this.saveCart()
            this.toggleCartFocus()
        },

        qtyInput: function(productId, qty) {

            if (qty == '') {
                qty = 0
            }

            qty = Number.parseInt(qty)

            this.clearCartTimeout(productId)
            let i = getIndexById(this.cart.products, productId)
            this.cart.products[i].qty = qty
            this.saveCart()

            if (qty == 0) {
                this.removeQtyZero(productId)
            } 
        },
    }
})