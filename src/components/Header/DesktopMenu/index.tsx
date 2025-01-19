import { Link } from "react-router-dom";
import style from './styles.module.css'

export const DesktopMenu = () => {
  return (
    <nav className={style.navbar}>
      <Link to="/homevork-18/beans">Beans</Link>
      <Link to="/homevork-18/facts">Facts</Link>
      <Link to="/homevork-18/recipes">Recipes</Link>
      <Link to="/homevork-18/combinations">Combinations</Link>
      <Link to="/homevork-18/history">History</Link>
      <Link to="/homevork-18/reviews">Reviews</Link>
    </nav>
  );
};
