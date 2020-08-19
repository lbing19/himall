import { request } from './request'

export function getMultidata() {
  return request({
    url: '/home/multidata'
  })
}

//获取首页商品列表
export function getHomeGoods(type, page) {
  return request({
    url: '/home/data',
    params: {
      type, page
    }
  })
}