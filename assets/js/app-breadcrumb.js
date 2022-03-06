Vue.component('app_breadcrumb', {
    template: `
        <nav v-if="cat" class="container">
            <div class="row pt-1 pb-0"
                style="--bs-breadcrumb-divider: '>'"
                aria-label="breadcrumb">
                <ol class="breadcrumb breadcrumb-dividers-chevron justify-content-center mb-0">
                    <li class="breadcrumb-item"><router-link :to="{name: 'home'}">Home</router-link></li>
                    <li class="breadcrumb-item">
                        <router-link v-if="subcat" :to="{name: 'cat_products', cat: cat.slug}">{{ cat.title }}</router-link>
                        <span v-else>{{ cat.title }}</span>
                    </li>
                    <li  v-if="subcat" class="breadcrumb-item">
                        <router-link v-if="product" :to="{name: 'subcat_products', cat: cat.slug, subcat_products: subcat.slug}">{{ subcat.title }}</router-link>
                        <span v-else>{{ subcat.title }}</span>
                    </li>
                    <li v-if="product" class="breadcrumb-item">{{ product.title }}</li>
                </ol>
            </div>
        </nav>
    `,
    
    data() {
        return {      
        }
    },

    methods: {
        getCatBySlug: function (slug) {
            let result
            categories.some(cat => result = cat.slug === slug ? cat : cat.children.find(subcat => subcat.slug == slug))
            return result
        },
    },

    computed: {
        cat () {
            return this.getCatBySlug(this.$route.params.cat)
        },

        subcat () {
            return this.getCatBySlug(this.$route.params.subcat)
        },

        product () {
            return productData.find(prod => prod.id == this.$route.params.productid)
        },    
    }
})