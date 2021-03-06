import request from '../utils/request';
import qs from 'qs';

export async function query(api, params) {
  // console.log(api,params)
    return request(api, {
      method: 'post',
      body: qs.stringify(params),
      params: params
    });
}
