import { Link } from "react-router-dom";
import style from "./style.module.css";

export const ApiButton = () => {

  return (
    <button className={style.ApiB}>
        <Link to="/homevork-18/documentation" className={style.TextInB}>API Doc</Link>
    </button>
  );
};

