import fetch from 'auth/FetchInterceptor'

const exampleService = {

  getPost: function (params: any) {
    return fetch({
      url: '/posts/1',
      method: 'get',
      params
    })
  },

  setPost: function (data: any) {
    return fetch({
      url: '/posts',
      method: 'post',
      data: data
    })
  },
}
export default exampleService