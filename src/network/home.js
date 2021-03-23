// home再次封装请求
import { request } from './request'

export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}