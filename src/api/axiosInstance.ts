// импортируем библиотеку которая работает с запросами к API
import axios from "axios";

// создаем экземпляр axios с помощью axios.create
export const instance = axios.create({
  // базовый url по которому будут выполняться запросы
  baseURL: "https://jellybellywikiapi.onrender.com/api",
});
