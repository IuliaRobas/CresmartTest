export const isAuthenticated = () => {
  return localStorage.getItem("accessToken") ? true : false;
};
