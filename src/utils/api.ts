import axios from 'axios';
import {
  IPostCart,
  IPostAutoShip,
  IPostPetInfo,
  IPostAutoShipFriendDiscount,
  IPostIssuecardBodyData,
  IPostAutoShipCartItem,
} from '@/interfaces';

type IPostBodyData =
  | IPostCart
  | IPostAutoShip
  | IPostPetInfo
  | IPostAutoShipFriendDiscount
  | IPostIssuecardBodyData
  | IPostAutoShipCartItem[]
  | any;

export const IS_LOCALHOST =
  typeof window !== 'undefined' &&
  (window.location.hostname === 'localhost' ||
    window.location.hostname === 'dev.localhost');
export const DEV_API = 'https://dev.purplesto.re/api';
export const STAGE_API = 'https://stage.purplesto.re/api';

const auth = {
  username: process.env.NEXT_PUBLIC_USER_NAME ?? '',
  password: process.env.NEXT_PUBLIC_USER_PASSWORD ?? '',
};

const instance = IS_LOCALHOST
  ? axios.create({
      baseURL: DEV_API,
      timeout: 40000,
      xsrfCookieName: 'csrftoken',
      xsrfHeaderName: 'X-CSRFTOKEN',
      auth,
    })
  : axios.create({
      baseURL: '/api',
      timeout: 40000,
      xsrfCookieName: 'csrftoken',
      xsrfHeaderName: 'X-CSRFTOKEN',
    });

export const GET = async (entry: string, payload?: { params?: any }) => {
  const data = await instance({
    method: 'GET',
    url: entry,
    params: payload?.params,
  });
  return data.data;
};

export const POST = async (
  entry: string,
  payload?: { bodyData: IPostBodyData }
) => {
  const data = await instance({
    url: entry,
    method: 'POST',
    data: payload?.bodyData,
  });
  return data.data;
};

export const DELETE = async (
  entry: string,
  payload?: { params?: any; bodyData?: any }
) => {
  const res = await instance({
    url: entry,
    method: 'DELETE',
    params: payload?.params,
    data: payload?.bodyData,
  });
  return res;
};

export const PATCH = async (entry: string, payload?: { bodyData: any }) => {
  const res = await instance({
    url: entry,
    method: 'PATCH',
    data: payload?.bodyData,
  });
  return res;
};
