// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 登录接口 POST /api/user/login/account */
export async function loginAccount(body: API.LoginParams, options?: { [key: string]: any }) {
  return request<API.LoginResult>('/api/user/login/account', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
/** 根据token获取用户信息接口 GET /api/user/currentUserInfo */
export async function currentUserInfo(options?: { [key: string]: any }) {
  return request<{
    data: API.CurrentUser;
  }>('/api/user/currentUserInfo', {
    method: 'GET',
    ...(options || {}),
  });
}
