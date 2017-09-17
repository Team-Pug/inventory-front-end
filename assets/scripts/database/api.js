'use strict'

const app = require('../store.js')

const create = function (data) {
  console.log('passing thought api js')
  console.log(app.host)
  return $.ajax({
    url: app.host + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = function (data) {
  console.log('data in api.js is: ' + data)
  return $.ajax({
    url: app.host + '/sign-in',
    method: 'POST',
    data
  })
}

const changePassword = function (data) {
  console.log('passing through the api.js')
  return $.ajax({
    url: app.host + '/change-password/' + app.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data
  })
}

const signOut = function () {
  console.log('passing through the api.js')
  return $.ajax({
    url: app.host + '/sign-out/' + app.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

module.exports = {
  create,
  signIn,
  changePassword,
  signOut
}
