export const addUserToLocalStorage = (user) => {
  localStorage.setItem('entUser', JSON.stringify(user));
};

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem('entUser');
};

export const getUserFromLocalStorage = () => {
  const result = localStorage.getItem('entUser');
  const user = result ? JSON.parse(result) : null;
  return user;
};
