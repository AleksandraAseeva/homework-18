import { createSlice } from "@reduxjs/toolkit";

export interface UserInterface {
  userId: string;
  userName: string;
}

export interface ReviewInterface {
  id: string;
  user: UserInterface;
  text: string;
  rating: number;
}

export interface ReviewsListInterface {
  reviews: ReviewInterface[];
}

const initialState: ReviewsListInterface = {
  reviews: [],
};

const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    addReviews: (state, { payload }: { payload: ReviewInterface }) => {
      const { id, user, text, rating } = payload; // здесь мы используем payload как ReviewInterface
      state.reviews.push({ id, user, text, rating });
    }, // Пока такое удаление
    deleteReviews: (state, { payload: { reviewId } }) => {
        state.reviews = state.reviews.filter((review) => review.id !== reviewId)
    }
  },
});

export const {addReviews, deleteReviews} = reviewSlice.actions;
// Экспортируем редюсер среза по умолчанию,
export default reviewSlice.reducer;
