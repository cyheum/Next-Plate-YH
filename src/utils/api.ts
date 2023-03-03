import axios from 'axios';

type IPostBodyData = any;

export const IS_LOCALHOST =
  typeof window !== 'undefined' &&
  (window.location.hostname === 'localhost' ||
    window.location.hostname === 'dev.localhost');

export const LOCAL_API = 'http://127.0.0.1:8000';
export const DEV_API = 'https://dev.cyh.kr/api';
export const STAGE_API = 'https://cyh.kr/api';

const instance = axios.create({
  baseURL: IS_LOCALHOST ? DEV_API : '/api',
  timeout: 80000,
  xsrfCookieName: 'csrftoken',
  xsrfHeaderName: 'X-CSRFTOKEN',
});

export const GET = async (entry: string, payload?: { params?: any }) => {
  if (typeof window !== 'undefined') {
    try {
      const data = await instance({
        method: 'GET',
        url: entry,
        params: payload?.params,
      });
      return data.data;
    } catch (error) {
      const code = error.response.status;

      if (code === 403 || code === 401) {
        window.location.href = '/login';
      }

      throw error;
    }
  }
};

export const POST = async (
  entry: string,
  payload?: { bodyData: IPostBodyData }
) => {
  if (typeof window !== 'undefined') {
    try {
      const data = await instance({
        url: entry,
        method: 'POST',
        data: payload?.bodyData,
      });
      return data.data;
    } catch (error) {
      const code = error.response.status;

      if (code === 403 || code === 401) {
        window.location.href = '/login';
      }

      throw error;
    }
  }
};

export const DELETE = async (
  entry: string,
  payload?: { params?: any; bodyData?: any }
) => {
  if (typeof window !== 'undefined') {
    try {
      const res = await instance({
        url: entry,
        method: 'DELETE',
        params: payload?.params,
        data: payload?.bodyData,
      });
      return res;
    } catch (error) {
      const code = error.response.status;

      if (code === 403 || code === 401) {
        window.location.href = '/login';
      }

      throw error;
    }
  }
};

export const PATCH = async (entry: string, payload?: { bodyData: any }) => {
  if (typeof window !== 'undefined') {
    try {
      const res = await instance({
        url: entry,
        method: 'PATCH',
        data: payload?.bodyData,
      });
      return res;
    } catch (error) {
      const code = error.response.status;

      if (code === 403 || code === 401) {
        window.location.href = '/login';
      }

      throw error;
    }
  }
};
