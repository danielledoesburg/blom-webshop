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
                    <li class="nav-item"><a href="index.html" class="nav-link px-2 text-muted">Home</a></li>
                    <li class="nav-item"><a href="contact.html" class="nav-link px-2 text-muted">Contact</a></li>
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">FAQ</a></li>
                </ul>
                <ul class="nav flex-column col">
                    <li class="nav-item"><a href="about.html" class="nav-link px-2 text-muted">Over ons</a></li>
                    <li class="nav-item"><a href="organic.html" class="nav-link px-2 text-muted">100% biologisch</a></li>
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Onze leveranciers</a></li>
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
                        <p>Ontvang elke maand de laatste updates en aanbiedingen</p>
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
            return new Date().getFullYear();
        }
    }
})