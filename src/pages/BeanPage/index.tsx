import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Error } from "../../components/Error";
import { Loader } from "../../components/Loader";
import { beanSelector } from "../../Redux/bean/beanSelector";
import { useAppDispatch } from "../../Redux/store";
import "./styles.css";
import { getBean } from "../../api/bean";

// Компонент, который отображает информацию о конкретном бобе (bean) 
// на основе извлеченного из URL идентификатора (id).
export const BeanPage = () => {
  // Извлечение параметра id из URL, который будет использоваться для запроса данных конкретного боба.
  // useParams: Хук из React Router для извлечения параметров из URL.
  const { id } = useParams();
  // Получение функции dispatch для отправки действий в Redux.
  const dispatch = useAppDispatch();
  // Извлечение состояния бобов (данные, состояние загрузки и наличие ошибок) 
  // из Redux store с использованием селектора.
  const { data, isLoading, isError } = useSelector(beanSelector);

  // Эффект, который срабатывает при монтировании компонента или изменении параметра id. 
  // При срабатывании он вызывает dispatch(getBean(id)), 
  // инициируя запрос к API для получения данных о бобе по его идентификатору.
  useEffect(() => {
    dispatch(getBean(id));
  }, [id]);

  return (
    // Если isLoading является истинным, отображается компонент Loader.
    <>
      {isLoading && <Loader />}

      {data && (
        // Если data существует (данные получены), отображается информация о бобе, 
        // включая изображение, название, описание, ингредиенты и информацию о наличии/отсутствии глютена.
        <div
          className="bean_container"
          style={{ background: data.backgroundColor }}
        >
          <img src={data.imageUrl} alt="" />
          <div className="info">
            <h1>{data.flavorName}</h1>
            <h3>{data.description}</h3>
            <p>Ingredients: {data.ingredients.map((item) => item + " , ")}</p>
            <p>{data.glutenFree ? "No gluten" : "With gluten"}</p>
          </div>
        </div>
      )}
      {isError && <Error />}
    </>
    // Если возникла ошибка (isError истинно), отображается компонент Error.
  );
};
