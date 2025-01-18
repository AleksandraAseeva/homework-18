import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "./axiosInstance";

// создаем асинхронное действие
export const getBeans = createAsyncThunk("beans", async (page: number) => {
  // параметр page передается в качестве аргумента функции. 
  // это число, представляющее текущую страницу данных, которые вы хотите получить.
  // Пример конечного запроса, который будет сгенерирован: 
  // https://jellybellywikiapi.onrender.com/api/Beans?pageIndex=1&pageSize=15 (если page равно 1).
  const { data } = await instance.get(`/Beans?pageIndex=${page}&pageSize=15`);
  return data;
});
