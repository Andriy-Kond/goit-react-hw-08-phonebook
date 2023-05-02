export const selectIsLoggedIn = store => store.storeAuth.isLoggedIn;
export const selectUserName = store => store.storeAuth.user.name;

// export const selectUserEmail = store => store.storeAuth.user.email;
export const selectUserToken = store => store.storeAuth.token;
