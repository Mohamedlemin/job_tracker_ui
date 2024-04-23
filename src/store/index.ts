import rootReducer from './rootReducer';
import { configureStore } from '@reduxjs/toolkit';

const middlewares: any[] = [];

const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			immutableCheck: false,
			serializableCheck: false,
		}).concat(middlewares),
	devTools: process.env.NODE_ENV === 'development',
});

// No need for store.asyncReducers in Redux Toolkit

// export const injectReducer = (key, reducer) => {
// 	if (!store.getState()[key]) {
// 		store.replaceReducer({ ...rootReducer, [key]: reducer });
// 	}
// };

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;


export default store;
