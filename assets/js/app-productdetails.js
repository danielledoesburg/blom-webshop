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
            return getProductInfo(this.$route.params.productid)
        },
    }
})