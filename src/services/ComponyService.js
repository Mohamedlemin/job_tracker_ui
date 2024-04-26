
import fetch from 'auth/FetchInterceptor'

const ComponyService = {}

ComponyService.getPost = function (params) {
  return fetch({
    url: '/posts/1',
    method: 'get',
    params
  })
}

ComponyService.setPost = function (data) {
  return fetch({
    url: '/posts',
    method: 'post',
    data: data
  })
}

export default ComponyService