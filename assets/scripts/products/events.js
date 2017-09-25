'use strict'

const productApi = require('./api.js')
const productUi = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')

const onCreateProduct = function (event) {
  console.log('passing through products event js')
  console.log(data)
  event.preventDefault()
  const data = getFormFields(event.target)
  // may need to update name of create after html is created
  productApi.createProduct(data)
    .then(productUi.onCreateProductSuccess)
    .catch(productUi.onCreateProductError)
}

// is 'const data' necessary for functionality?
const onGetAllProducts = function (event) {
  console.log('passing through get all events.js')
  event.preventDefault()
  const data = getFormFields(event.target)
  productApi.getAllProducts(data)
    .then(productUi.onGetAllProductsSuccess)
    .catch(productUi.onGetAllProductsError)
}

const onGetProduct = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  productApi.getProduct(data)
    .then(productUi.onGetProductSuccess)
    .catch(productUi.onGetProductError)
}

let id = ''

const onClickUpdate = function (event) {
  id = $(this).data('id')
}

const onUpdateProduct = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('passing through events.js')
  console.log(data)
  console.log(id)
  productApi.updateProduct(data, id)
    .then(productUi.onUpdateProductSuccess)
    .catch(productUi.onUpdateProductError)
}

const onDeleteProduct = function (event) {
  event.preventDefault()
  const id = $(this).data('id')
  productApi.deleteProduct(id)
    .then(productUi.onDeleteProductSuccess)
    .catch(productUi.onDeleteProductError)
}

module.exports = {
  onCreateProduct,
  onGetAllProducts,
  onGetProduct,
  onClickUpdate,
  onUpdateProduct,
  onDeleteProduct
}
