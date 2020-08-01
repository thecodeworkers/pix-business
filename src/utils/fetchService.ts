import { call } from 'redux-saga/effects';
import { HOST_URI } from './path';
import { API_KEY } from './constants';
import axios from 'axios';

export default function* (url: string, method: string = 'GET', data: any | null = null, auth: boolean = false) {
  const objectRequest: any = {
    method,
    url: `${HOST_URI}${url}`,
    data,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json'
    }
  }

  if(auth) objectRequest.headers['Authorization'] = `Bearer ${API_KEY}`;

  const response = yield call(axios, objectRequest);
  const responseBody = response.data;

  return responseBody;
}
