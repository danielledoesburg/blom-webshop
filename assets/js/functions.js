function getIndexById(objAr, id) {
    return objAr.findIndex(obj => obj.id == id)
}

function getCategories() {
    return categories
}

function getProducts() {
    return productList
}

function getProductInfo(id) {
    return productList.find(prod => prod.id == id)
} 

function capFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function toMoney(num) {
    return '€' + num.toFixed(2).replace('.', ',')
}