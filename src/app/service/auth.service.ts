import { AuthLogin } from 'app/models';
import http from './http-common';

export const authLogin = async ({email, password} : AuthLogin) => {
  return await http.post('/auth/login', {
    email,
    password
  });
};

