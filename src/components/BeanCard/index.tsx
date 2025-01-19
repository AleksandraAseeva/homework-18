import { FC } from "react";
import { Link } from "react-router-dom";
import { Bean } from "../../types";
import styles from "./styles.module.css";

type Props = {
  data: Bean;
};
export const BeanCard: FC<Props> = ({ data }) => {
  return (
    <Link
      to={`/homevork-18/bean/${data.beanId}`}
      className={styles.wrapper}
      style={{
        background: data.backgroundColor,
      }}
    >
      <img src={data.imageUrl} alt="" />
      <h3>{data.flavorName}</h3>
      <p>{data.description}</p>
    </Link>
  );
};
