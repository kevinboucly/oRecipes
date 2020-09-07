export const getMessage = (state) => {
  return state.user.logged ? 'bienvenue' : 'Veuillez vous connecter';
};
