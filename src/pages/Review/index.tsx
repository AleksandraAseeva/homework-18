import { useSelector } from "react-redux";
import type { RootState } from "../../Redux/store";
import { AddReview } from "../../components/AddReview";
import  ReviewList  from "../../components/ReviewsList/ReviewsList";
import styled from 'styled-components';

export interface TodoInterface {
  id: string;
  task: string;
  completed: boolean;
}

export const Reviews = () => {
// здесь мы переходим к состоянию todos и читаем его при каждом изменении
  const review = useSelector((state: RootState) => state.review); // первый туду это редюсер из store.ts, второй это массив задач из todo.ts

const AppWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%
`;

const AppInputsBox = styled.div`
    display: flex;
    // flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`

return (
    <main className="app" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <AppWrapper>
        <div className="appheader">
          <h1 className="apptitle" style={{fontSize: '3rem'}}>Todo App</h1>
        </div>
        <AppInputsBox className="app_inputs-box">
          <AddReview />
        </AppInputsBox>
        <ReviewList
          review={review.reviews}
        />
      </AppWrapper>
    </main>
  );
};

