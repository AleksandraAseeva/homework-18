// импортируем createAsyncThunk - метод для созд. асинхронных операций (thunks) в Redux
import { createAsyncThunk } from "@reduxjs/toolkit";
// импортируем экземпляр
import { instance } from "./axiosInstance";

// с помощью createAsyncThunk создаем асинхронное действие под названием getBean.
// первый аргумент - тип действия "bean", который используется в Redux для отслеживания состояния загрузки, успеха или ошибки.
// внутри ф-ии асинхронный запрос к API, используя метод get экземпляра instance.
export const getBean = createAsyncThunk("bean", async (id: string) => {
  // формируется URL запроса: https://jellybellywikiapi.onrender.com/api/Beans/${id},
  // где ${id} — это идентификатор боба (bean), который передается в качестве аргумента функции
  const { data } = await instance.get(`/Beans/${id}`);
  // когда запрос завершен, данные из ответа сохраняются в переменную data, и в конце они возвращаются из функции. 
  return data;
});
