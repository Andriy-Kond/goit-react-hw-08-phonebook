// export const selectIsLoggedIn = store => store.storeAuth.isLoggedIn;
export const selectIsRefreshing = store => store.storeAuth.isRefreshing;
export const selectIsToken = store => store.storeAuth.token;

export const selectUserName = store => store.storeAuth.user.name;

// export const selectUserEmail = store => store.storeAuth.user.email;
export const selectUserToken = store => store.storeAuth.token;
