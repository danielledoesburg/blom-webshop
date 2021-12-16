Vue.component('app-header', {
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

        <a href="index.html">
            <h1 class="text-center text-nowrap">{{ company }}<img class="headerlogo flip-h" :src="logoImg" alt="">
            </h1>
        </a>

        <nav class="navbar navbar-expand-md navbar-light">
            <div class="container-fluid">

                <a class="navbar-brand" href="index.html"><img class="logo" :src="logoImg" alt=""></a>

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
                                <li v-for="subitem in item.children"><a @click="setFilter(subitem.id)" class="dropdown-item" href="#.html">{{subitem.title}}</a></li>
                            </ul>
                        </li>
                        
                        <li v-for="item in navItemsSingle" class="nav-item">
                            <a @click="setFilter(item.id)" class="nav-link">{{item.title}}</a>
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
        return {
        }
    },
    methods: {
        setFilter(category) {
            localStorage.setItem('filter', category)
            this.$root.$emit('new-filter', category)
        }
    },
    computed: {
        navItems() {
            let navItems = getCategories()

            navItems = navItems.filter(item => item.children.length > 1)

            return navItems
        },

        navItemsSingle() {
            let navItems = getCategories()

            navItems = navItems.filter(item => item.children.length === 1)

            navItems.forEach((item, index) => {
                navItems.push(item.children[0])
                navItems.splice(index, 1)
            })

            return navItems
        },
    }
})