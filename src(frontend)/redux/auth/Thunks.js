import { login, logout } from './Actions';

export const loginAsync = (userData) => (dispatch) => {
  // Async login logic, e.g., API call
  dispatch(login(userData));
};

export const logoutAsync = () => (dispatch) => {
  // Async logout logic, e.g., API call
  dispatch(logout());
};