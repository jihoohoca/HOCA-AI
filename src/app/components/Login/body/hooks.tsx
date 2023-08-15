import { useAuthActions } from 'app/actions';
import { AuthLogin } from 'app/models';
import { authLogin } from 'app/service/auth.service';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const authActions = useAuthActions(dispatch);


  const login = async (user: AuthLogin) => {
    let result = await authLogin(user);

    if (result) {
      navigate('/chatgpt1');
      authActions.authLogin({email: user.email, password: user.password});
      localStorage.setItem('accessToken', JSON.stringify(result.data.tokens.access));
      localStorage.setItem('refreshToken', JSON.stringify(result.data.tokens.refresh));
    }
  };

  return {
    login
  };
};

export { useAuth };
