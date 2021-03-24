// home再次封装请求
import { request } from './request'

export function getHomeMultidata() {
  return request({
    url: '/home/multidata'
  })
}

// 获取首页的数据
// type: pop 或 new 或 sell
export function getHomeGoods(type, page) {
  return request({
    url: '/home/data',
    params: {
      type,
      page,
    }
  })
}