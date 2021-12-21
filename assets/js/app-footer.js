Vue.component('app-footer', {
    props: {
        company: {
            type: String,
            required: true
        }
    },
    template: `   
    <div> 
        <div class="container py-2 px-5 my-3 justify-content-center">
            <div class="row border-top pt-2">
                <ul class="nav flex-column col">
                    <li class="nav-item"><a href="/" class="nav-link px-2 text-muted">Home</a></li>
                    <li v-for="item in col1" class="nav-item"><router-link :to="'/' + item.slug" class="nav-link px-2 text-muted">{{ item.title }}</router-link></li>
                
                </ul>
                <ul class="nav flex-column col">
                    <li v-for="item in col2" class="nav-item"><router-link :to="'/' + item.slug" class="nav-link px-2 text-muted">{{ item.title }}</router-link></li>
                </ul>
                <div class="flex-column col pt-2">
                    <p class="text-muted">volg ons</p>
                    <ul class="nav">
                        <li class="nav-item"><a href="http://www.twitter.com/" target="_blank"
                                class="nav-link px-2 text-muted"><i class="bi bi-twitter"></i></a>
                        </li>
                        <li class="nav-item"><a href="http://www.instagram.com/" target="_blank"
                                class="nav-link px-2 text-muted"><i class="bi bi-instagram"></i></a>
                        </li>
                        <li class="nav-item"><a href="http://www.facebook.com/" target="_blank"
                                class="nav-link px-2 text-muted"><i class="bi bi-facebook"></i></a>
                        </li>
                    </ul>

                </div>
                <div class="flex-column col pt-2">
                    <form>
                        <h5>Meld je aan voor onze nieuwsbrief</h5>
                        <p class="text-muted">Ontvang elke maand de laatste updates en aanbiedingen</p>
                        <div class="input-group border ps-1">
                            <label for="newsletter1" class="visually-hidden">E-mail</label>
                            <input type="email" class="form-control border-0 no-focus-outline" placeholder="E-mail"
                                aria-label="E-mail">
                            <button class="btn no-focus-outline" type="submit"><i class="bi bi-check"></i></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div class="container">
            <div class="row justify-content-center border-top">
                <p class="text-muted text-center pt-2">&copy; {{ currentYear }} {{ company }}</p>
            </div>
        </div>
    </div> 
    `,
    methods: {
    },
    computed: {
        currentYear() {
            return new Date().getFullYear()
        },
        middleIndex() {
            return Math.ceil(infoData.length / 2)
        },
        col1() {
            return infoData.slice(0, this.middleIndex-1); 
        },
        col2() {
            return infoData.slice(-this.middleIndex); 
        },
    }
})