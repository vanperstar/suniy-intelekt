import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import selection from "./selection";


const store = configureStore({
  reducer: {

    selection

  },
//   middleware: (getDefaultMiddleware) =>
//     getDefaultMiddleware().concat(
//       authApi.middleware,
//       categoryApi.middleware,
//       productApi.middleware
//     ),
  devTools: true,
});

export default store;
setupListeners(store.dispatch);