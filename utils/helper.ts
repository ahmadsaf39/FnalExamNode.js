export const getToken = () => {
  return localStorage.getItem(
    "token"
  );
};

export const removeToken = () => {
  localStorage.removeItem(
    "token"
  );
};

export const isAuthenticated =
  () => {
    return !!getToken();
  };

export const formatRole = (
  role: string
) => {
  return role.toUpperCase();
};