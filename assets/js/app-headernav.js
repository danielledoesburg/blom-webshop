Vue.component('app_header', {
    props: {
        company: {
            type: String,
            required: true
        },
        logoImg: {
            type: String,
            required: true
        }
    },
    template: `
    <div class="container-fluid p-0 pt-3 ">

        <router-link to="/">
            <h1 class="text-center text-nowrap">{{ company }}<img class="headerlogo flip-h" :src="logoImg" alt="">
            </h1>
        </router-link>

        <nav class="navbar navbar-expand-md navbar-light">
            <div class="container-fluid">

                <router-link to="/" class="navbar-brand"><img class="logo" :src="logoImg" alt=""></router-link>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav">

                        <li v-for="item in navItems" class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false">{{ item.title }}</a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li v-for="subitem in item.children"><router-link :to="{ name: 'subcat_products', params: { cat: item.slug, subcat: subitem.slug}}" 
                                class="dropdown-item" href="#.html">{{subitem.title}}</router-link></li>
                            </ul>
                        </li>
                        
                        <li v-for="item in navItemsSingle" class="nav-item">
                            <router-link :to="{ name: 'subcat_products', params: { cat: item.slug, subcat: item.subcategorySlug }}" class="nav-link">{{item.subcategoryTitle}}</router-link>
                        </li>
                </div>
                <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <form class="d-flex">
                        <input class="form-control me-2 no-focus-outline" type="search" placeholder="Zoeken" aria-label="Search">
                        <button class="btn bg-light " type="submit"><i class="bi bi-search"></i></button>
                    </form>
                </div>
            </div>
        </nav>
    </div>    
    `,
    data() {
        return {}
    },

    methods: {
    },

    computed: {
        navItems() {
            let navItems = getCategories()

            navItems = navItems.filter(item => item.children.length > 1)

            return navItems
        },

        navItemsSingle() {
            let navItems = getCategories()

            navItems = navItems.filter(item => item.children.length == 1)

            navItems.forEach(item => {
                item.subcategoryTitle = item.children[0].title
                item.subcategorySlug = item.children[0].slug
            });

            return navItems
        },
    }
})