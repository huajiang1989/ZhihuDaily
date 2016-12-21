/**
 * Created by huajiang1989 on 16/6/22.
 */
import Vue from 'vue'

const apiUrl = 'http://localhost:9000'
module.exports = (params) => {
  Vue.http.options.headers = {
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8;'
  }
  // Vue.http.options.xhr = {
  //   withCredentials: true
  // }
  Vue.http.options.emulateJSON = true
  Vue.http.jsonp(apiUrl + params.url,
    { params: params.data || {}
    })
    .then((response) => {
      let data = response.data
      params.callback(data)
    }, (response) => {
      // error callback
    })
}
