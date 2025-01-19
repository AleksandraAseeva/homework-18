import { BurgerMenu } from "../BurgerMenu";
import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.container}>
      <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen && (
        <div className={styles.wrapper}>
          <nav>
            <Link to="/homevork-18/beans" onClick={handleLinkClick}>
              Beans
            </Link>
            <Link to="/homevork-18/facts" onClick={handleLinkClick}>
              Facts
            </Link>
            <Link to="/homevork-18/recipes" onClick={handleLinkClick}>
              Recipes
            </Link>
            <Link to="/homevork-18/combinations" onClick={handleLinkClick}>
              Combinations
            </Link>
            <Link to="/homevork-18/history" onClick={handleLinkClick}>
              History
            </Link>
            <Link to="/homevork-18/reviews" onClick={handleLinkClick}>
              Reviews
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
};
