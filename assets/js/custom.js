//MAKE PRODUCT CARDS

function getProducts(type) {
    if (products.some(prod => prod.type === type)) {
        return products.filter(prod => prod.type === type)
    } else if (type === 'index' || type === '/') {
        return products
    } else {
        return null
    }
}



//CART

const lsCart = 'cart'

function getLsCart() {
    return JSON.parse(localStorage.getItem(lsCart))
}

function createProdObj(productId, amount) {
    return {
        productId: productId,
        amount: amount
    }
}

function saveCart(cart) {
    localStorage.setItem(lsCart, JSON.stringify(cart))
}

function getProductIndex(prodArray, productId) {
    return prodArray.findIndex(prod => prod.productId == productId)
}

function addToCartAr(cart, productId, amount) {
    newProdObj = createProdObj(productId, amount)
    cart.push(newProdObj)
    return cart
}

function updateLsCart(productId, amount) {
    let cart = getLsCart()
    let newAmount

    if (cart === null) { //Cart emty

        cart = [createProdObj(productId, amount)]
        saveCart(cart)
        newAmount = amount

    } else { //Cart not empty

        let prodIndex = getProductIndex(cart, productId)

        if (prodIndex === -1) { //Product not yet in cart

            cart = addToCartAr(cart, productId, amount)
            saveCart(cart)

        } else { //product already in cart

            newAmount = cart[prodIndex].amount += amount
            saveCart(cart)
        }
    }
    return newAmount
}

function updateHtmlCart(productId, amount) {
    const cartDiv = document.querySelector('.cart')
    let prodDiv = document.querySelector(`.cart > div[data-productid = "${productId}"]`)

    if (prodDiv === null) {

        const prodObj = products[getProductIndex(products, productId)]

        prodDiv = document.createElement('div')
        prodDiv.setAttribute('data-productid', productId)

        prodDiv.innerHTML = cartTemplate.replace('{productid}', productId).replace('{product-url}', '#').replace('{img-alt}', prodObj.title).replace('{thumbnail-url}', prodObj.path).replace('{product-url}', '#').replace('{product-title}', prodObj.title).replace('{amount}', amount).replace('{price}', '&euro; ' + prodObj.price)

        cartDiv.appendChild(prodDiv)

    } else {

        console.log('update mandje')
        console.log(prodDiv)

    }

}

function createCart() {
    const cart = getLsCart()

    if (cart) {
        cart.forEach(prod => {
            updateHtmlCart(prod.productId, prod.amount)
        })
    }
}

createCart()

function addToCart() {
    let productId = this.parentElement.parentElement.getAttribute('data-productid')
    let amount = 1

    let newAmount = updateLsCart(productId, amount)
    updateHtmlCart(productId, newAmount)
}






// const localStorageCart = JSON.parse(localStorage.getItem(lsCart))
// const cartEl = document.querySelector('.cartlist')

// if (cartList !== null) {
//     let newUl = document.createElement('ul')

//     cartList.appendChild(newUl)



//     .forEach(product => {
//         let newDiv = document.createElement('div')

//     })
// }



document.querySelectorAll('.addtocart-btn').forEach(el => {
    el.addEventListener('click', addToCart)
});



//bugfix
let $grid = $('.productcards').imagesLoaded(function () {
    $grid.masonry();
    $('.productcards').animate({
        'opacity': 1
    });
});
