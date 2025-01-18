import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import beanSlice from "./bean/beanSlice";
import beansSlice from "./beans/beansSlice";
import combinationsSlice from "./combinations/combinationsSlice";
import factsSlice from "./facts/factsSlice";
import historySlice from "./history/historySlice";
import recipesSlice from "./recipes/recipesSlice";
import reviewSlice from "./review/reviewSlice";

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, reviewSlice)

// export const store = configureStore({
//   reducer: {
//     todos: persistedReducer
//   },
// })


//  Создает Redux store с помощью configureStore, который включает несколько редюсеров
export const store = configureStore({
  reducer: {
    // управляет состоянием группы бобов
    beans: beansSlice,
    // управляет состоянием конкретного боба
    bean: beanSlice,
    facts: factsSlice,
    recipes: recipesSlice,
    combinations: combinationsSlice,
    history: historySlice,
    review: persistedReducer
  },
});

const persistor = persistStore(store)

export {persistor};

// тип RootState представляет общее состояние приложения:
// type RootState = {
// beans: BeansState;
// bean: BeanState;
// facts: FactsState;
// recipes: RecipesState;
// combinations: CombinationsState;
// history: HistoryState
// }
export type RootState = ReturnType<typeof store.getState>;
// тип функции dispatch, который удастся использовать для типизации в приложении.
export type AppDispatch = typeof store.dispatch;
// Создаем и экспортируем пользовательский хук useAppDispatch,
// чтобы упростить использование dispatch в компонентах, автоматически добавляя правильные типы.
export const useAppDispatch = () => useDispatch<AppDispatch>();


