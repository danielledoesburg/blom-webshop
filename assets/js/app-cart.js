Vue.component('app-cart', {
    template: `
        <div>
            <button class="btn border-3 btn-outline-light flip-h" id="cartbtn" type="button" data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"><i class="bi bi-cart"></i></button>

            <div class="offcanvas show offcanvas-end h-auto" data-bs-scroll="true" tabindex="-1" id="offcanvasRight"
                aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header">
                    <h5 id="offcanvasRightLabel">Wingelwagen</h5>
                    <button type="button" class="btn-close text-reset" title="sluiten" data-bs-dismiss="offcanvas"
                        aria-label="Close"></button>
                </div>
                <div class="offcanvas-body container">


                    <div class="row">
                        <div v-if="cart.productCnt" class="cart">
                            <div v-for="product in cart.products">
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
                                        <p><button @click="decreaseCartQty(product.id)" class="cart-btn" type="button" title="een stuk verwijderen" aria-label="remove piece"> - </button>
                                        <span class="p-1">{{product.amount}}</span>
                                        <button @click="increaseCartQty(product.id)"class="cart-btn" type="button" title="een stuk toevoegen" aria-label="add piece"> + </button></p>
                                    </div>
                                    <div class="col-2 pt-1">
                                        <p class="text-break">{{product.totalM}}</p>
                                    </div>
                                    <div class="col-1 ps-0">
                                        <button @click="removeFromCart(product.id)" class="cart-btn" type="button" title="verwijderen" aria-label="remove"><i
                                                class="bi bi-trash"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div v-else>
                            <p class="fs-6 text-secondary text-center">Nog niets in je winkelwagen</p>
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
                        <button class="btn btn-outline-dark no-focus-outline">naar winkelwagen</button>
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
                shippingCosts: 0,
                total: 0,
                hasShippingCosts: false,
                get subTotalM() {
                    return toMoney(this.subTotal)
                },
                get shippingCostsM() {
                    return toMoney(this.shippingCosts)
                },
                get totalM() {
                    return toMoney(this.total)
                },
            }
        }
    },

    computed: {
        productList() {
            return getProducts()
        },
    },

    mounted() {
        this.getStoredCart()

        this.calculateCart()

        this.$root.$on('add_to_cart', (id) => {
            this.addToCart(id, 1)
        })
    },

    // watch: {
    //     cart(newCart) {
    //       localStorage.cart = newCart;
    //     }
    // },

    methods: {
        createCartProdObj: function (productId, amount) {
            return {
                id: productId,
                amount: amount
            }
        },

        getStoredCart: function () {
            let lsCart = localStorage.getItem('cart')
            if (lsCart) {
                this.cart.products = JSON.parse(lsCart)
            }
        },

        calculateCart: function () {
            if (this.cart.products) {
                let productCnt = 0
                let subTotal = 0

                this.cart.products.forEach(prod => {
                    prod.info = getProductInfo(prod.id)
                    prod.info.priceM = toMoney(prod.info.price)
                    prod.total = prod.amount * prod.info.price
                    prod.totalM = toMoney(prod.total)
                    productCnt += prod.amount
                    subTotal += prod.total
                })

                this.cart.productCnt = productCnt
                this.cart.subTotal = subTotal
                this.cart.hasShippingCosts = subTotal < freeShippingThreshold && productCnt > 0
                this.cart.shippingCosts = this.cart.hasShippingCosts ? shippingCosts : 0
                this.cart.total = (this.cart.subTotal + this.cart.shippingCosts)
                this.cart.subTotalM = toMoney(this.cart.subTotal),
                    this.cart.shippingCostsM = toMoney(this.cart.shippingCosts),
                    this.cart.totalM = toMoney(this.cart.total)
            }
        },

        saveCart: function () {
            localStorage.setItem('cart', JSON.stringify(this.cart.products))
            this.calculateCart()
        },


        addToCart: function (productId, amount) {

            if (!this.cart.products) { //Cart emty
                this.cart.products = [this.createCartProdObj(productId, amount)]

            } else { //Cart not empty)
                let i = getIndexById(this.cart.products, productId)
                if (i === -1) { //Product not yet in cart
                    let newProdObj = this.createCartProdObj(productId, amount)
                    this.cart.products.push(newProdObj)
                } else { //product already in cart
                    this.cart.products[i].amount += amount
                }
            }
            this.saveCart()
        },

        removeFromCart: function (productId) {
            let i = getIndexById(this.cart.products, productId)
            this.cart.products.splice(i, 1)
            this.saveCart()
        },

        decreaseCartQty: function (productId) {
            let i = getIndexById(this.cart.products, productId)
            if (this.cart.products[i].amount > 1) {
                this.cart.products[i].amount -= 1
                this.saveCart()
            } else {
                this.removeFromCart(productId)
            }
        },

        increaseCartQty: function (productId) {
            let i = getIndexById(this.cart.products, productId)
            this.cart.products[i].amount += 1
            this.saveCart()
        }
    }
})