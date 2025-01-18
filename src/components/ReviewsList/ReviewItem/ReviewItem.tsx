// import React from "react";
// import { MdModeEditOutline } from "react-icons/md";
import { FaTrashAlt, FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteReviews } from "../../../Redux/review/reviewSlice";
import { ReviewInterface } from "../../../Redux/review/reviewSlice";
import styled from "styled-components";

type ReviewItemProps = {
  review: ReviewInterface;
};

const TodoItem = ({
  review,
}: 

ReviewItemProps) => {
  const dispatch = useDispatch();

  /** Этот обработчик событий удаляет текущее задание при нажатии кнопки "удалить"
 Он также сбрасывает состояние editTodo, если оно удалено*/
  const currentUserId = localStorage.getItem("currentUserId");

  const handleDeleteTodoClick = () => {
    if (review.user.userId === currentUserId) {
      dispatch(deleteReviews({ reviewId: review.id }));
    }
  };

  const TodoListItem = styled.div`
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    height: 9rem;
    font-size: 1.3rem;
    width: 25rem;
    align-items: center;
    margin: 1rem;
    background-color: white;
    padding: 1rem;
    border-radius: 1rem;

    @media (max-width: 420px) {
    height: 6rem;
    font-size: 1rem;
    width: 15rem;
  }
  `;

  return (
    <TodoListItem>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.1rem"}}>
        <label htmlFor={review.id} className="todo-listlabel">
        <span style={{marginRight: "0.5rem"}}>Имя:</span>
          {review.user.userName}
        </label>

        <label htmlFor={review.id} className="todo-listlabel">
          <span style={{marginRight: "0.5rem"}}>Отзыв:</span>
          {review.text}
        </label>

        <label htmlFor={review.id}>
          <div style={{ display: "flex", gap: "0.2rem" }}>
            {[...Array(5)].map((_, index) => (
              <FaStar
                key={index}
                color={index < review.rating ? "#ffc107" : "#e4e5e9"}
                size={20}
              />
            ))}
          </div>
        </label>
      </div>

      <div
        className="todo-listbtns-box"
        style={{ display: "flex", gap: "1rem" }}
      >
        <button
          style={{ border: "none", marginRight: "1rem", background: "none" }}
          onClick={handleDeleteTodoClick}
          className="todo-listbtn todo-list_delete-btn"
        >
          <FaTrashAlt />
        </button>
      </div>
    </TodoListItem>
  );
};

export default TodoItem;
