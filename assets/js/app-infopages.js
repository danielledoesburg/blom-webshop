Vue.component('app_infopages', {
    props: {},
    template: `
        <div>
            <p class="fs-4 text-center pt-5">{{ info.title }}</p>
            <p class="text-center">{{ info.text }}</p>
        </div>
    `,
    data() {
        return {}
    },
    methods: {},
    computed: {
        info() {
            let currentPage = this.$route.path
            currentPage = currentPage.substring(currentPage.indexOf('/') + 1)
            return infoData.find(el => el.slug === currentPage)
        },
    },

})