import ReviewItem from "./ReviewItem/ReviewItem";
import { ReviewInterface } from "../../Redux/review/reviewSlice"
import styled from "styled-components";

// задали типы для каждого передаваемого свойства
type ReviewListProps = {
  review: ReviewInterface[];
};

const List = styled.div`
    padding-left: 0;
    width: 10rem;
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ReviewList = ({
  review,
}: ReviewListProps) => {
  return (
    <List>
      {review

        .map((review) => (
          <ReviewItem
            key={review.id}
            review={review}
          />
        ))}
    </List>
  );
};

export default ReviewList;
