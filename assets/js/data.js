const categories = [{
  id: 1,
  title: 'Bloemen en Planten',
  slug: 'bloemen-en-planten',
  children: [{
    id: 4,
    title: 'Bloemen',
    slug: 'bloemen'
  }, {
    id: 5,
    title: 'Planten',
    slug: 'planten'
  }, {
    id: 6,
    title: 'Zaden',
    slug: 'zaden'
  }, {
    id: 7,
    title: 'Bollen',
    slug: 'bollen'
  }, {
    id: 8,
    title: 'Droogbloemen',
    slug: 'droogbloemen'
  }]
}, {
  id: 2,
  title: 'Tuindieren',
  slug: 'tuindieren',
  children: [{
    id: 9,
    title: 'Insecten',
    slug: 'insecten'
  }, {
    id: 10,
    title: 'Vogels',
    slug: 'vogels'
  }, {
    id: 11,
    title: 'Egels',
    slug: 'egels'
  }, {
    id: 12,
    title: 'Eekhoorns',
    slug: 'eekhoorns'
  }]
}, {
  id: 3,
  title: `Cadeaus`,
  slug: 'cadeaus',
  children: [
    {
      id: 13,
      title: 'Cadeaupakketten',
      slug: 'cadeaupakketten'
    }
  ]
}]

