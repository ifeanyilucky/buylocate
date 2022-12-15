import React, { createContext, useEffect, useReducer } from 'react';
import axios from '../utils/axios';
import Cookies from 'universal-cookie';
import { isValidToken, setSession, decoded } from '../utils/jwt';
import { PATH_AUTH } from 'src/routes/path';
import { useNavigate } from 'react-router-dom';

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
  token: null,
};

const handlers = {
  INITIALIZE: (state, action) => {
    const { isAuthenticated, user } = action.payload;
    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user,
    };
  },
  LOGIN: (state, action) => {
    const { user } = action.payload;
    return {
      ...state,
      isAuthenticated: true,
      user,
    };
  },
  LOGOUT: (state) => {
    return {
      ...state,
      isAuthenticated: false,
      user: null,
    };
  },
  REGISTER: (state, action) => {
    const { user } = action.payload;
    return {
      ...state,
      isAuthenticated: true,
      user,
    };
  },
};

const reducer = (state, action) =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

const AuthContext = createContext({
  ...initialState,
  method: 'jwt',
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  register: () => Promise.resolve(),
});

export default function AuthProvider(props) {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialState);
  const cookie = new Cookies();
  const navigate = useNavigate();
  useEffect(() => {
    const initialize = async () => {
      const token = cookie.get('token');

      try {
        if (token && isValidToken(token)) {
          setSession(token);
          const response = await axios.get(`/auth/account/${decoded.userId}`);
          const { user } = response.data;
          console.log(user);
          dispatch({
            type: 'INITIALIZE',
            payload: {
              isAuthenticated: true,
              user: user,
              token: token,
            },
          });
        } else {
          dispatch({
            type: 'INITIALIZE',
            payload: {
              isAuthenticated: false,
              user: null,
            },
          });
        }
      } catch (error) {
        dispatch({
          type: 'INITIALIZE',
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
    };
    initialize();
  }, []);

  const login = async (email, password) => {
    const response = await axios.post('/auth/login', { email, password });
    const { token, user } = response.data;
    console.log(response);
    setSession(token);
    dispatch({
      type: 'LOGIN',
      payload: {
        user: user,
      },
    });
  };

  const registerUser = async (payload) => {
    const response = await axios.post('/auth/register', { ...payload });
    const { token, user } = response.data;

    setSession(token);
    dispatch({
      type: 'REGISTER',
      payload: {
        user,
      },
    });
  };

  const logout = () => {
    setSession(null);
    dispatch({ type: 'LOGOUT' });
    navigate(PATH_AUTH.login);
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: 'jwt',
        login,
        logout,
        registerUser,
      }}
    >
      <h1>{children}</h1>
    </AuthContext.Provider>
  );
}

export { AuthContext };
