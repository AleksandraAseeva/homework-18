import { FC } from "react";
import { Fact } from "../../types";
import styles from "./styles.module.css";
type Props = {
  data: Fact;
};
export const FactCard: FC<Props> = ({ data }) => {
  return (
    <div className={styles.wrapper}>
      <h3>{data.factId}. {data.title}</h3>
      <p>{data.description}</p>
    </div>
  );
};
