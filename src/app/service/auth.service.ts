import { AuthLogin } from 'app/models';
import http from './http-common';

export const authLogin = async ({email, password} : AuthLogin) => {
  return await http.post('/auth/login', {
    email,
    password
  });
};

// export const test = async(email: string, password: string) => {
//     return await axios
//     .post(url, {
//       email: formValues.email,
//       password: formValues.password
//     })
//     .then((response: any) => {
//       setData(response.data.user);
//       if(response) {
//         navigate('/chatgpt1');
//       }
//     })
//     .catch((error) => {
//       setCheckEmail(error.response.data.message);
//     });
// }

// }
