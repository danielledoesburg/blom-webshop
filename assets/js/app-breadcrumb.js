Vue.component('app-breadcrumb', {
    template: `
        <nav v-if="productFilter" class="container">
            <div class="row pt-1 pb-0"
                style="--bs-breadcrumb-divider: '>'"
                aria-label="breadcrumb">
                <ol class="breadcrumb breadcrumb-dividers-chevron justify-content-center mb-0">
                    <li class="breadcrumb-item"><a href="index.html">Home</a></li>
                    
                </ol>
            </div>
        </nav>
    `,
    data() {
        return {
            productFilter: null,
        }
    },
    created() {
        bus.$on('new-filter', (category) => {
            this.productFilter = category
        })
    },
    computed: {
        tree () {
            let tree = [{name: 'home', slug: 'home' }]

            

            tree.push

            return tree
        },
    }
})