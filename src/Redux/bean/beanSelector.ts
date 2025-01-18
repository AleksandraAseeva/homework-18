// Импортируем тип RootState из файла store.ts, который представляет общее состояние приложения.
import { RootState } from "../store";

// Определяем селектор beanSelector, который принимает состояние приложения как аргумент 
// и возвращает часть состояния, относящуюся к конкретному бобу (state.bean).
export const beanSelector = (state: RootState) => {
  return state.bean;
};
// Этот селектор используется в компонентах приложения для получения данных из Redux store, 
// что упрощает взаимодействие с состоянием и улучшает читаемость кода.