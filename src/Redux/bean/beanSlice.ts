
import { createSlice } from "@reduxjs/toolkit";
// импортируем тип состояния
import { BeanState } from "../../types/state";
// импортируем асинхронное действие
import { getBean } from "../../api/bean";

// Определяем начальное состояние initialState, которое включает:
// isLoading: флаг загрузки.
// data: данные о бобе (изначально null).
// isError: флаг наличия ошибки.
const initialState: BeanState = {
  isLoading: false,
  data: null,
  isError: false,
};

// Создаем срез с помощью метода createSlice, который управляет состоянием для боб
const beanSlice = createSlice({
  // название
  name: "bean",
  // храним начальное состояние
  initialState,
  reducers: {},
  // Обрабатываем асинхронные действия (extraReducers) для работы с состояниями загрузки,
  // успешного получения и ошибок при запросе данных о бобе
  extraReducers: (builder) => {
    builder.addCase(getBean.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
      state.data = null;
    });
    builder.addCase(getBean.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.data = payload;
    });
    builder.addCase(getBean.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

// Экспортируем редюсер среза по умолчанию, 
// который будет использоваться в хранилище Redux для управления состоянием.
export default beanSlice.reducer;
