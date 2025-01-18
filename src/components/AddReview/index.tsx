import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addReviews } from "../../Redux/review/reviewSlice";
import { FaStar } from "react-icons/fa";
import type { RootState } from "../../Redux/store";
import { ReviewInterface } from "../../Redux/review/reviewSlice"
import style from "./style.module.css"

export const AddReview = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
 const [isHovered, setIsHovered] = useState(false);

 const reviews = useSelector((state: RootState) => state.review.reviews);

// Функция для проверки и генерации идентификатора:
 const getCurrentUserId = () => {
  let currentUserId = localStorage.getItem("currentUserId"); // Пытаемся получить идентификатор
  if (!currentUserId) {
    currentUserId = uuidv4(); // Генерируем новый уникальный идентификатор
    localStorage.setItem("currentUserId", currentUserId); // Сохраняем его в localStorage
  }
  return currentUserId; // Возвращаем идентификатор
};

const currentUserId = getCurrentUserId();

 const userReviewExists = reviews.some((review: ReviewInterface) => review.user.userId === currentUserId);

  /** эта функция предотвращает обновление страницы по умолчанию при отправке формы и устанавливает значение ошибки, если длина символов меньше 5 или больше 50. 
В противном случае, если ошибок нет, она отправляет действие в редуктор для добавления новой задачи с уникальным идентификатором. И устанавливает значение ввода пустым */
  const handleAddTaskSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim().length < 5 || name.trim().length < 4) {
      setError("Minimum allowed length is 4");
    } else if (text.trim().length > 100 || name.trim().length > 50) {
      setError("Maximum allowed task length is 100");
    } else if (rating === null) {
      setError("Please select a rating!");
    } else if (userReviewExists) {
      setError("Вы уже оставили отзыв!");
    } else {
      dispatch(
        addReviews({
          text,
          id: uuidv4(),
          user: { userId: currentUserId, userName: name },
          rating: rating,
        })
      );
      setText("");
      setName("");
    }
  };

  const handleUpdateTodoChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    if (e.target.value.trim().length > 5 && e.target.value.trim().length < 50) {
      setError("");
    }
  };

  return (
    <form
      onSubmit={handleAddTaskSubmit}
      className={style.form}
      style={{
        border: isHovered ? "2px solid red" : "2px solid transparent",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          className={style.form_control}
          style={{ padding: "1rem" }}
        >
          <label
           style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: "1rem",
          }}
          >
            <span style={{ marginBottom: "0.5rem"}}>
              Имя:
            </span>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              id={currentUserId}
              type="text"
              className="forminput"
              placeholder="ваше имя"
              style={{
                width: "15rem",
                borderRadius: "0.5rem",
                paddingLeft: "1rem",
              }}
            />
          </label>
          <label
            style={{
              display: "flex",
              flexDirection: "column",
              marginBottom: "1rem",
            }}
          >
            <span style={{ marginBottom: "0.5rem"}}>
              Отзыв:
            </span>
            <textarea
              onChange={handleUpdateTodoChange}
              value={text}
              className="forminput"
              placeholder="Добавить отзыв..."
              style={{
                width: "100%",
                borderRadius: "0.5rem",
                paddingLeft: "1rem",
                resize: "none", // Запретить изменение размера
              }}
              rows={4} // Количество строк
            />
          </label>
          <div
            style={{
              display: "flex",
              marginTop: "1rem",
            }}
          >
            <p style={{ marginRight: "1rem" }}>Рейтинг:</p>
            {[...Array(5)].map((star, index) => {
              const currentRating = index + 1;
              return (
                <label>
                  <input
                    type="radio"
                    name="rating"
                    value={currentRating}
                    onClick={() => setRating(currentRating)}
                    style={{ display: "none" }}
                  />
                  <FaStar
                    style={{ cursor: "pointer" }}
                    size={30}
                    color={
                      currentRating <= (hover || rating) ? "#ffc107" : "#e4e5e9"
                    }
                    onMouseEnter={() => setHover(currentRating)}
                    onMouseLeave={() => setHover(null)}
                  />
                </label>
              );
            })}
          </div>
        </div>
        <button
          className="btn form_btn"
          style={{
            fontSize: "1.4rem",
            padding: "0 1rem",
            borderRadius: "0.5rem",
            background: "#e83a4b",
            border: "none",
            width: "50%",
            margin: "1rem auto",
          }}
        >
          Add Todo
        </button>
      </div>
      {error && (
        <p
          className="formerror-text"
          style={{
            color: "red",
            position: "absolute",
            fontSize: "1.3rem",
            bottom: "-2rem",
            left: "1rem"
          }}
        >
          {error}
        </p>
      )}
    </form>
  );
};
