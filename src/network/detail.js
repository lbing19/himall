import { request } from './request'

//获取商品详情
export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}