const productData = [{
  id: 1,
  product: 'komkommerkruid',
  category: 4,
  title: 'Komkommerkruid',
  price: 3.95,
  path: '/assets/images/raw/komkommerkruid-flash-dantz-WWOLincoSrE-unsplash.jpg',
  infoshort: 'En hier staat een leuke tekst over het ding zodat je het gelijk wil kopen',
  info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ducimus, facere dolores quasi doloribus dolor itaque omnis ut eum, accusantium asperiores corporis provident id dolore esse voluptate eligendi ullam voluptatibus! Explicabo error atque repudiandae voluptatem distinctio doloribus pariatur, harum enim voluptatibus delectus, laborum dicta illo consequuntur? Itaque ex tempore eius inventore? In officia qui repudiandae esse error obcaecati dignissimos sequi? Corporis dignissimos ea, porro ducimus at ex odit dolores dicta fugit eos vitae dolore laboriosam unde ab cumque. Eius similique facere quae quod alias cum eaque animi magni numquam commodi!'
}, {
  id: 2,
  product: 'anjer',
  category: 4,
  title: 'Anjer',
  price: 3.95,
  path: '/assets/images/raw/anjer-the-new-york-public-library-VtRdrqBX2x0-unsplash.jpg',
  infoshort: 'En hier staat een leuke tekst over het ding zodat je het gelijk wil kopen',
  info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ducimus, facere dolores quasi doloribus dolor itaque omnis ut eum, accusantium asperiores corporis provident id dolore esse voluptate eligendi ullam voluptatibus! Explicabo error atque repudiandae voluptatem distinctio doloribus pariatur, harum enim voluptatibus delectus, laborum dicta illo consequuntur? Itaque ex tempore eius inventore? In officia qui repudiandae esse error obcaecati dignissimos sequi? Corporis dignissimos ea, porro ducimus at ex odit dolores dicta fugit eos vitae dolore laboriosam unde ab cumque. Eius similique facere quae quod alias cum eaque animi magni numquam commodi!'
}, {
  id: 3,
  product: 'vogelvoer4',
  category: 10,
  title: 'Vogelvoer',
  price: 0,
  path: '/assets/images/raw/pietje4-pexels-flavien-beauvais-6702244.jpg',
  infoshort: 'En hier staat een leuke tekst over het ding zodat je het gelijk wil kopen',
  info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ducimus, facere dolores quasi doloribus dolor itaque omnis ut eum, accusantium asperiores corporis provident id dolore esse voluptate eligendi ullam voluptatibus! Explicabo error atque repudiandae voluptatem distinctio doloribus pariatur, harum enim voluptatibus delectus, laborum dicta illo consequuntur? Itaque ex tempore eius inventore? In officia qui repudiandae esse error obcaecati dignissimos sequi? Corporis dignissimos ea, porro ducimus at ex odit dolores dicta fugit eos vitae dolore laboriosam unde ab cumque. Eius similique facere quae quod alias cum eaque animi magni numquam commodi!'
}, {
  id: 4,
  product: 'kogeldistel',
  category: 4,
  title: 'Kogeldistel',
  price: 3.95,
  path: '/assets/images/raw/bbee2-pexels-michael-hodgins-553251.jpg',
  infoshort: 'En hier staat een leuke tekst over het ding zodat je het gelijk wil kopen',
  info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ducimus, facere dolores quasi doloribus dolor itaque omnis ut eum, accusantium asperiores corporis provident id dolore esse voluptate eligendi ullam voluptatibus! Explicabo error atque repudiandae voluptatem distinctio doloribus pariatur, harum enim voluptatibus delectus, laborum dicta illo consequuntur? Itaque ex tempore eius inventore? In officia qui repudiandae esse error obcaecati dignissimos sequi? Corporis dignissimos ea, porro ducimus at ex odit dolores dicta fugit eos vitae dolore laboriosam unde ab cumque. Eius similique facere quae quod alias cum eaque animi magni numquam commodi!'
}, {
  id: 5,
  product: 'zonnehoed',
  category: 4,
  title: 'Zonnehoed',
  price: 3.95,
  path: '/assets/images/raw/bbee3-michelle-atkinson-aYgTkQRVUAk-unsplash.jpg',
  infoshort: 'En hier staat een leuke tekst over het ding zodat je het gelijk wil kopen',
  info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ducimus, facere dolores quasi doloribus dolor itaque omnis ut eum, accusantium asperiores corporis provident id dolore esse voluptate eligendi ullam voluptatibus! Explicabo error atque repudiandae voluptatem distinctio doloribus pariatur, harum enim voluptatibus delectus, laborum dicta illo consequuntur? Itaque ex tempore eius inventore? In officia qui repudiandae esse error obcaecati dignissimos sequi? Corporis dignissimos ea, porro ducimus at ex odit dolores dicta fugit eos vitae dolore laboriosam unde ab cumque. Eius similique facere quae quod alias cum eaque animi magni numquam commodi!'
}, {
  id: 6,
  product: 'bloem1',
  category: 4,
  title: 'Ook een bloem',
  price: 3.95,
  path: '/assets/images/raw/bbee-pexels-kat-smith-736848.jpg',
  infoshort: 'En hier staat een leuke tekst over het ding zodat je het gelijk wil kopen',
  info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ducimus, facere dolores quasi doloribus dolor itaque omnis ut eum, accusantium asperiores corporis provident id dolore esse voluptate eligendi ullam voluptatibus! Explicabo error atque repudiandae voluptatem distinctio doloribus pariatur, harum enim voluptatibus delectus, laborum dicta illo consequuntur? Itaque ex tempore eius inventore? In officia qui repudiandae esse error obcaecati dignissimos sequi? Corporis dignissimos ea, porro ducimus at ex odit dolores dicta fugit eos vitae dolore laboriosam unde ab cumque. Eius similique facere quae quod alias cum eaque animi magni numquam commodi!'
}, {
  id: 8,
  product: 'bloemenveld3',
  category: 4,
  title: 'Bloemenveld',
  price: 3.95,
  path: '/assets/images/raw/bloemenveld3-yue-su-Qdqd7Z9CuNE-unsplash.jpg',
  infoshort: 'En hier staat een leuke tekst over het ding zodat je het gelijk wil kopen',
  info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ducimus, facere dolores quasi doloribus dolor itaque omnis ut eum, accusantium asperiores corporis provident id dolore esse voluptate eligendi ullam voluptatibus! Explicabo error atque repudiandae voluptatem distinctio doloribus pariatur, harum enim voluptatibus delectus, laborum dicta illo consequuntur? Itaque ex tempore eius inventore? In officia qui repudiandae esse error obcaecati dignissimos sequi? Corporis dignissimos ea, porro ducimus at ex odit dolores dicta fugit eos vitae dolore laboriosam unde ab cumque. Eius similique facere quae quod alias cum eaque animi magni numquam commodi!'
}, {
  id: 9,
  product: 'bloemenveld1',
  category: 4,
  title: 'Bloemenveld',
  price: 3.95,
  path: '/assets/images/raw/bloemenveld-pexels-pixabay-158756.jpg',
  infoshort: 'En hier staat een leuke tekst over het ding zodat je het gelijk wil kopen',
  info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ducimus, facere dolores quasi doloribus dolor itaque omnis ut eum, accusantium asperiores corporis provident id dolore esse voluptate eligendi ullam voluptatibus! Explicabo error atque repudiandae voluptatem distinctio doloribus pariatur, harum enim voluptatibus delectus, laborum dicta illo consequuntur? Itaque ex tempore eius inventore? In officia qui repudiandae esse error obcaecati dignissimos sequi? Corporis dignissimos ea, porro ducimus at ex odit dolores dicta fugit eos vitae dolore laboriosam unde ab cumque. Eius similique facere quae quod alias cum eaque animi magni numquam commodi!'
}, {
  id: 10,
  product: 'lavendel',
  category: 4,
  title: 'Lavendel',
  price: 3.95,
  path: '/assets/images/raw/butterfly2-dan-freeman-u1YMWMJzGsY-unsplash.jpg',
  infoshort: 'En hier staat een leuke tekst over het ding zodat je het gelijk wil kopen',
  info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ducimus, facere dolores quasi doloribus dolor itaque omnis ut eum, accusantium asperiores corporis provident id dolore esse voluptate eligendi ullam voluptatibus! Explicabo error atque repudiandae voluptatem distinctio doloribus pariatur, harum enim voluptatibus delectus, laborum dicta illo consequuntur? Itaque ex tempore eius inventore? In officia qui repudiandae esse error obcaecati dignissimos sequi? Corporis dignissimos ea, porro ducimus at ex odit dolores dicta fugit eos vitae dolore laboriosam unde ab cumque. Eius similique facere quae quod alias cum eaque animi magni numquam commodi!'
}, {
  id: 11,
  product: 'ijzerhard',
  category: 4,
  title: 'IJzerhard',
  price: 3.95,
  path: '/assets/images/raw/butterfly-sam-mgrdichian-mBKmDVAMdHQ-unsplash.jpg',
  infoshort: 'En hier staat een leuke tekst over het ding zodat je het gelijk wil kopen',
  info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ducimus, facere dolores quasi doloribus dolor itaque omnis ut eum, accusantium asperiores corporis provident id dolore esse voluptate eligendi ullam voluptatibus! Explicabo error atque repudiandae voluptatem distinctio doloribus pariatur, harum enim voluptatibus delectus, laborum dicta illo consequuntur? Itaque ex tempore eius inventore? In officia qui repudiandae esse error obcaecati dignissimos sequi? Corporis dignissimos ea, porro ducimus at ex odit dolores dicta fugit eos vitae dolore laboriosam unde ab cumque. Eius similique facere quae quod alias cum eaque animi magni numquam commodi!'
}, {
  id: 12,
  product: 'dahlia1',
  category: 4,
  title: 'Dahlia',
  price: 3.95,
  path: '/assets/images/raw/dahlia1-pexels-ingo-joseph-35647.jpg',
  infoshort: 'En hier staat een leuke tekst over het ding zodat je het gelijk wil kopen',
  info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ducimus, facere dolores quasi doloribus dolor itaque omnis ut eum, accusantium asperiores corporis provident id dolore esse voluptate eligendi ullam voluptatibus! Explicabo error atque repudiandae voluptatem distinctio doloribus pariatur, harum enim voluptatibus delectus, laborum dicta illo consequuntur? Itaque ex tempore eius inventore? In officia qui repudiandae esse error obcaecati dignissimos sequi? Corporis dignissimos ea, porro ducimus at ex odit dolores dicta fugit eos vitae dolore laboriosam unde ab cumque. Eius similique facere quae quod alias cum eaque animi magni numquam commodi!'
}, {
  id: 13,
  product: 'dahlia2',
  category: 4,
  title: 'Dahlia',
  price: 3.95,
  path: '/assets/images/raw/dahlia2-pexels-marianna-ole-1038292.jpg',
  infoshort: 'En hier staat een leuke tekst over het ding zodat je het gelijk wil kopen',
  info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ducimus, facere dolores quasi doloribus dolor itaque omnis ut eum, accusantium asperiores corporis provident id dolore esse voluptate eligendi ullam voluptatibus! Explicabo error atque repudiandae voluptatem distinctio doloribus pariatur, harum enim voluptatibus delectus, laborum dicta illo consequuntur? Itaque ex tempore eius inventore? In officia qui repudiandae esse error obcaecati dignissimos sequi? Corporis dignissimos ea, porro ducimus at ex odit dolores dicta fugit eos vitae dolore laboriosam unde ab cumque. Eius similique facere quae quod alias cum eaque animi magni numquam commodi!'
}, {
  id: 14,
  product: 'dahlia3',
  category: 4,
  title: 'Dahlia',
  price: 3.95,
  path: '/assets/images/raw/dahlia3-evgeniya-borovska-xYO238versE-unsplash.jpg',
  infoshort: 'En hier staat een leuke tekst over het ding zodat je het gelijk wil kopen',
  info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ducimus, facere dolores quasi doloribus dolor itaque omnis ut eum, accusantium asperiores corporis provident id dolore esse voluptate eligendi ullam voluptatibus! Explicabo error atque repudiandae voluptatem distinctio doloribus pariatur, harum enim voluptatibus delectus, laborum dicta illo consequuntur? Itaque ex tempore eius inventore? In officia qui repudiandae esse error obcaecati dignissimos sequi? Corporis dignissimos ea, porro ducimus at ex odit dolores dicta fugit eos vitae dolore laboriosam unde ab cumque. Eius similique facere quae quod alias cum eaque animi magni numquam commodi!'
}, {
  id: 15,
  product: 'dahlia4',
  category: 4,
  title: 'Dahlia',
  price: 3.95,
  path: '/assets/images/raw/dahlia4-trenton-stevens-iZu5rAKOspM-unsplash.jpg',
  infoshort: 'En hier staat een leuke tekst over het ding zodat je het gelijk wil kopen',
  info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ducimus, facere dolores quasi doloribus dolor itaque omnis ut eum, accusantium asperiores corporis provident id dolore esse voluptate eligendi ullam voluptatibus! Explicabo error atque repudiandae voluptatem distinctio doloribus pariatur, harum enim voluptatibus delectus, laborum dicta illo consequuntur? Itaque ex tempore eius inventore? In officia qui repudiandae esse error obcaecati dignissimos sequi? Corporis dignissimos ea, porro ducimus at ex odit dolores dicta fugit eos vitae dolore laboriosam unde ab cumque. Eius similique facere quae quod alias cum eaque animi magni numquam commodi!'
}, {
  id: 16,
  product: 'droogbloemen1',
  category: 8,
  title: 'Droogbloemen',
  price: 3.95,
  path: '/assets/images/raw/droogbloemen1-jana-niggeloh-XTJo9zH-Wvs-unsplash.jpg',
  infoshort: 'En hier staat een leuke tekst over het ding zodat je het gelijk wil kopen',
  info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ducimus, facere dolores quasi doloribus dolor itaque omnis ut eum, accusantium asperiores corporis provident id dolore esse voluptate eligendi ullam voluptatibus! Explicabo error atque repudiandae voluptatem distinctio doloribus pariatur, harum enim voluptatibus delectus, laborum dicta illo consequuntur? Itaque ex tempore eius inventore? In officia qui repudiandae esse error obcaecati dignissimos sequi? Corporis dignissimos ea, porro ducimus at ex odit dolores dicta fugit eos vitae dolore laboriosam unde ab cumque. Eius similique facere quae quod alias cum eaque animi magni numquam commodi!'
}, {
  id: 17,
  product: 'droogboemen2',
  category: 8,
  title: 'Droogboemen',
  price: 3.95,
  path: '/assets/images/raw/droogbloemen2-pexels-flora-westbrook-4019667.jpg',
  infoshort: 'En hier staat een leuke tekst over het ding zodat je het gelijk wil kopen',
  info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ducimus, facere dolores quasi doloribus dolor itaque omnis ut eum, accusantium asperiores corporis provident id dolore esse voluptate eligendi ullam voluptatibus! Explicabo error atque repudiandae voluptatem distinctio doloribus pariatur, harum enim voluptatibus delectus, laborum dicta illo consequuntur? Itaque ex tempore eius inventore? In officia qui repudiandae esse error obcaecati dignissimos sequi? Corporis dignissimos ea, porro ducimus at ex odit dolores dicta fugit eos vitae dolore laboriosam unde ab cumque. Eius similique facere quae quod alias cum eaque animi magni numquam commodi!'
}, {
  id: 18,
  product: 'droogbloemen3',
  category: 8,
  title: 'Droogbloemen',
  price: 3.95,
  path: '/assets/images/raw/droogbloemen3-pexels-inga-seliverstova-4066759.jpg',
  infoshort: 'En hier staat een leuke tekst over het ding zodat je het gelijk wil kopen',
  info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ducimus, facere dolores quasi doloribus dolor itaque omnis ut eum, accusantium asperiores corporis provident id dolore esse voluptate eligendi ullam voluptatibus! Explicabo error atque repudiandae voluptatem distinctio doloribus pariatur, harum enim voluptatibus delectus, laborum dicta illo consequuntur? Itaque ex tempore eius inventore? In officia qui repudiandae esse error obcaecati dignissimos sequi? Corporis dignissimos ea, porro ducimus at ex odit dolores dicta fugit eos vitae dolore laboriosam unde ab cumque. Eius similique facere quae quod alias cum eaque animi magni numquam commodi!'
}, {
  id: 19,
  product: 'blauwedruifjes',
  category: 4,
  title: 'Blauwe Druifjes',
  price: 3.95,
  path: '/assets/images/raw/druifjes-yoksel-zok-URHLfFiByOA-unsplash.jpg',
  infoshort: 'En hier staat een leuke tekst over het ding zodat je het gelijk wil kopen',
  info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ducimus, facere dolores quasi doloribus dolor itaque omnis ut eum, accusantium asperiores corporis provident id dolore esse voluptate eligendi ullam voluptatibus! Explicabo error atque repudiandae voluptatem distinctio doloribus pariatur, harum enim voluptatibus delectus, laborum dicta illo consequuntur? Itaque ex tempore eius inventore? In officia qui repudiandae esse error obcaecati dignissimos sequi? Corporis dignissimos ea, porro ducimus at ex odit dolores dicta fugit eos vitae dolore laboriosam unde ab cumque. Eius similique facere quae quod alias cum eaque animi magni numquam commodi!'
}, {
  id: 20,
  product: 'zonnehoed2',
  category: 4,
  title: 'Zonnehoed',
  price: 3.95,
  path: '/assets/images/raw/ecinacea-stephan-h-DI3Zidi6HFY-unsplash.jpg',
  infoshort: 'En hier staat een leuke tekst over het ding zodat je het gelijk wil kopen',
  info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ducimus, facere dolores quasi doloribus dolor itaque omnis ut eum, accusantium asperiores corporis provident id dolore esse voluptate eligendi ullam voluptatibus! Explicabo error atque repudiandae voluptatem distinctio doloribus pariatur, harum enim voluptatibus delectus, laborum dicta illo consequuntur? Itaque ex tempore eius inventore? In officia qui repudiandae esse error obcaecati dignissimos sequi? Corporis dignissimos ea, porro ducimus at ex odit dolores dicta fugit eos vitae dolore laboriosam unde ab cumque. Eius similique facere quae quod alias cum eaque animi magni numquam commodi!'
}, {
  id: 21,
  product: 'eekhoorn2',
  category: 12,
  title: 'Eekhoorn voederhuisje',
  price: 3.95,
  path: '/assets/images/raw/eekhoorn2-pexels-dan-hussey-4243614.jpg',
  infoshort: 'En hier staat een leuke tekst over het ding zodat je het gelijk wil kopen',
  info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ducimus, facere dolores quasi doloribus dolor itaque omnis ut eum, accusantium asperiores corporis provident id dolore esse voluptate eligendi ullam voluptatibus! Explicabo error atque repudiandae voluptatem distinctio doloribus pariatur, harum enim voluptatibus delectus, laborum dicta illo consequuntur? Itaque ex tempore eius inventore? In officia qui repudiandae esse error obcaecati dignissimos sequi? Corporis dignissimos ea, porro ducimus at ex odit dolores dicta fugit eos vitae dolore laboriosam unde ab cumque. Eius similique facere quae quod alias cum eaque animi magni numquam commodi!'
}, {
  id: 22,
  product: 'eekhoorn3',
  category: 12,
  title: 'Eekhoorn voederhuisje',
  price: 3.95,
  path: '/assets/images/raw/eekhoorn3-cameron-wilkins-ohcyxjW9oSo-unsplash.jpg',
  infoshort: 'En hier staat een leuke tekst over het ding zodat je het gelijk wil kopen',
  info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ducimus, facere dolores quasi doloribus dolor itaque omnis ut eum, accusantium asperiores corporis provident id dolore esse voluptate eligendi ullam voluptatibus! Explicabo error atque repudiandae voluptatem distinctio doloribus pariatur, harum enim voluptatibus delectus, laborum dicta illo consequuntur? Itaque ex tempore eius inventore? In officia qui repudiandae esse error obcaecati dignissimos sequi? Corporis dignissimos ea, porro ducimus at ex odit dolores dicta fugit eos vitae dolore laboriosam unde ab cumque. Eius similique facere quae quod alias cum eaque animi magni numquam commodi!'
}, {
  id: 23,
  product: 'eekhoorn1',
  category: 12,
  title: 'Eekhoorn voederhuisje',
  price: 3.95,
  path: '/assets/images/raw/eekhoorn-pexels-john-thorne-5282391.jpg',
  infoshort: 'En hier staat een leuke tekst over het ding zodat je het gelijk wil kopen',
  info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ducimus, facere dolores quasi doloribus dolor itaque omnis ut eum, accusantium asperiores corporis provident id dolore esse voluptate eligendi ullam voluptatibus! Explicabo error atque repudiandae voluptatem distinctio doloribus pariatur, harum enim voluptatibus delectus, laborum dicta illo consequuntur? Itaque ex tempore eius inventore? In officia qui repudiandae esse error obcaecati dignissimos sequi? Corporis dignissimos ea, porro ducimus at ex odit dolores dicta fugit eos vitae dolore laboriosam unde ab cumque. Eius similique facere quae quod alias cum eaque animi magni numquam commodi!'
}, {
  id: 24,
  product: 'insectenhotel',
  category: 9,
  title: 'Insectenhotel',
  price: 3.95,
  path: '/assets/images/raw/hotel-trac-vu-k_I2T1Ind6I-unsplash.jpg',
  infoshort: 'En hier staat een leuke tekst over het ding zodat je het gelijk wil kopen',
  info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ducimus, facere dolores quasi doloribus dolor itaque omnis ut eum, accusantium asperiores corporis provident id dolore esse voluptate eligendi ullam voluptatibus! Explicabo error atque repudiandae voluptatem distinctio doloribus pariatur, harum enim voluptatibus delectus, laborum dicta illo consequuntur? Itaque ex tempore eius inventore? In officia qui repudiandae esse error obcaecati dignissimos sequi? Corporis dignissimos ea, porro ducimus at ex odit dolores dicta fugit eos vitae dolore laboriosam unde ab cumque. Eius similique facere quae quod alias cum eaque animi magni numquam commodi!'
}, {
  id: 25,
  product: 'kogeldistel2',
  category: 4,
  title: 'Kogeldistel',
  price: 3.95,
  path: '/assets/images/raw/kogeldistel-flower-master-U1PF4HUcQ8A-unsplash.jpg',
  infoshort: 'En hier staat een leuke tekst over het ding zodat je het gelijk wil kopen',
  info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ducimus, facere dolores quasi doloribus dolor itaque omnis ut eum, accusantium asperiores corporis provident id dolore esse voluptate eligendi ullam voluptatibus! Explicabo error atque repudiandae voluptatem distinctio doloribus pariatur, harum enim voluptatibus delectus, laborum dicta illo consequuntur? Itaque ex tempore eius inventore? In officia qui repudiandae esse error obcaecati dignissimos sequi? Corporis dignissimos ea, porro ducimus at ex odit dolores dicta fugit eos vitae dolore laboriosam unde ab cumque. Eius similique facere quae quod alias cum eaque animi magni numquam commodi!'
}, {
  id: 26,
  product: 'waterlelie',
  category: 4,
  title: 'Waterlelie',
  price: 3.95,
  path: '/assets/images/raw/lelie-pexels-sharon-hoo-5471431.jpg',
  infoshort: 'En hier staat een leuke tekst over het ding zodat je het gelijk wil kopen',
  info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ducimus, facere dolores quasi doloribus dolor itaque omnis ut eum, accusantium asperiores corporis provident id dolore esse voluptate eligendi ullam voluptatibus! Explicabo error atque repudiandae voluptatem distinctio doloribus pariatur, harum enim voluptatibus delectus, laborum dicta illo consequuntur? Itaque ex tempore eius inventore? In officia qui repudiandae esse error obcaecati dignissimos sequi? Corporis dignissimos ea, porro ducimus at ex odit dolores dicta fugit eos vitae dolore laboriosam unde ab cumque. Eius similique facere quae quod alias cum eaque animi magni numquam commodi!'
}, {
  id: 27,
  product: 'lelietjevandalen',
  category: 4,
  title: 'Lelietje-van-dalen',
  price: 3.95,
  path: '/assets/images/raw/lelietjevandalen-pexels-eugenia-8162400.jpg',
  infoshort: 'En hier staat een leuke tekst over het ding zodat je het gelijk wil kopen',
  info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ducimus, facere dolores quasi doloribus dolor itaque omnis ut eum, accusantium asperiores corporis provident id dolore esse voluptate eligendi ullam voluptatibus! Explicabo error atque repudiandae voluptatem distinctio doloribus pariatur, harum enim voluptatibus delectus, laborum dicta illo consequuntur? Itaque ex tempore eius inventore? In officia qui repudiandae esse error obcaecati dignissimos sequi? Corporis dignissimos ea, porro ducimus at ex odit dolores dicta fugit eos vitae dolore laboriosam unde ab cumque. Eius similique facere quae quod alias cum eaque animi magni numquam commodi!'
}, {
  id: 28,
  product: 'vogelvoer2',
  category: 10,
  title: 'Vogelvoer',
  price: 3.95,
  path: '/assets/images/raw/pietje2-pexels-thomas-shockey-6367364.jpg',
  infoshort: 'En hier staat een leuke tekst over het ding zodat je het gelijk wil kopen',
  info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ducimus, facere dolores quasi doloribus dolor itaque omnis ut eum, accusantium asperiores corporis provident id dolore esse voluptate eligendi ullam voluptatibus! Explicabo error atque repudiandae voluptatem distinctio doloribus pariatur, harum enim voluptatibus delectus, laborum dicta illo consequuntur? Itaque ex tempore eius inventore? In officia qui repudiandae esse error obcaecati dignissimos sequi? Corporis dignissimos ea, porro ducimus at ex odit dolores dicta fugit eos vitae dolore laboriosam unde ab cumque. Eius similique facere quae quod alias cum eaque animi magni numquam commodi!'
}, {
  id: 29,
  product: 'vogelvoer3',
  category: 10,
  title: 'Vogelvoer',
  price: 3.95,
  path: '/assets/images/raw/pietje3-pexels-john-thorne-8720721.jpg',
  infoshort: 'En hier staat een leuke tekst over het ding zodat je het gelijk wil kopen',
  info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ducimus, facere dolores quasi doloribus dolor itaque omnis ut eum, accusantium asperiores corporis provident id dolore esse voluptate eligendi ullam voluptatibus! Explicabo error atque repudiandae voluptatem distinctio doloribus pariatur, harum enim voluptatibus delectus, laborum dicta illo consequuntur? Itaque ex tempore eius inventore? In officia qui repudiandae esse error obcaecati dignissimos sequi? Corporis dignissimos ea, porro ducimus at ex odit dolores dicta fugit eos vitae dolore laboriosam unde ab cumque. Eius similique facere quae quod alias cum eaque animi magni numquam commodi!'
}, {
  id: 30,
  product: 'tulpen',
  category: 4,
  title: 'Tulpen',
  price: 3.95,
  path: '/assets/images/raw/tulpen-yoksel-zok-2qirUiysnbg-unsplash.jpg',
  infoshort: 'En hier staat een leuke tekst over het ding zodat je het gelijk wil kopen',
  info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ducimus, facere dolores quasi doloribus dolor itaque omnis ut eum, accusantium asperiores corporis provident id dolore esse voluptate eligendi ullam voluptatibus! Explicabo error atque repudiandae voluptatem distinctio doloribus pariatur, harum enim voluptatibus delectus, laborum dicta illo consequuntur? Itaque ex tempore eius inventore? In officia qui repudiandae esse error obcaecati dignissimos sequi? Corporis dignissimos ea, porro ducimus at ex odit dolores dicta fugit eos vitae dolore laboriosam unde ab cumque. Eius similique facere quae quod alias cum eaque animi magni numquam commodi!'
}, {
  id: 31,
  product: 'vergeetmijnietje',
  category: 4,
  title: 'Vergeet-mij-nietje',
  price: 3.95,
  path: '/assets/images/raw/vergeetmenietjes-yoksel-zok-0lnREmmT3Cc-unsplash.jpg',
  infoshort: 'En hier staat een leuke tekst over het ding zodat je het gelijk wil kopen',
  info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ducimus, facere dolores quasi doloribus dolor itaque omnis ut eum, accusantium asperiores corporis provident id dolore esse voluptate eligendi ullam voluptatibus! Explicabo error atque repudiandae voluptatem distinctio doloribus pariatur, harum enim voluptatibus delectus, laborum dicta illo consequuntur? Itaque ex tempore eius inventore? In officia qui repudiandae esse error obcaecati dignissimos sequi? Corporis dignissimos ea, porro ducimus at ex odit dolores dicta fugit eos vitae dolore laboriosam unde ab cumque. Eius similique facere quae quod alias cum eaque animi magni numquam commodi!'
}, {
  id: 32,
  product: 'vingerhoedskruid',
  category: 4,
  title: 'Vingerhoedskruid',
  price: 3.95,
  path: '/assets/images/raw/vingerhoedskruid-elisa-way-H-aano6_ttE-unsplash.jpg',
  infoshort: 'En hier staat een leuke tekst over het ding zodat je het gelijk wil kopen',
  info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ducimus, facere dolores quasi doloribus dolor itaque omnis ut eum, accusantium asperiores corporis provident id dolore esse voluptate eligendi ullam voluptatibus! Explicabo error atque repudiandae voluptatem distinctio doloribus pariatur, harum enim voluptatibus delectus, laborum dicta illo consequuntur? Itaque ex tempore eius inventore? In officia qui repudiandae esse error obcaecati dignissimos sequi? Corporis dignissimos ea, porro ducimus at ex odit dolores dicta fugit eos vitae dolore laboriosam unde ab cumque. Eius similique facere quae quod alias cum eaque animi magni numquam commodi!'
}, {
  id: 33,
  product: 'vingerhoedskruid',
  category: 4,
  title: 'Vingerhoedskruid',
  price: 3.95,
  path: '/assets/images/raw/vingerhoedskuid-pexels-radovan-zierik.jpg',
  infoshort: 'En hier staat een leuke tekst over het ding zodat je het gelijk wil kopen',
  info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ducimus, facere dolores quasi doloribus dolor itaque omnis ut eum, accusantium asperiores corporis provident id dolore esse voluptate eligendi ullam voluptatibus! Explicabo error atque repudiandae voluptatem distinctio doloribus pariatur, harum enim voluptatibus delectus, laborum dicta illo consequuntur? Itaque ex tempore eius inventore? In officia qui repudiandae esse error obcaecati dignissimos sequi? Corporis dignissimos ea, porro ducimus at ex odit dolores dicta fugit eos vitae dolore laboriosam unde ab cumque. Eius similique facere quae quod alias cum eaque animi magni numquam commodi!'
}, {
  id: 34,
  product: 'cadeaupakket',
  category: 13,
  title: 'Cadeaupakket',
  price: 49.95,
  path: '/assets/images/raw/cadeaupakket-kari-shea-bC8klLU9vKA-unsplash.jpg',
  infoshort: 'En hier staat een leuke tekst over het ding zodat je het gelijk wil kopen',
  info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ducimus, facere dolores quasi doloribus dolor itaque omnis ut eum, accusantium asperiores corporis provident id dolore esse voluptate eligendi ullam voluptatibus! Explicabo error atque repudiandae voluptatem distinctio doloribus pariatur, harum enim voluptatibus delectus, laborum dicta illo consequuntur? Itaque ex tempore eius inventore? In officia qui repudiandae esse error obcaecati dignissimos sequi? Corporis dignissimos ea, porro ducimus at ex odit dolores dicta fugit eos vitae dolore laboriosam unde ab cumque. Eius similique facere quae quod alias cum eaque animi magni numquam commodi!'
}]



const infoData = [{
  title: 'Contact',
  slug: 'contact',
  text: 'contactinformatie'
}, {
  title: 'FAQ',
  slug: 'faq',
  text: `Q's and A's`
}, {
  title: 'Over ons',
  slug: 'about',
  text: 'info over Blom'
}, {
  title: '100% biologisch',
  slug: 'organic',
  text: 'info over hoe biologisch Blom is'
}, {
  title: 'Onze leveranciers',
  slug: 'suppliers',
  text: 'info over de boeren en leveranciers'
}, ]