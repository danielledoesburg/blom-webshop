function getIndexById(objAr, id) {
    return objAr.findIndex(obj => obj.id == id)
}

function getCategories() {
    let categorieList = categories.map(cat => {return {...cat}})
    return categorieList
}

function getProductData() {
    let productList = productData.map(prod => {return {...prod}})
    return productList
}

function getProductInfo(id) {
    return getProductData().find(prod => prod.id == id)
}

function capFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function toMoney(num) {
    return '€' + num.toFixed(2).replace('.', ',')
}