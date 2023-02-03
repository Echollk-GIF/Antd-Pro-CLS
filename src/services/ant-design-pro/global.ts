// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

export async function queryProvince(): Promise<{ data: API.GeographicItemType[] }> {
  return request('/api/geographic/province');
}

export async function queryCity(province: string): Promise<{ data: API.GeographicItemType[] }> {
  return request(`/api/geographic/city/${province}`);
}
