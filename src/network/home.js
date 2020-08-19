import { request } from './request'

export function getMultidata() {
  return request({
    url: '/home/multidata'
  })
}