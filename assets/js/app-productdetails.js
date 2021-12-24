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
                   
                </div>
            </div>
        </div>

    `,


    computed: {
        productInfo () {
            // let productInfo = getProductInfo(this.$route.params.productid)
            // let cartInfo = this.cartProducts.find(prod => prod.id == productInfo.id)
            // productInfo.amount = cartInfo.amount
            return getProductInfo(this.$route.params.productid)
        },
    }
})