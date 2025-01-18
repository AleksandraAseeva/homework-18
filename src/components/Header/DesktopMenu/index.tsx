import { Link } from "react-router-dom";
import style from './styles.module.css'

export const DesktopMenu = () => {
  return (
    <nav className={style.navbar}>
      <Link to="/BeansProject/beans">Beans</Link>
      <Link to="/BeansProject/facts">Facts</Link>
      <Link to="/BeansProject/recipes">Recipes</Link>
      <Link to="/BeansProject/combinations">Combinations</Link>
      <Link to="/BeansProject/history">History</Link>
      <Link to="/BeansProject/reviews">Reviews</Link>
    </nav>
  );
};
